import gql from 'graphql-tag';

export const LATEST_MINIS_WIDGET = gql`
  {
    savedGameMany(sort: CREATEDAT__UPDATEDAT_DESC, limit: 12) {
      url
      likes
      saveDataColors
      saveDataParts
      model {
        _id
        gltf
      }
    }
  }
`;

export const MY_MODELS = gql`
  {
    myModels {
      _id
      url
      likes
      saveDataColors
      saveDataParts
      model {
        _id
        gltf
      }
    }
  }
`;

export const UPDATE_LIKES = gql`
  mutation savedGameLike($url: String) {
    savedGameLike(url: $url)
  }
`;

export const DELETE_MODEL = gql`
  mutation savedGameRemoveById($_id: MongoID!) {
    savedGameRemoveById(_id: $_id) {
      recordId
    }
  }
`;
