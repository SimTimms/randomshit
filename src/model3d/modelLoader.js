import React, { Suspense, useRef } from 'react';
import { Canvas } from 'react-three-fiber';
import { OrbitControls } from '@react-three/drei';
import ModelScript from './ModelScript';
import { Html, useProgress } from '@react-three/drei';
import ModeBar from './ModeBar';

function Loader() {
  const { progress } = useProgress();
  return (
    <Html
      center
      style={{
        color: '#A8FF75',
        fontFamily: `'Special Elite', cursive`,
        whiteSpace: 'nowrap',
        background: '#222',
        padding: 15,
        borderRadius: 3,
        boxShadow: '10px 10px 30px rgba(0,0,0,0.3)',
      }}
    >
      {progress} % loaded
    </Html>
  );
}

export default function ModelLoader({
  activeColor,
  sprayMode,
  gltfIn,
  paintMode,
  setPaintMode,
  gameId,
  lightOne,
  lightTwo,
  lightThree,
  lightFour,
  lightFive,
  lightSix,
  lightSeven,
}) {
  const canvas = useRef(null);
  const modelAdjust = {
    '61bcde4856537174216adeda': [Math.PI / 2, 0, 3],
    '61c0d836fc54e3e7e5f6afdc': [-Math.PI / 2, 0, 0],
  };
  return (
    <div
      style={{
        position: 'relative',
        width: 'calc(100vw - 340px)',
        height: 'calc(100vh - 112px)',
      }}
    >
      <ModeBar
        paintMode={paintMode}
        setPaintMode={setPaintMode}
        canvas={canvas}
        modelId={gameId}
      />
      <Canvas
        pixelRatio={[1, 2]}
        camera={{ position: [0, 70, 150], fov: 10, far: 700 }}
        ref={canvas}
        gl={{ preserveDrawingBuffer: true }}
        style={{ background: '#fff' }}
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
          <group rotation={modelAdjust[gameId]}>
            <ModelScript
              activeColor={activeColor}
              sprayMode={sprayMode}
              gltfIn={gltfIn}
            />
          </group>
        </Suspense>
        <OrbitControls target={[0, 0, 0]} maxDistance={500} />
      </Canvas>
    </div>
  );
}
