import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import { OrbitControls } from '@react-three/drei';
import ModelScript from './ModelScript';
import { Html, useProgress } from '@react-three/drei';
import { Column, Row } from '../components';
import CircleButton from './CircleButton';
import uploaderScreenshot from '../components/uploaderScreenshot';
import { Mutation } from 'react-apollo';
import { SAVE_GAME_IMAGE } from './data';
import { toaster } from '../utils/toaster';
import { TwitterShareButton, TwitterIcon } from 'react-share';
import { Typography } from '@material-ui/core';
import patreon from '../assets/patreon.png';

function Loader() {
  const { progress } = useProgress();
  return (
    <Html
      center
      style={{
        whiteSpace: 'nowrap',
        padding: 15,
        borderRadius: 3,
        boxShadow: '10px 10px 30px rgba(0,0,0,0.3)',
        color: '#fff',
        opacity: progress / 100,
        fontFamily: 'arial',
      }}
    >
      Loading
    </Html>
  );
}

export default function ModelLoader({
  activeColor,
  sprayMode,
  gltfIn,
  gameId,
  lightOne,
  lightTwo,
  lightThree,
  lightFour,
  lightFive,
  lightSix,
  lightSeven,
  box,
  panels,
  setPanels,
  back,
  login,
  history,
}) {
  const [screenshot, setScreenshot] = React.useState(null);
  const [wait, setWait] = React.useState(false);

  const canvas = useRef(null);

  function dataURItoBlob(dataURI) {
    var binary = atob(dataURI.split(',')[1]);
    var array = [];
    for (var i = 0; i < binary.length; i++) {
      array.push(binary.charCodeAt(i));
    }
    return new Blob([new Uint8Array(array)], { type: 'image/jpeg' });
  }
  localStorage.getItem('modelColorSave');

  return (
    <div
      style={{
        position: 'relative',
        width: '100vw',
        height: '100%',
      }}
    >
      <Column h="100%">
        <a
          href={'https://www.patreon.com/3dminipainterhtml?fan_landing=true'}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            width: '100%',
            background: '#fff',
            height: 40,
            marginTop: -40,
            textDecoration: 'none',
          }}
        >
          <Row h={'100%'} j="space-between" w="100%">
            <Typography
              style={{
                fontWeight: 'bold',
                color: '#ff424d',
                width: 160,
                textAlign: 'center',
              }}
            >
              NEW MODELS
            </Typography>
            <Typography
              style={{
                fontWeight: 'bold',
                color: '#ff424d',
                width: 160,
                textAlign: 'center',
              }}
            >
              SPONSORED CONTENT
            </Typography>
            <img src={patreon} />
            <Typography
              style={{
                fontWeight: 'bold',
                color: '#ff424d',
                width: 160,
                textAlign: 'center',
              }}
            >
              UPDATES
            </Typography>
            <Typography
              style={{
                fontWeight: 'bold',
                color: '#ff424d',
                width: 160,
                textAlign: 'center',
              }}
            >
              VOTES
            </Typography>
          </Row>
        </a>
        {(!panels || panels === 'unitDetails') && (
          <div
            style={{
              zIndex: 10,
              height: '100%',
              position: 'relative',
              width: '100vw',
              height: 46,
              marginBottom: -46,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'row',
              background: 'rgba(0,0,0,0.3)',
              borderBottom: `1px solid rgba(0,0,0,0.4)`,
            }}
          >
            {back && (
              <CircleButton
                title="Back"
                icon="chevron_left"
                onClickEvent={() => back()}
              />
            )}
            {login && (
              <CircleButton
                title="Back"
                icon="chevron_left"
                onClickEvent={() => history.push('')}
              />
            )}
            <Row>
              <CircleButton
                title="Light"
                icon="lightbulb"
                onClickEvent={() => setPanels('lighting')}
              />

              <CircleButton
                title="Info"
                icon="palette"
                onClickEvent={() => setPanels('details')}
              />
            </Row>
            {/*
            <CircleButton
              title="Details"
              icon="details"
              onClickEvent={() =>
                setPanels(panels === 'unitDetails' ? '' : 'unitDetails')
              }
            />*/}
            <Mutation
              mutation={SAVE_GAME_IMAGE}
              onCompleted={(data) => {
                setScreenshot(data.savedGameCreateOne.record.url);
                toaster('Photo Saved');
                setWait(false);
              }}
            >
              {(mutation) => {
                return (
                  <CircleButton
                    title="Screenshot"
                    icon={wait ? 'hourglass_empty' : 'photo'}
                    onClickEvent={() => {
                      if (!wait) {
                        uploaderScreenshot(
                          dataURItoBlob(canvas.current.toDataURL()),
                          mutation,
                          gameId
                        );
                        setWait(true);
                      }
                    }}
                  />
                );
              }}
            </Mutation>
            <div style={{ marginTop: 3, marginLeft: 3 }}></div>
            {screenshot && (
              <div style={{ marginTop: 3, marginLeft: 3 }}>
                <TwitterShareButton
                  url={screenshot
                    .replace(
                      'https://random-shit-store.s3.amazonaws.com/',
                      'https://minipainter3d.herokuapp.com/photo?photo='
                    )
                    .replace('.jpg', '')
                    .trim()}
                  title={`Made with MiniPainter3d`}
                  className="shareBtn col-md-1 col-sm-1 col-xs-1"
                  hashtags={['miniaturepainting', 'warhammercommunity']}
                  related={['@timsimmsdev']}
                >
                  <TwitterIcon size={44} round={true} />
                </TwitterShareButton>
              </div>
            )}
          </div>
        )}
        <Canvas
          pixelRatio={[1, 2]}
          camera={{ position: [0, 70, 150], fov: 10, far: 700 }}
          ref={canvas}
          gl={{ preserveDrawingBuffer: true }}
          style={{ background: '#222', height: '100%', width: '100%' }}
        >
          {/* {panels === 'unitDetails' && (
            <Html>
              <div
                style={{
                  top: 0,
                  color: '#fff',
                  background: 'rgba(0,0,0,0.5)',
                  whiteSpace: 'nowrap',
                  padding: 15,
                  borderRadius: 3,
                  fontFamily: 'arial',
                  marginLeft: 100,
                  zIndex: -1,
                  marginTop: '-60px',
                  boxShadow: '5px 5px 10px rgba(0,0,0,0.4)',
                }}
              >
                <Typography variant="body2">Chapter Name</Typography>
                <input
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#fff',
                    fontSize: '1.2rem',
                  }}
                ></input>
                <Typography variant="body2">Unit Name</Typography>
                <input
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#fff',
                    fontSize: '1.2rem',
                  }}
                ></input>
                <Typography variant="body2">Rank</Typography>
                <input
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#fff',
                    fontSize: '1.2rem',
                  }}
                ></input>
              </div>
            </Html>
                )}*/}
          <Suspense fallback={<Loader />}>
            <group name="sun" position={[500, 900, 0]}>
              <ambientLight intensity={lightOne / 50} />
            </group>
            <group name="sun" position={[50, 0, 0]}>
              <spotLight intensity={lightTwo / 50} />
            </group>
            <group name="sun" position={[-50, 0, 0]}>
              <spotLight intensity={lightThree / 50} />
            </group>
            <group name="sun" position={[0, 50, 0]}>
              <spotLight intensity={lightFour / 50} />
            </group>
            <group name="sun" position={[0, -50, 0]}>
              <spotLight intensity={lightFive / 50} />
            </group>
            <group name="sun" position={[0, 0, 50]}>
              <spotLight intensity={lightSix / 50} />
            </group>
            <group name="sun" position={[0, 0, -50]}>
              <spotLight intensity={lightSeven / 50} />
            </group>
            <group position={[0, -8, 0]}>
              <ModelScript
                activeColor={activeColor}
                sprayMode={sprayMode}
                gltfIn={gltfIn}
              />
            </group>

            {box && (
              <group position={[0, -8, 0]}>
                <ModelScript
                  activeColor={null}
                  sprayMode={sprayMode}
                  gltfIn={box.gltf}
                />
              </group>
            )}
          </Suspense>
          <OrbitControls target={[0, 0, 0]} maxDistance={500} />
        </Canvas>
      </Column>
    </div>
  );
}
