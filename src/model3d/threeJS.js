import React, { Suspense } from 'react';
import { Canvas } from 'react-three-fiber';
import { OrbitControls } from '@react-three/drei';
import SpaceMarine from './SpaceMarine';
import BladeGuard from './BladeGuard';
import { parse } from '@react-three/gltfjsx';
import { GLTFLoader, DRACOLoader } from 'three-stdlib';

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
}) {
  const gltfLoader = new GLTFLoader();
  const dracoloader = new DRACOLoader();
  dracoloader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');
  gltfLoader.setDRACOLoader(dracoloader);

  gltfLoader.load(
    'https://random-shit-store.s3.eu-west-2.amazonaws.com/614b73c98a97c40c65957b89/Test3/scene.gltf',
    (gltf) => {
      const jsx = parse('temp.js', gltf);
    }
  );
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: 'calc(100vh - 164px)',
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
            <SpaceMarine
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
            />
            {/* <BladeGuard
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
              spray={spray}
              lightOne={intensity}
              part={part}
              model={model}
           />*/}
          </group>
        </Suspense>
        <OrbitControls enabled={!paintMode} target={[0, 1, 0]} />
      </Canvas>
    </div>
  );
}
