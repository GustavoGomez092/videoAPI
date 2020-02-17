import { ApolloError, withFilter, PubSub } from 'apollo-server-express'
import utils from '../utils'
import { Check } from 'check-tfm'
import uniqid from 'uniqid'

export const pubsub = new PubSub()

const { screenRecorder } = utils

// Random String generator

export default {

  Mutation: {
    createVideo: async (root, { imageURL, slogan }, { User, token: { payload, error } }, info) => {
      try {
        // Check if the authorization header was received
        if (!payload) { throw new Error(error) }

        // If there is a payload ensure that there is a user with the payload
        let requester = await User.model.findById(payload.id)

        // Return an error if no user found with that id
        if (!requester) { throw new Error('Invalid payload') }

        // If user found proceed to verify that the user is an admin
        let { response } = Check.that(requester.role).is('admin')

        // If the user does not meet the minimum requirements return error
        if (!response) { throw new Error('Insufficient permissions for this request') }

        // generate a request ID
        let requestID = uniqid()

        // Start the video capture
        let downloadUrl = new Promise(async (resolve, reject) => {
          try {
            let fileURL = await screenRecorder(imageURL, slogan)
            console.log(fileURL)
            // fire subscription
            pubsub.publish('RESPONSE_ADDED', { renderFinished: { url: fileURL, requestID } })
            resolve(fileURL)
          } catch (error) {
            console.log(error)
            reject(error)
          }
        })

        console.log(downloadUrl)

        // finish the mutation
        return { url: 'Render added to queue, refer to your requestID on subscriptions', requestID }
      } catch (e) {
        throw new ApolloError(e.message)
      }
    }
  },
  Subscription: {
    renderFinished: {
      subscribe: withFilter(
        () => pubsub.asyncIterator(['RESPONSE_ADDED']),
        async (payload, variables, headers, context) => {
          return true
        }
      )
    }
  }
}
