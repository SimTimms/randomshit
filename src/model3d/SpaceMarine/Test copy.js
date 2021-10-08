import React, { useEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTFLoader } from 'three-stdlib';
import Mesh from '../Mesh';

function getObjects(
  obj,
  activeColor,
  paintMode,
  modelColorsRef,
  modelColors,
  lightOne
) {
  const objArr = [];

  //look at obj
  //if it has children
  //if (obj.isMesh) {
  //if (obj.geometry) {

  if (obj.type === 'Grosup' && obj.children.length > 0) {
    objArr.push(
      createGroup(
        obj.name,
        obj.children &&
          obj.children.map((child) =>
            getObjects(
              child,
              activeColor,
              paintMode,
              modelColorsRef,
              modelColors,
              lightOne,
              child.children
            )
          ),
        obj.position,
        obj.rotation
      )
    );
  }
  if (obj.geometry && obj.parent.type === 'Object3D') {
    console.log(obj);
    objArr.push(
      createMesh(
        obj.name,
        obj.position,
        obj.rotation,
        obj.geometry,
        modelColors,
        activeColor,
        modelColorsRef,
        paintMode,
        lightOne
      )
    );
  }

  /*objArr.push({
    key: obj.name,
    geometry: obj.geometry,
    activeColor: activeColor,
    paintMode: paintMode,
    modelColorsRef: modelColorsRef,
    name: obj.name,
    position: obj.position,
    rotation: obj.rotation,
    modelColors: modelColors,
    lightOne: lightOne,
  });*/
  // }
  //}
  return objArr;
}

function createGroup(name, children, position, rotation) {
  return (
    <group position={position} rotation={rotation}>
      {children}
    </group>
  );
}
function createMesh(
  name,
  position,
  rotation,
  geometry,
  modelColors,
  activeColor,
  modelColorsRef,
  paintMode,
  lightOne
) {
  return (
    <Mesh
      geometry={geometry}
      modelColors={modelColors}
      name={name}
      activeColor={activeColor}
      modelColorsRef={modelColorsRef}
      paintMode={paintMode}
      lightOne={lightOne}
    />
  );
}
export default function ThreeJS(props) {
  const {
    lightOne,
    activeColor,
    paintMode,
    modelColorsRef,
    modelColors,
    gltfIn,
  } = props.props;
  const sceneArr = [];
  const [constArr, setConstArr] = React.useState(null);
  const group = useRef();
  useEffect(() => {
    // useGLTF.preload(gltfIn);

    const gltfLoader = new GLTFLoader();
    const parentObj = [];

    gltfLoader.load(gltfIn, (gltf) => {
      gltf.scene.traverse((parent) => {
        sceneArr.push(
          ...getObjects(
            parent,
            activeColor,
            paintMode,
            modelColorsRef,
            modelColors,
            lightOne,
            parent.children
          )
        );
      });
    });
    console.log(sceneArr);
    !constArr && setConstArr(sceneArr);

    return;
  }, [modelColors, gltfIn]);
  return (
    <group ref={group} {...props} dispose={null}>
      {console.log(constArr)}
      {constArr &&
        constArr.length > 0 &&
        constArr.map((item) => {
          return item;
        })}
    </group>
  );
}
