import React, { Suspense, useEffect, useRef } from 'react';
import { Canvas, useLoader } from 'react-three-fiber';
import { OrbitControls } from '@react-three/drei';
import BG from './BladeGuard';
import SM from './SpaceMarine';
import mp3dBack from '../assets/mp3dback.jpg';
import ModeBar from './ModeBar';
import * as THREE from 'three';
import { Html, useProgress } from '@react-three/drei';

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
            <BG props={propExport} />
            <SM props={propExport} attachedPart={attachedPart} parts={parts} />
          </group>
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
