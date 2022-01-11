import React from 'react';
import { Query } from 'react-apollo';
import ModelRouterApp from '../../model3d/ModelRouterApp';
import gql from 'graphql-tag';

const GAME_BY_ID = gql`
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
        img
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

export default function GameProfileFull(props) {
  const [modelOne, setModelOne] = React.useState(null);
  const [modelTwo, setModelTwo] = React.useState(null);

  const partnerId = props
    ? props.match
      ? props.match.params.partnerId
      : null
    : null;

  const boxArtId = props
    ? props.match
      ? props.match.params.boxArtId
      : null
    : null;

  return (
    <div style={{ height: '100%' }}>
      {modelOne && modelTwo && (
        <ModelRouterApp
          gltf={modelOne.gltf}
          js={modelOne.js}
          parts={modelOne.gamePart}
          gameId={modelOne._id}
          box={modelTwo}
          game={modelOne}
        />
      )}

      {!modelTwo && (
        <Query
          query={GAME_BY_ID}
          variables={{ _id: boxArtId }}
          fetchPolicy="network-only"
          onCompleted={(data) => setModelTwo(data.gameById)}
        >
          {({ data }) => {
            return null;
          }}
        </Query>
      )}
      {!modelOne && (
        <Query
          query={GAME_BY_ID}
          variables={{ _id: partnerId }}
          fetchPolicy="network-only"
          onCompleted={(data) => setModelOne(data.gameById)}
        >
          {({ data }) => {
            return null;
          }}
        </Query>
      )}
    </div>
  );
}
