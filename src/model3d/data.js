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

export const SAVE_GAME_IMAGE = gql`
  mutation savedGameCreateOne(
    $url: String
    $model: MongoID
    $saveDataColors: String
    $saveDataParts: String
  ) {
    savedGameCreateOne(
      record: {
        url: $url
        model: $model
        saveDataColors: $saveDataColors
        saveDataParts: $saveDataParts
      }
    ) {
      recordId
    }
  }
`;
