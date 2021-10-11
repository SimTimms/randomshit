import gql from 'graphql-tag';

export const PART_BY_ID = gql`
  query gameById($gameId: MongoID!) {
    gameById(_id: $gameId) {
      _id
      name
      featureImage
      gltf
      js
    }
  }
`;
