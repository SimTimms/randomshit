import React, { Suspense, useEffect, useRef } from 'react';
import { Canvas } from 'react-three-fiber';
import { OrbitControls } from '@react-three/drei';
import BG from './BladeGuard';
import SM from './SpaceMarine';
import { Mutation } from 'react-apollo';
import { SAVE_GAME_IMAGE } from './data';
import uploaderScreenshot from '../components/uploaderScreenshot';

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
  const [dataURL, setDataURL] = React.useState(null);
  useEffect(() => {
    //const ctx = canvas.getContext('2d');

    console.log(dataURL);
    // const img = refs.image;
  }, [canvas]);

  function dataURItoBlob(dataURI) {
    var binary = atob(dataURI.split(',')[1]);
    var array = [];
    for (var i = 0; i < binary.length; i++) {
      array.push(binary.charCodeAt(i));
    }
    return new Blob([new Uint8Array(array)], { type: 'image/jpeg' });
  }
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: 'calc(100vh - 164px)',
        background: '#222',
      }}
      onClick={() => setDataURL(canvas.current.toDataURL())}
    >
      <Mutation
        mutation={SAVE_GAME_IMAGE}
        onCompleted={() => console.log('saved')}
      >
        {(mutation) => {
          return (
            <button
              onClick={() =>
                uploaderScreenshot(dataURItoBlob(dataURL), mutation)
              }
              title="Save"
            />
          );
        }}
      </Mutation>

      <Canvas
        pixelRatio={[1, 2]}
        camera={{ position: [10, 10, 10], fov: 10, far: 700 }}
        ref={canvas}
        gl={{ preserveDrawingBuffer: true }}
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
            <BG props={propExport} />
            <SM props={propExport} attachedPart={attachedPart} parts={parts} />
          </group>
        </Suspense>
        <OrbitControls enabled={!paintMode} target={[0, 1, 0]} />
      </Canvas>
    </div>
  );
}
