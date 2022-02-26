import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import { OrbitControls } from '@react-three/drei';
import ModelScript from './ModelScript';
import { Html, useProgress } from '@react-three/drei';
import { Column, Row } from '../components';
import uploaderScreenshot from '../components/uploaderScreenshot';
import { MenuButtonStandard } from '../components';
import { Mutation } from '@apollo/client/react/components';
import { SAVE_GAME_IMAGE } from './data';
import { toaster } from '../utils/toaster';
import { TwitterShareButton, TwitterIcon } from 'react-share';
import Profile from './Profile';
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

export default function ShelfLoader({
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

  return (
    <Row wra="wrap">
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100vh',
        }}
      >
        <Column h="100%">
          <Row w="100%" h="100%">
            <Canvas
              pixelRatio={[1, 2]}
              camera={{ position: [0, 200, 250], fov: 10, far: 700 }}
              ref={canvas}
              gl={{ preserveDrawingBuffer: true }}
              style={{
                background: '#222',
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
                  />
                </group>
                <group position={[8, -8, 8]}>
                  <ModelScript
                    activeColor={activeColor}
                    sprayMode={sprayMode}
                    gltfIn={gltfIn}
                    markings={markings}
                    armourColor={armourColor}
                  />
                </group>
                <group position={[-16, -8]}>
                  <ModelScript
                    activeColor={activeColor}
                    sprayMode={sprayMode}
                    gltfIn={gltfIn}
                    markings={markings}
                    armourColor={armourColor}
                  />
                </group>
                <group position={[16, -8, -16]}>
                  <ModelScript
                    activeColor={activeColor}
                    sprayMode={sprayMode}
                    gltfIn={gltfIn}
                    markings={markings}
                    armourColor={armourColor}
                  />
                </group>
                <group position={[-8, -8, 8]}>
                  <ModelScript
                    activeColor={activeColor}
                    sprayMode={sprayMode}
                    gltfIn={gltfIn}
                    markings={markings}
                    armourColor={armourColor}
                  />
                </group>
              </Suspense>
              <OrbitControls
                target={[0, 0, 0]}
                maxDistance={500}
                autoRotate={false}
                autoRotateSpeed={5}
              />
            </Canvas>
          </Row>
        </Column>
      </div>
    </Row>
  );
}
