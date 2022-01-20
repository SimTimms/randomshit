import React, { useEffect } from 'react';
import { Query } from 'react-apollo';
import ModelRouterApp from '../../model3d/ModelRouterApp';
import gql from 'graphql-tag';
import HeaderGallery from '../../widgets/headerGallery';
import ChooseModelPublic from '../../widgets/games/chooseModelPublic';
import { Typography } from '@material-ui/core';
import patreon from '../../assets/patreon.png';
import { Row, MenuButtonStandard } from '../../components';

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
  const [page, setPage] = React.useState('model');

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
    setModelOne(newModel);
    setPage('model');
  }

  useEffect(() => {}, []);

  return (
    <div style={{ height: '100%' }}>
      <Row a="space-between" w="100%" h={32}>
        <Row j="flex-start">
          <MenuButtonStandard
            title="Paint"
            icon="star"
            onClickEvent={() => setPage('model')}
          />
          <MenuButtonStandard
            title="Models"
            onClickEvent={() => setPage('models')}
          />
          <MenuButtonStandard
            title="Gallery"
            onClickEvent={() => setPage('gallery')}
          />
          <MenuButtonStandard
            title="Login"
            onClickEvent={() => props.history.push('/')}
          />
        </Row>
        <Row j="flex-end">
          <a
            href={'https://www.patreon.com/3dminipainterhtml?fan_landing=true'}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MenuButtonStandard title="Patreon" onClickEvent={() => null} />
          </a>
          <a
            href={'https://www.youtube.com/channel/UCtIdUJZQStkUJqwpUjMTtIA'}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MenuButtonStandard title="YouTube" onClickEvent={() => null} />
          </a>
          <a
            href={'https://twitter.com/timsimmsdev'}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MenuButtonStandard title="Twitter" onClickEvent={() => null} />
          </a>
        </Row>
      </Row>

      {page === 'gallery' && (
        <HeaderGallery history={props.history} setModelOne={changeModel} />
      )}

      {page === 'models' && (
        <ChooseModelPublic history={props.history} setModelOne={changeModel} />
      )}

      <div style={{ height: 'calc(100% - 32px)' }}>
        {modelOne && modelTwo && page === 'model' && (
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
