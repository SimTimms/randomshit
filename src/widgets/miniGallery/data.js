import gql from 'graphql-tag';

export const LATEST_MINIS_WIDGET = gql`
  {
    savedGameMany(sort: CREATEDAT__UPDATEDAT_DESC, limit: 100) {
      url
      likes
      _id
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
