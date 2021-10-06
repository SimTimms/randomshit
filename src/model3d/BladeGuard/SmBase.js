/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: pvcangel (https://sketchfab.com/pvcangel)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/40k-tabletop-miniature-base-9bf3d969bfa74b6e84e9f735dbcfcffc
title: 40K Tabletop Miniature Base
*/

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import Mesh from '../Mesh';
import * as THREE from 'three';

export default function Model({ props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/spacemarine/base/scene.gltf');
  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      scale={[0.05, 0.05, 0.05]}
      position={[1.32, -0.35, 0.11]}
    >
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <Mesh
          activeColor={props.activeColor.color}
          paintMode={props.paintMode}
          modelColors={props.modelColors}
          modelColorsRef={props.modelColorsRef}
          name="mesh_0"
          lightOne={props.lightOne}
          geometry={nodes.mesh_0.geometry}
        />
        <Mesh
          activeColor={props.activeColor.color}
          paintMode={props.paintMode}
          modelColors={props.modelColors}
          modelColorsRef={props.modelColorsRef}
          name="mesh_1"
          lightOne={props.lightOne}
          geometry={nodes.mesh_1.geometry}
        />
        <Mesh
          activeColor={props.activeColor.color}
          paintMode={props.paintMode}
          modelColors={props.modelColors}
          modelColorsRef={props.modelColorsRef}
          name="mesh_2"
          lightOne={props.lightOne}
          geometry={nodes.mesh_2.geometry}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/spacemarine/base/scene.gltf');
