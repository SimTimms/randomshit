import gql from 'graphql-tag';

export const PART_BY_ID = gql`
  query gameById($gameId: MongoID!) {
    gameById(_id: $gameId) {
      name
    }
  }
`;
