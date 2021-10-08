import React, { useEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTFLoader } from 'three-stdlib';
import Mesh from '../Mesh';

function parse(gltf) {
  function createMesh(gltfMesh) {
    const newMesh = <mesh geometry={gltfMesh.geometry} />;
    return newMesh;
  }

  const rNbr = (number) => {
    return parseFloat(number.toFixed(Math.round(2)));
  };

  const rDeg = (number) => {
    const abs = Math.abs(Math.round(parseFloat(number) * 100000));
    for (let i = 1; i <= 10; i++) {
      if (abs === Math.round(parseFloat(Math.PI / i) * 100000))
        return `${number < 0 ? '-' : ''} Math.PI${i > 1 ? ' / ' + i : ''}`;
    }
    for (let i = 1; i <= 10; i++) {
      if (abs === Math.round(parseFloat(Math.PI * i) * 100000))
        return `${number < 0 ? '-' : ''}Math.PI${i > 1 ? ' * ' + i : ''}`;
    }
    return rNbr(number);
  };

  function print(obj) {
    const objDetails = {
      position: null,
      rotation: null,
      name: null,
      type: null,
      geometry: null,
      scale: null,
      children: [],
    };
    let type = obj.type.charAt(0).toLowerCase() + obj.type.slice(1);

    if (type === 'object3D') type = 'group';
    let chidlers = null;
    if (obj.children.length > 0)
      chidlers = obj.children.map((child) => {
        return print(child);
      });

    if (type === 'mesh') {
      objDetails.name = obj.name;
      objDetails.type = 'mesh';
    } else if (type === 'group') {
      objDetails.name = obj.name;
      objDetails.type = type;
    }

    if (obj.geometry) objDetails.geometry = obj.geometry;

    if (obj.position && obj.position.isVector3 && rNbr(obj.position.length()))
      objDetails.position = [
        rNbr(obj.position.x),
        rNbr(obj.position.y),
        rNbr(obj.position.z),
      ];
    if (
      obj.rotation &&
      obj.rotation.isEuler &&
      rNbr(obj.rotation.toVector3().length())
    )
      objDetails.rotation = [
        rDeg(obj.rotation.x),
        rDeg(obj.rotation.y),
        rDeg(obj.rotation.z),
      ];
    if (
      obj.scale &&
      obj.scale.isVector3 &&
      !(
        rNbr(obj.scale.x) === 1 &&
        rNbr(obj.scale.y) === 1 &&
        rNbr(obj.scale.z) === 1
      )
    ) {
      if (obj.scale.x === obj.scale.y && obj.scale.x === obj.scale.z) {
        objDetails.scale = `${rNbr(obj.scale.x)}`;
      } else {
        objDetails.scale = [
          rNbr(obj.scale.x),
          rNbr(obj.scale.y),
          rNbr(obj.scale.z),
        ];
      }
    }
    if (objDetails.geometry) {
      const newObj = createMesh({
        position: objDetails.position,
        rotation: objDetails.rotation,
        geometry: objDetails.geometry,
        scale: objDetails.scale,
      });
      return newObj;
    } else {
      const newObj = createGroup(
        objDetails.position,
        objDetails.rotation,
        objDetails.scale,
        chidlers
      );
      return newObj;
    }
    return null;
  }

  const duplicates = {};
  const objects = [];
  gltf.scene.traverse((child) => {
    objects.push(print(child));
  });

  return objects;
}

function createGroup(position, rotation, scale, chidlers) {
  return (
    <group position={position} rotation={rotation} scale={scale}>
      {chidlers}
    </group>
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

    gltfLoader.load(gltfIn, (gltf) => {
      const scene = parse(gltf);
      console.log(scene);
      setConstArr(scene);
    });
  }, [modelColors, gltfIn]);
  return (
    <group ref={group} {...props} dispose={null}>
      {constArr &&
        constArr.length > 0 &&
        constArr.map((item) => {
          console.log(item);
          return item;
        })}
    </group>
  );
}
