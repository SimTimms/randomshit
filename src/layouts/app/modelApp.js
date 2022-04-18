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

const PAINT_BY_ID = gql`
  query savedGameById($_id: MongoID!) {
    savedGameById(_id: $_id) {
      saveDataColors
    }
  }
`;

const USER_BY_ID = gql`
  query userById($_id: MongoID!) {
    userById(_id: $_id) {
      priority
      name
    }
  }
`;

export default function ModelApp({
  basic,
  modelId,
  controls,
  rotate,
  paint,
  cameraPos,
  targets,
  url,
  userId,
  ...props
}) {
  const [modelOne, setModelOne] = React.useState(null);
  const [paintScheme, setPaintScheme] = React.useState(null);
  const [partnerId, setPartnerId] = React.useState(null);
  const [profile, setProfile] = React.useState(null);

  useEffect(() => {
    setPartnerId(modelId);
  }, [modelId]);
  return (
    <div style={{ height: '100%' }}>
      <div
        style={{
          height: 'calc(100% )',
        }}
      >
        {(modelOne || url) && (
          <ModelRouterApp
            gltf={url ? url : modelOne.gltf}
            js={url ? 'Model' : modelOne.js}
            parts={null}
            gameId={url ? null : modelOne._id}
            box={null}
            game={url ? {} : modelOne}
            login={true}
            history={props.history}
            controls={controls}
            rotate={rotate}
            cameraPos={cameraPos}
            paint={paintScheme}
            targets={targets}
            watermark={
              !profile || (profile && profile.priority !== 0) ? true : false
            }
            modelArtist={
              url
                ? {}
                : {
                    name: modelOne.artistName,
                    link: modelOne.artistLink,
                    buyLink: modelOne.whereToBuyLink,
                  }
            }
          />
        )}
      </div>
      {!profile && userId && modelOne && (
        <Query
          query={USER_BY_ID}
          variables={{ _id: userId }}
          fetchPolicy="network-only"
          onCompleted={(data) => {
            setProfile(data.userById);
          }}
        >
          {({ data }) => {
            return null;
          }}
        </Query>
      )}

      {paint && modelOne && !paintScheme && (
        <Query
          query={PAINT_BY_ID}
          variables={{ _id: paint }}
          fetchPolicy="network-only"
          onCompleted={(data) => {
            setPaintScheme(data.savedGameById.saveDataColors);
          }}
        >
          {({ data }) => {
            return null;
          }}
        </Query>
      )}

      {paint && modelOne && !paintScheme && (
        <Query
          query={PAINT_BY_ID}
          variables={{ _id: paint }}
          fetchPolicy="network-only"
          onCompleted={(data) => {
            setPaintScheme(data.savedGameById.saveDataColors);
          }}
        >
          {({ data }) => {
            return null;
          }}
        </Query>
      )}

      {!modelOne && !url && (
        <Query
          query={GAME_BY_ID}
          variables={{ _id: partnerId }}
          fetchPolicy="network-only"
          onCompleted={(data) => setModelOne(data.gameById)}
        >
          {({ data, error }) => {
            if (error) {
              return 'Please visit http://minipainter3d.herokuapp.com';
            }
            return null;
          }}
        </Query>
      )}
    </div>
  );
}
