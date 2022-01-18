/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';

import * as THREE from 'three';

import Mesh from '../../Mesh';
export default function Model({ props }) {
  const group = useRef();
  const { nodes } = useGLTF(`${props.gltfIn}`);

  return (
    <group ref={group} {...props} dispose={null}>
      <Mesh
        activeColor={props.activeColor}
        paintMode={props.paintMode}
        modelColors={props.modelColors}
        modelColorsRef={props.modelColorsRef}
        name="Vanillia_Helmet"
        lightOne={props.lightOne}
        geometry={nodes.Vanillia_Helmet.geometry}
        position={[-0.01, 3.85, 0.78]}
      />
    </group>
  );
}