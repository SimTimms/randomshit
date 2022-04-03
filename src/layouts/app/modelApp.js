import React, { useEffect } from 'react';
import { Query } from '@apollo/client/react/components';
import ModelRouterApp from '../../model3d/ModelRouterApp';
import gql from 'graphql-tag';
import HeaderGallery from '../../widgets/headerGallery';
import ChooseModelPublic from '../../widgets/games/chooseModelPublic';
import { Typography } from '@mui/material';
import patreon from '../../assets/patreon.png';
import { Row, MenuButtonStandard } from '../../components';
import mp3dmini from '../../assets/branding/mp3dmini.png';
import youtube from '../../assets/social/youtube.png';
import twitter from '../../assets/social/socialTwitter.svg';
import Cookies from 'js-cookie';

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

export default function ModelApp(props) {
  const authToken = Cookies.get('token');
  const modelID = Cookies.get('modelID');
  const boxID = Cookies.get('boxId');
  const { basic } = props;

  const [modelOne, setModelOne] = React.useState(null);
  const [modelTwo, setModelTwo] = React.useState(null);
  const [partnerId, setPartnerId] = React.useState(null);
  const [boxId, setBoxId] = React.useState(null);
  const [page, setPage] = React.useState('model');

  function changeModel(newModel) {
    setModelOne(newModel);
    setPage('model');
  }

  useEffect(() => {
    setPartnerId('6210027ddaf8b40016130d93');
    setBoxId('61d5a0327d31f80016bfa2be');
  }, [boxID, modelID, props]);

  return (
    <div style={{ height: '100%', background: !basic ? '#e62b58' : '#fff' }}>
      {!basic && (
        <Row a="space-between" w="100%" h={32}>
          <Row j="flex-start">
            <img src={mp3dmini} />
            <MenuButtonStandard
              title="Paint"
              icon="star"
              onClickEvent={() => setPage('model')}
              white={true}
            />
            <MenuButtonStandard
              title="Models"
              onClickEvent={() => setPage('models')}
              white={true}
            />
            <MenuButtonStandard
              title="Gallery"
              white={true}
              onClickEvent={() => setPage('gallery')}
            />
            {authToken ? (
              <MenuButtonStandard
                title="Logout"
                onClickEvent={() => {
                  Cookies.remove('token');
                  Cookies.remove('userId');
                  localStorage.removeItem('featureArticle');
                  localStorage.removeItem('posts');
                  props.history.push(`/`);
                }}
                white={true}
              />
            ) : (
              <MenuButtonStandard
                title="Login"
                onClickEvent={() => props.history.push('/')}
                white={true}
              />
            )}
          </Row>

          <Row j="flex-end">
            <a
              href={
                'https://www.patreon.com/3dminipainterhtml?fan_landing=true'
              }
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <MenuButtonStandard
                title="Patreon"
                onClickEvent={() => null}
                white={true}
              />
            </a>
            <a
              href={'https://www.youtube.com/channel/UCtIdUJZQStkUJqwpUjMTtIA'}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={youtube}
                style={{ width: 30, marginTop: 6 }}
                title="YouTube"
                alt="YouTube"
              />
            </a>

            <a
              href={'https://twitter.com/timsimmsdev'}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={twitter}
                style={{
                  width: 30,
                  marginTop: 6,
                  marginLeft: 6,
                  marginRight: 6,
                }}
                title="YouTube"
                alt="YouTube"
              />
            </a>
          </Row>
        </Row>
      )}
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
            basic={basic}
            modelArtist={{
              name: modelOne.artistName,
              link: modelOne.artistLink,
              buyLink: modelOne.whereToBuyLink,
            }}
          />
        )}
      </div>
      {!modelTwo && (
        <Query
          query={GAME_BY_ID}
          variables={{ _id: boxId }}
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
