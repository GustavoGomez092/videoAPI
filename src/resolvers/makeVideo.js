import { ApolloError } from 'apollo-server-express'
import utils from '../utils'
import { Check } from 'check-tfm'

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

        // Start the video capture
        return screenRecorder(imageURL, slogan)
      } catch (e) {
        throw new ApolloError(e.message)
      }
    }
  }
}
