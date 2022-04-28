import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas } from 'react-three-fiber';
import ModelScript from './ModelScript';
import { Html, useProgress } from '@react-three/drei';
import { Column, Row } from '../components';
import Camera from './Camera';
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

function Watermark() {
  return (
    <Html
      center
      style={{
        color: 'rgba(0,0,0,0.2)',
        fontFamily: 'arial',
        fontSize: '1rem',
      }}
    >
      https://minipainter3d.herokuapp.com
    </Html>
  );
}

export default function ModelLoader({
  activeColor,
  sprayMode,
  gltfIn,
  lightTwo,
  lightThree,
  lightFour,
  lightFive,
  lightSix,
  lightSeven,
  markings,
  rotate,
  paint,
  cameraPos,
  targets,
  watermark,
  clickEvent,
}) {
  const shading = false;
  const [targetA, setTargetA] = React.useState({ target: [], position: [] });
  const canvas = useRef(null);
  const buttons = ['ScreenTwo', 'ScreenThree003'];

  useEffect(() => {
    console.log(targetA);
    setTargetA({
      target: [
        targets.split(',')[0] * 1,
        targets.split(',')[1] * 1,
        targets.split(',')[2] * 1,
      ],
      position: cameraPos,
    });
  }, [targets, cameraPos]);
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
      }}
    >
      <Column h="100%" w="100%">
        <Row w="100%" h="100%">
          <Canvas
            pixelRatio={[1, 2]}
            camera={{ position: targetA.position, fov: 10, far: 700 }}
            ref={canvas}
            gl={{ preserveDrawingBuffer: true }}
            style={{
              height: '100%',
              width: '100%',
            }}
          >
            <Suspense fallback={<Loader />}>
              <group name="sun" position={[500, 900, 0]}>
                <ambientLight intensity={10 / 50} />
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
              <group position={[0, -20, 0]}>{watermark && <Watermark />}</group>

              <group position={[0, -8, 0]}>
                <ModelScript
                  activeColor={activeColor}
                  sprayMode={sprayMode}
                  gltfIn={gltfIn}
                  markings={markings}
                  armourColor={null}
                  shading={shading}
                  paint={paint}
                  setTargetA={setTargetA}
                  targetA={targetA}
                  buttons={buttons}
                  clickEvent={clickEvent}
                />
              </group>
            </Suspense>
            <Camera target={targetA} setTargetA={setTargetA} rotate={rotate} />
            {/*
            <OrbitControls
              target={targetA}
              maxDistance={500}
              autoRotate={rotate === 'true'}
              autoRotateSpeed={-1}
              enabled={controls === 'true'}
              enableDamping={true}
              dampingFactor={0.1}
              object={}
             
          />*/}
          </Canvas>
        </Row>
      </Column>
    </div>
  );
}
