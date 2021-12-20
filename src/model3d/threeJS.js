import React, { Suspense, useEffect, useRef } from 'react';
import { Canvas, useLoader } from 'react-three-fiber';
import { OrbitControls } from '@react-three/drei';
import BG from './BladeGuard';
import BGLowRes from './BladeGuardLowRes';
import SM from './SpaceMarine';
import mp3dBack from '../assets/mp3dback.jpg';
import ModeBar from './ModeBar';
import * as THREE from 'three';
import { Html, useProgress } from '@react-three/drei';
import ModelLoader from './modelLoader';
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

const scaler = {
  BladeguardLowRes: {
    position: [0, 1.13, 0],
    scale: [0.04, 0.04, 0.04],
  },
  SpaceMarine: {
    position: [0, 0.26, 0],
    scale: [0.7, 0.7, 0.7],
    rotation: [-Math.PI, 0, 0],
  },
  Bladeguard: {
    position: [0, 1.13, 0],
    scale: [0.04, 0.04, 0.04],
  },
  SMHelmetAdvanced: {
    position: [0, 1.8, 0],
    scale: [0.05, 0.05, 0.05],
  },
  StandardBase: { position: [0, 0, 0], scale: [0.2, 0.2, 0.2] },
  FoliagePackRocks: { position: [0, 0, 0], scale: [0.2, 0.2, 0.2] },
  CrackedEarth: { position: [0, 0, 0], scale: [0.2, 0.2, 0.2] },
  Bolter: {
    position: [0.14, 1.33, 0.29],
    rotation: [0.4, 0, 0.1],
    scale: [1.1, 1.1, 1.1],
  },
};
export default function ThreeJS({
  color,
  selectedMat,
  lightOne,
  lightTwo,
  lightThree,
  lightFour,
  lightFive,
  thisJSON,
  partClick,
  activeColor,
  paintMode,
  setPaintMode,
  decalSet,
  modelColorsRef,
  modelColors,
  model,
  attachedPart,
  parts,
  intensity,
  gltf,
  js,
  gameId,
}) {
  const propExport = {
    color,
    selectedMat,
    lightOne,
    lightTwo,
    lightThree,
    lightFour,
    lightFive,
    thisJSON,
    partClick,
    activeColor,
    paintMode,
    setPaintMode,
    decalSet,
    modelColorsRef,
    modelColors,
    model,
    attachedPart,
    intensity,
    gltfIn: gltf,
    parts,
    js,
  };
  // const BG = React.lazy(() => import('./BladeGuard'));
  const canvas = useRef(null);

  function Image() {
    const texture = useLoader(THREE.TextureLoader, mp3dBack);
    var material = new THREE.MeshBasicMaterial({
      map: texture,
      side: THREE.BackSide,
    });
    return (
      <group name="sun">
        <mesh position={[0, -0.1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[10, 10]} />
          <meshStandardMaterial map={texture} />
        </mesh>
        <mesh position={[5, 4.9, 0]} rotation={[0, -Math.PI / 2, 0]}>
          <planeGeometry args={[10, 10]} />
          <meshStandardMaterial map={texture} />
        </mesh>
        <mesh position={[-5, 4.9, 0]} rotation={[0, Math.PI / 2, 0]}>
          <planeGeometry args={[10, 10]} />
          <meshStandardMaterial map={texture} />
        </mesh>
        <mesh position={[0, 4.9, -5]}>
          <planeGeometry args={[10, 10]} />
          <meshStandardMaterial map={texture} />
        </mesh>
        <mesh position={[0, 4.9, 5]} rotation={[0, -Math.PI, 0]}>
          <planeGeometry args={[10, 10]} />
          <meshStandardMaterial map={texture} />
        </mesh>
      </group>
    );
  }

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: 'calc(100vh - 164px)',
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
        camera={{ position: [10, 10, 10], fov: 10, far: 700 }}
        ref={canvas}
        gl={{ preserveDrawingBuffer: true }}
        style={{
          backgroundImage: `url(${mp3dBack})`,
          backgroundSize: 'cover',
        }}
      >
        <Suspense fallback={<Loader />}>
          <Image />
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
          <group name="sun" position={[-10, 10, 0]}>
            <spotLight
              castShadow={true}
              intensity={lightThree}
              shadow-mapSize-width={512}
              shadow-mapSize-height={512}
              shadow-camera-near={0.5}
              shadow-camera-far={200}
              shadow-focus={1}
            />
          </group>
          <group name="sun" position={[0, 10, 0]}>
            <spotLight
              castShadow={true}
              intensity={lightFour}
              shadow-mapSize-width={512}
              shadow-mapSize-height={512}
              shadow-camera-near={0.5}
              shadow-camera-far={200}
              shadow-focus={1}
            />
          </group>
          <group name="sun" position={[0, -10, 0]}>
            <spotLight
              castShadow={true}
              intensity={lightFive}
              shadow-mapSize-width={512}
              shadow-mapSize-height={512}
              shadow-camera-near={0.5}
              shadow-camera-far={200}
              shadow-focus={1}
            />
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
          <group
            name="sun"
            scale={scaler[js].scale}
            position={scaler[js].position}
            rotation={scaler[js].rotation}
          >
            <ModelLoader props={propExport} />
          </group>
          {Object.values(attachedPart).map((item) => {
            return (
              <group
                name="sun"
                scale={
                  scaler[item.js] ? scaler[item.js].scale : scaler[js].scale
                }
                position={
                  scaler[item.js]
                    ? scaler[item.js].position
                    : scaler[js].position
                }
                rotation={
                  scaler[item.js]
                    ? scaler[item.js].rotation
                    : scaler[js].rotation
                }
              >
                <ModelLoader props={{ ...propExport, gltfIn: item.gltf }} />
              </group>
            );
          })}
        </Suspense>
        <OrbitControls
          enabled={!paintMode}
          target={[0, 1, 0]}
          maxDistance={20}
        />
      </Canvas>
    </div>
  );
}
