import gql from 'graphql-tag';

export const LATEST_MINIS_WIDGET = gql`
  {
    savedGameMany(sort: CREATEDAT__UPDATEDAT_DESC, limit: 8) {
      _id
      url
      likes
      saveDataColors
      saveDataParts
      model {
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
      }
    }
  }
`;

export const UPDATE_LIKES = gql`
  mutation savedGameLike($url: String) {
    savedGameLike(url: $url)
  }
`;
