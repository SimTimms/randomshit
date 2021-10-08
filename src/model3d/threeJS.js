import React, { Suspense } from 'react';
import { Canvas } from 'react-three-fiber';
import { OrbitControls } from '@react-three/drei';
import BG from './BladeGuard';

export default function ThreeJS({
  color,
  selectedMat,
  lightOne,
  lightTwo,
  thisJSON,
  partClick,
  activeColor,
  paintMode,
  setPaintMode,
  decalSet,
  modelColorsRef,
  modelColors,
  model,
  part,
  intensity,
  gltf,
  js,
}) {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: 'calc(100vh - 164px)',
        background: 'white',
      }}
    >
      <Canvas
        pixelRatio={[1, 2]}
        camera={{ position: [10, 10, 10], fov: 10, far: 700 }}
      >
        <Suspense fallback={null}>
          <group
            name="sun"
            position={[500, 900, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <spotLight
              castShadow={true}
              intensity={lightTwo}
              shadow-mapSize-width={512}
              shadow-mapSize-height={512}
              shadow-camera-near={0.5}
              shadow-camera-far={500}
              shadow-focus={1}
            />
            <ambientLight intensity={lightOne} />
          </group>
          <group
            name="sun"
            position={[-100, -200, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <spotLight
              castShadow={true}
              intensity={lightTwo}
              shadow-mapSize-width={512}
              shadow-mapSize-height={512}
              shadow-camera-near={0.5}
              shadow-camera-far={500}
              shadow-focus={1}
            />
          </group>

          <group position={[0, 0, 0]}>
            <BG
              color={color}
              selectedMat={selectedMat}
              thisJSON={thisJSON}
              partClick={partClick}
              activeColor={activeColor}
              paintMode={paintMode}
              setPaintMode={setPaintMode}
              decalSet={decalSet}
              modelColorsRef={modelColorsRef}
              modelColors={modelColors}
              lightOne={intensity}
              part={part}
              model={model}
              gltfIn={gltf}
              js={gltf}
            />
          </group>
        </Suspense>
        <OrbitControls enabled={!paintMode} target={[0, 1, 0]} />
      </Canvas>
    </div>
  );
}
