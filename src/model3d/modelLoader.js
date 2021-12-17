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
}) {
  const canvas = useRef(null);
  return (
    <div
      style={{
        position: 'relative',
        width: 'calc(100vw - 140px)',
        height: 'calc(100vh )',
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
        style={{ background: '#111' }}
      >
        <Suspense fallback={<Loader />}>
          <group name="sun" position={[500, 900, 0]}>
            <ambientLight intensity={0.1} />
            <spotLight intensity={0.8} />
          </group>
          <group rotation={[Math.PI / 2, 0, 3]}>
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
