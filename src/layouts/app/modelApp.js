import React, { useEffect } from 'react';
import { Query } from '@apollo/client/react/components';
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
      artistLink
      artistName
      whereToBuyLink
      user {
        _id
        name
        profileImg
      }
    }
  }
`;

export default function ModelApp({ basic, modelId, ...props }) {
  const [modelOne, setModelOne] = React.useState(null);
  const [partnerId, setPartnerId] = React.useState(null);

  useEffect(() => {
    setPartnerId(modelId);
  }, [modelId]);

  return (
    <div style={{ height: '100%', background: '#e62b58' }}>
      <div style={{ height: 'calc(100% )' }}>
        {modelOne && (
          <ModelRouterApp
            gltf={modelOne.gltf}
            js={modelOne.js}
            parts={modelOne.gamePart}
            gameId={modelOne._id}
            box={null}
            game={modelOne}
            login={true}
            history={props.history}
            modelArtist={{
              name: modelOne.artistName,
              link: modelOne.artistLink,
              buyLink: modelOne.whereToBuyLink,
            }}
          />
        )}
      </div>

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
