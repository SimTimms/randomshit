import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import { OrbitControls } from '@react-three/drei';
import ModelScript from './ModelScript';
import { Html, useProgress } from '@react-three/drei';
import { Column, Row } from '../components';
import uploaderScreenshot from '../components/uploaderScreenshot';
import { Button } from '../components';
import { Mutation } from '@apollo/client/react/components';
import { SAVE_GAME_IMAGE } from './data';
import { toaster } from '../utils/toaster';
import { TwitterShareButton, TwitterIcon } from 'react-share';
import Profile from './Profile';
import Controls from './Controls';
import Ads from './Ads';
import { paints } from './paints';

function Loader() {
  const { progress } = useProgress();
  return (
    <Html
      center
      style={{
        whiteSpace: 'nowrap',
        padding: 15,
        borderRadius: 3,
        color: '#222',
        opacity: progress / 100,
        fontFamily: 'arial',
      }}
    >
      {`Loading ${progress.toString().substring(0, 2)}%, please wait!`}
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
  markings,
  profilePriority,
  modelName,
  modelArtist,
}) {
  const [screenshot, setScreenshot] = React.useState(null);
  const [armourColor, setArmourColor] = React.useState(null);
  const [shading, setShading] = React.useState(false);
  const [wait, setWait] = React.useState(false);
  const canvas = useRef(null);
  let count = useRef(0);

  function dataURItoBlob(dataURI) {
    var binary = atob(dataURI.split(',')[1]);
    var array = [];
    for (var i = 0; i < binary.length; i++) {
      array.push(binary.charCodeAt(i));
    }
    return new Blob([new Uint8Array(array)], { type: 'image/jpeg' });
  }

  useEffect(() => {
    if (!shading && activeColor.type === 'Shade') {
      setShading(true);
    }
  }, [activeColor, shading]);

  return (
    <div
      style={{
        position: 'relative',
        width: '100vw',
        height: '100%',
      }}
    >
      <Column h="100%">
        {(!panels || panels === 'unitDetails') && (
          <div
            style={{
              zIndex: 10,
              position: 'relative',
              width: '100vw',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              flexDirection: 'row',
              background: '#111',
              borderBottom: `1px solid rgba(0,0,0,0.4)`,
            }}
          >
            {back && (
              <Button
                menuItem={{
                  name: 'Back',
                  color: 'light',
                }}
                icon="chevron_left"
                onClickEvent={() => back()}
                white={true}
              />
            )}

            <Row j="flex-start">
              <Button
                menuItem={{
                  name: 'Lighting',
                  color: 'light',
                }}
                onClickEvent={() => setPanels('lighting')}
              />
              {/*   <MenuButtonStandard
                title="Info"
                icon="palette"
                onClickEvent={() => setPanels('details')}
                white="#fff"
           />*/}
              {profilePriority === 0 && modelName.name === 'Firstborn' && (
                <Row>
                  <Button
                    menuItem={{
                      name: 'Markings',
                      color: 'light',
                    }}
                    onClickEvent={() => setPanels('markings')}
                    white={true}
                  />
                  <Button
                    menuItem={{
                      name: 'Armour',
                      color: 'light',
                    }}
                    onClickEvent={() => {
                      const paintArr = [
                        paints.green[3].color,
                        paints.red[3].color,
                        paints.blue[3].color,
                        paints.orange[3].color,
                        paints.grey[3].color,
                        paints.turquoise[0].color,
                        paints.metallic[4].color,
                        paints.grey[0].color,
                      ];
                      count.current = count.current + 1;
                      if (count.current > paintArr.length - 1) {
                        count.current = 0;
                      }
                      setArmourColor(paintArr[count.current]);
                    }}
                    white={true}
                  />
                </Row>
              )}
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
                  <Button
                    menuItem={{
                      name: 'Screenshot',
                      color: 'light',
                    }}
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
                    white={true}
                  />
                );
              }}
            </Mutation>
            <div style={{ marginTop: 3, marginLeft: 3 }}></div>
            {screenshot && (
              <div style={{ marginTop: 5, marginLeft: 3, marginRight: 5 }}>
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
                  <TwitterIcon size={24} round={true} />
                </TwitterShareButton>
              </div>
            )}
          </div>
        )}
        <Row w="100%" h="100%">
          {gameId === '621769789e0236001621c7bd' && (
            <Controls shading={shading} setShading={setShading} />
          )}
          {/* <Profile />*/}
          <Canvas
            pixelRatio={[1, 2]}
            camera={{ position: [0, 200, 250], fov: 10, far: 700 }}
            ref={canvas}
            gl={{ preserveDrawingBuffer: true }}
            style={{
              background: '#fff',
              height: '100%',
              width: '100%',
            }}
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
              <group position={[0, -8, 0]}>
                <ModelScript
                  activeColor={activeColor}
                  sprayMode={sprayMode}
                  gltfIn={gltfIn}
                  markings={markings}
                  armourColor={armourColor}
                  shading={shading}
                />
              </group>

              {box && (
                <group position={[0, -8, 0]}>
                  <ModelScript
                    activeColor={null}
                    sprayMode={sprayMode}
                    gltfIn={box.gltf}
                    armourColor={null}
                  />
                </group>
              )}
            </Suspense>
            <OrbitControls
              target={[0, 0, 0]}
              maxDistance={500}
              autoRotate={false}
              autoRotateSpeed={5}
            />
          </Canvas>
          {/*  <Ads modelArtist={modelArtist} />*/}
        </Row>
      </Column>
    </div>
  );
}
