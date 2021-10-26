import gql from 'graphql-tag';

export const UPDATE_PROFILE = gql`
  mutation UpdateUserMutation(
    $name: String!
    $summary: String
    $profileBG: String
    $profileImg: String
    $creativeTrue: Boolean
    $creatorTrue: Boolean
    $facebook: String
    $twitter: String
    $website: String
    $instagram: String
    $linkedIn: String
    $publicEmail: String
    $skype: String
    $phone: String
  ) {
    userUpdateOne(
      record: {
        name: $name
        summary: $summary
        profileBG: $profileBG
        profileImg: $profileImg
        creativeTrue: $creativeTrue
        creatorTrue: $creatorTrue
        facebook: $facebook
        twitter: $twitter
        website: $website
        instagram: $instagram
        linkedIn: $linkedIn
        publicEmail: $publicEmail
        skype: $skype
        phone: $phone
      }
    ) {
      recordId
    }
  }
`;
