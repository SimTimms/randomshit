import gql from 'graphql-tag';

export const GAME_BY_ID = gql`
  query gameById($_id: MongoID!) {
    gameById(_id: $_id) {
      _id
      name
      summary
      featureImage
      gltf
      bin
      js
      url
      price
      user {
        _id
        name
        profileImg
      }
      gamePart {
        _id
        name
        gltf
        js
        bin
      }
      gamePost {
        name
        url
        video
        img
        summary
      }
    }
  }
`;
