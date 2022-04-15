import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas } from 'react-three-fiber';
import { OrbitControls } from '@react-three/drei';
import ModelScript from './ModelScript';
import { Html, useProgress } from '@react-three/drei';
import { Column, Row } from '../components';

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
  lightOne,
  lightTwo,
  lightThree,
  lightFour,
  lightFive,
  lightSix,
  lightSeven,
  markings,
}) {
  const [shading, setShading] = React.useState(false);
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
    console.log(activeColor);
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
        <Row w="100%" h="100%">
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
                  armourColor={null}
                  shading={shading}
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
  );
}
