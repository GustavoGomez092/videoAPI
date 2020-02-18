import { gql } from 'apollo-server-express'

export default gql`
  type screenRecorder {
    imageURL: String!
    slogan: String!
  }

extend type Mutation {
  createVideo (
    imageURL: String!
    slogan: String!
    animation: AllowedAnimations
    ): Result!
  }
type Subscription {
    renderFinished: Result!
}

type Result {
    url: String,
    requestID: String!
}

enum AllowedAnimations {
  FADE_IN_FROM_LEFT
  FLIP_X_CENTER
  INERTIAL_BOUNCE_CENTER
  POP_UP_SHAPES
}

`
