import gql from 'graphql-tag';

export const LATEST_MINIS_WIDGET = gql`
  {
    savedGameMany {
      url
      likes
    }
  }
`;

export const UPDATE_LIKES = gql`
  mutation savedGameLike($url: String) {
    savedGameLike(url: $url)
  }
`;
