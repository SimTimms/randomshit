import React, { useEffect } from 'react';
import { Query } from 'react-apollo';
import ModelRouterApp from '../../model3d/ModelRouterApp';
import gql from 'graphql-tag';
import HeaderGallery from '../../widgets/headerGallery';

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
    }
  }
`;

export default function ModelApp(props) {
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

  function changeModel(newModel) {
    setModelOne(null);
    // setModelOne(newModel);
  }

  useEffect(() => {}, []);

  return (
    <div style={{ height: '100%' }}>
      <HeaderGallery history={props.history} setModelOne={changeModel} />
      <div style={{ height: 'calc(100% - 130px)' }}>
        {modelOne && modelTwo && (
          <ModelRouterApp
            gltf={modelOne.gltf}
            js={modelOne.js}
            parts={modelOne.gamePart}
            gameId={modelOne._id}
            box={modelTwo}
            game={modelOne}
            login={true}
            history={props.history}
          />
        )}
      </div>

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
