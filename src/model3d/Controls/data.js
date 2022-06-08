import gql from 'graphql-tag';

export const PART_BY_TYPE = gql`
  query gameMany($type: String!) {
    gameMany(filter: { type: $type }) {
      _id
      name
      featureImage
      gltf
      js
    }
  }
`;
