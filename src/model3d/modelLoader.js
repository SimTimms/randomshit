import React, { Suspense, useRef } from 'react';
import { Canvas } from 'react-three-fiber';
import { OrbitControls } from '@react-three/drei';
import ModelScript from './ModelScript';
import { Html, useProgress } from '@react-three/drei';
import ModeBar from './ModeBar';
import { Column, Row } from '../components';
import CircleButton from './CircleButton';
import uploaderScreenshot from '../components/uploaderScreenshot';
import { Mutation } from 'react-apollo';
import { SAVE_GAME_IMAGE } from './data';
import { toaster } from '../utils/toaster';
import { TwitterShareButton, TwitterIcon } from 'react-share';

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
}) {
  const [screenshot, setScreenshot] = React.useState(null);
  const [wait, setWait] = React.useState(false);

  const canvas = useRef(null);
  const modelAdjust = {
    '61bcde4856537174216adeda': [Math.PI / 2, 0, 3],
    '61c0d836fc54e3e7e5f6afdc': [-Math.PI / 2, 0, 0],
  };
  function dataURItoBlob(dataURI) {
    var binary = atob(dataURI.split(',')[1]);
    var array = [];
    for (var i = 0; i < binary.length; i++) {
      array.push(binary.charCodeAt(i));
    }
    return new Blob([new Uint8Array(array)], { type: 'image/jpeg' });
  }
  return (
    <div
      style={{
        position: 'relative',
        width: '100vw',
        height: 'calc(100vh - 80px)',
      }}
    >
      <Column h="calc(100vh - 80px)">
        {!panels.lighting && (
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
              justifyContent: 'center',
              flexDirection: 'row',
              background: 'rgba(0,0,0,0.3)',
              borderBottom: `1px solid rgba(0,0,0,0.4)`,
            }}
          >
            {back && (
              <CircleButton
                title="Back"
                icon="close"
                onClickEvent={() => back()}
              />
            )}
            <CircleButton
              title="Light"
              icon="lightbulb"
              onClickEvent={() => setPanels({ palette: false, lighting: true })}
            />

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
          style={{ background: '#222' }}
        >
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
            <group rotation={modelAdjust[gameId]} position={[0, -8, 0]}>
              <ModelScript
                activeColor={activeColor}
                sprayMode={sprayMode}
                gltfIn={gltfIn}
              />
            </group>

            {box && (
              <group rotation={modelAdjust[gameId]} position={[0, -8, 0]}>
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
