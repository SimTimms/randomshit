import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas } from 'react-three-fiber';
import ModelScript from './ModelScript';
import { Html, useProgress } from '@react-three/drei';
import { Column, Row } from '../components';
import Camera from './Camera';
import { Typography } from '@mui/material';
import ColorButton from './ColorButton';

function Loader() {
  const { progress } = useProgress();
  return (
    <Html
      center
      style={{
        whiteSpace: 'nowrap',
        color: '#222',
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
  enablePan,
  enableZoom,
  suspenseImage,
  backgroundColor,
  clickFor3d,
  colors,
  backforth,
}) {
  const shading = false;
  const [targetA, setTargetA] = React.useState({ target: [], position: [] });
  const [clicked, setClicked] = React.useState(false);
  const [activeColor, setActiveColor] = React.useState({ name: '', color: '' });
  const [fullColor, setFullColor] = React.useState({
    name: '',
    color: '',
  });
  const canvas = useRef(null);
  const buttons = ['ScreenTwo', 'ScreenThree003'];

  useEffect(() => {
    setTargetA({
      target: [
        targets.split(',')[0] * 1,
        targets.split(',')[1] * 1,
        targets.split(',')[2] * 1,
      ],

      position: [
        backforth ? backforth.split(',')[0] : cameraPos,
        cameraPos[1],
        cameraPos[2],
      ],
    });

    setFullColor({ name: colors.split(',')[0], color: colors.split(',')[0] });
  }, [targets, cameraPos, colors, backforth]);

  const { progress } = useProgress();
  return clickFor3d && !clicked ? (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        backgroundImage: `url(${suspenseImage})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onClick={() => {
        !clicked && setClicked(true);
      }}
    >
      <Typography
        style={{
          color: backgroundColor || '#fff',
          opacity: 1,
          textShadow: '3px 3px 5px rgba(0,0,0,1)',
          fontSize: '3rem',
          fontWeight: 'bold',
        }}
      >
        Click for 3D
      </Typography>
    </div>
  ) : (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        backgroundImage: `url(${suspenseImage})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
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
              backgroundColor: backgroundColor || 'none',
              opacity: progress / 100,
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
                  fullColor={fullColor}
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
            <Camera
              target={targetA}
              setTargetA={setTargetA}
              rotate={rotate}
              enablePan={enablePan}
              enableZoom={enableZoom}
              backforth={backforth}
            />
          </Canvas>
        </Row>
        <Row>
          {colors &&
            colors
              .split(',')
              .map((color) => (
                <ColorButton
                  color={color}
                  setActiveColor={setFullColor}
                ></ColorButton>
              ))}
        </Row>
      </Column>
    </div>
  );
}
