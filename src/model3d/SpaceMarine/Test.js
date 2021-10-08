import React, { useEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTFLoader } from 'three-stdlib';
import Mesh from '../Mesh';
const THREE = require('three');

const isVarName = require('./isVarName');

function parse(gltf) {
  function createMesh(gltfMesh) {
    const newMesh = <mesh geometry={gltfMesh.geometry} />;
    return newMesh;
  }

  function sanitizeName(name) {
    return isVarName(name) ? `.${name}` : `['${name}']`;
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

  function print(objects, gltf, obj, parent) {
    let result = {};
    let resultStr = {};
    let children = [];
    let type = obj.type.charAt(0).toLowerCase() + obj.type.slice(1);
    let node = 'nodes' + sanitizeName(obj.name);
    let isCamera =
      type === 'perspectiveCamera' || type === 'orthographicCamera';
    let hasAnimations = gltf.animations && gltf.animations.length > 0;

    // Turn object3d's into groups, it should be faster according to the threejs docs
    if (type === 'object3D') type = 'group';
    if (type === 'perspectiveCamera') type = 'PerspectiveCamera';
    if (type === 'orthographicCamera') type = 'OrthographicCamera';

    // Bail out on lights and bones
    if (type === 'bone') {
      return `<primitive object={${node}} />${!parent ? '' : '\n'}`;
    }

    // Collect children
    if (obj.children)
      obj.children.forEach((child) => {
        children.push(print(objects, gltf, child, obj));
      });
    // Form the object in JSX syntax
    if (type === 'mesh') {
      result = {
        name: obj.name,
        type: type,
      };
      resultStr = `<Mesh  
            activeColor={props.activeColor}
            paintMode={props.paintMode}
            modelColors={props.modelColors}
            modelColorsRef={props.modelColorsRef}
            name="${obj.name}"
            lightOne={props.lightOne}
         `;
    } else if (type === 'group') {
      result = {
        name: obj.name,
        type: type,
      };

      resultStr = `<${type} `;
    }

    const oldResult = result;

    // Include names when output is uncompressed or morphTargetDictionaries are present
    if (
      obj.name.length &&
      (obj.morphTargetDictionary ||
        (hasAnimations &&
          gltf.animations.find(
            (clip) =>
              clip.name.includes(obj.name) ||
              (clip.targetNames && clip.targetNames.includes(obj.name))
          )))
    )
      result.name = obj.name;
    resultStr += `name="${obj.name}" `;
    // Handle cameras

    // Write out geometry first
    if (obj.geometry) result.geometry = obj.geometry;
    resultStr += `geometry="${obj.geometry}" `;

    if (
      obj.up &&
      obj.up.isVector3 &&
      !obj.up.equals(new THREE.Vector3(0, 1, 0))
    )
      result.up = [rNbr(obj.up.x), rNbr(obj.up.y), rNbr(obj.up.z)];
    resultStr += `up={[${rNbr(obj.up.x)}, ${rNbr(obj.up.y)}, ${rNbr(
      obj.up.z
    )},]} `;
    if (obj.position && obj.position.isVector3 && rNbr(obj.position.length()))
      result.position = [
        rNbr(obj.position.x),
        rNbr(obj.position.y),
        rNbr(obj.position.z),
      ];
    resultStr += `position={[${rNbr(obj.position.x)}, ${rNbr(
      obj.position.y
    )}, ${rNbr(obj.position.z)},]} `;
    if (
      obj.rotation &&
      obj.rotation.isEuler &&
      rNbr(obj.rotation.toVector3().length())
    )
      result.rotation = [
        rDeg(obj.rotation.x),
        rDeg(obj.rotation.y),
        rDeg(obj.rotation.z),
      ];
    resultStr += `rotation={[${rDeg(obj.rotation.x)}, ${rDeg(
      obj.rotation.y
    )}, ${rDeg(obj.rotation.z)},]} `;
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
        result.scale = rNbr(obj.scale.x);
      } else {
        result.scale = [
          rNbr(obj.scale.x),
          rNbr(obj.scale.y),
          rNbr(obj.scale.z),
        ];
      }
      if (obj.visible === false) result.visible = false;
      if (obj.skeleton) result.skeleton = obj.skeleton;
    }
    //console.log(resultStr);

    // Add children and return
    if (result.type === 'group') {
      return (
        <group position={result.position} rotation={result.rotation}>
          {obj.children.map((child) => print(objects, child, child, obj))}
        </group>
      );
    }
    if (result.type === 'mesh') {
      return (
        <mesh
          geometry={result.geometry}
          position={result.position}
          rotation={result.rotation}
          scale={result.scale}
        ></mesh>
      );
    }

    return null;
  }

  const duplicates = {};
  const objects = [];
  gltf.scene.traverse((child) => {
    //objects.push(child);
    if (child.isMesh && child.material) {
      if (!duplicates[child.material.name]) {
        duplicates[child.material.name] = 1;
      } else {
        duplicates[child.material.name]++;
      }
    }
  });
  const scene = print(objects, gltf, gltf.scene);
  return scene.props.children;
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
  } = props;
  const sceneArr = [];
  const [constArr, setConstArr] = React.useState(null);
  const group = useRef();
  useEffect(() => {
    // useGLTF.preload(gltfIn);

    const gltfLoader = new GLTFLoader();

    gltfLoader.load(gltfIn, (gltf) => {
      const scene = parse(gltf);
      setConstArr(scene);
    });
  }, [modelColors, gltfIn]);
  return (
    <group ref={group} {...props} dispose={null} scale={[0.1, 0.1, 0.1]}>
      {constArr && console.log('Item', constArr)}
      {constArr && constArr.length > 0 && constArr}
    </group>
  );
}
