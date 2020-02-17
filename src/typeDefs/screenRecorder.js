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
    ): String
  }

`