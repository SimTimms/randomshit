import gql from 'graphql-tag';

export const LATEST_MINIS_WIDGET = gql`
  {
    savedGameMany {
      url
    }
  }
`;
