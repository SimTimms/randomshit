/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';

import * as THREE from 'three';

import Mesh from '../Mesh';
export default function Model({ props }) {
  const group = useRef();
  const { nodes } = useGLTF('spacemarine/bladeguard/scene.gltf');
  const [decalNormal, setDecalNormal] = React.useState(null);

  return (
    <group ref={group} {...props} dispose={null}>
      <Mesh
        activeColor={props.activeColor.color}
        paintMode={props.paintMode}
        modelColors={props.modelColors}
        modelColorsRef={props.modelColorsRef}
        name="BACKPACK"
        lightOne={props.lightOne}
        geometry={nodes.BACKPACK.geometry}
        position={[0, -6.3, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={5}
      />
      <Mesh
        activeColor={props.activeColor.color}
        paintMode={props.paintMode}
        modelColors={props.modelColors}
        modelColorsRef={props.modelColorsRef}
        name="BLANK_SHIELD"
        lightOne={props.lightOne}
        geometry={nodes.BLANK_SHIELD.geometry}
        position={[15.46, -5.94, -4.55]}
        rotation={[3.09, 0, -1.31]}
        scale={5}
      />
      <Mesh
        activeColor={props.activeColor.color}
        paintMode={props.paintMode}
        modelColors={props.modelColors}
        modelColorsRef={props.modelColorsRef}
        name="CHEST_BLANK"
        lightOne={props.lightOne}
        geometry={nodes.CHEST_BLANK.geometry}
        rotation={[Math.PI / 2, 0, 0]}
        scale={5}
      />
      <Mesh
        activeColor={props.activeColor.color}
        paintMode={props.paintMode}
        modelColors={props.modelColors}
        modelColorsRef={props.modelColorsRef}
        name="CHEST_BLANK_WITH_SOCKET"
        lightOne={props.lightOne}
        geometry={nodes.CHEST_BLANK_WITH_SOCKET.geometry}
        rotation={[Math.PI / 2, 0, 0]}
        scale={5}
      />
      <Mesh
        activeColor={props.activeColor.color}
        paintMode={props.paintMode}
        modelColors={props.modelColors}
        modelColorsRef={props.modelColorsRef}
        name="CHEST_WINGED"
        lightOne={props.lightOne}
        geometry={nodes.CHEST_WINGED.geometry}
        rotation={[Math.PI / 2, 0, 0]}
        scale={5}
      />
      <Mesh
        activeColor={props.activeColor.color}
        paintMode={props.paintMode}
        modelColors={props.modelColors}
        modelColorsRef={props.modelColorsRef}
        name="CHEST_WINGED_WITH_SOCKET"
        lightOne={props.lightOne}
        geometry={nodes.CHEST_WINGED_WITH_SOCKET.geometry}
        rotation={[Math.PI / 2, 0, 0]}
        scale={5}
      />
      <Mesh
        activeColor={props.activeColor.color}
        paintMode={props.paintMode}
        modelColors={props.modelColors}
        modelColorsRef={props.modelColorsRef}
        name="L_AQUILA_HIP_ARMOR"
        lightOne={props.lightOne}
        geometry={nodes.L_AQUILA_HIP_ARMOR.geometry}
        rotation={[Math.PI / 2, 0, 0]}
        scale={5}
      />
      <Mesh
        activeColor={props.activeColor.color}
        paintMode={props.paintMode}
        modelColors={props.modelColors}
        modelColorsRef={props.modelColorsRef}
        name="L_BLANK_HIP_ARMOR"
        lightOne={props.lightOne}
        geometry={nodes.L_BLANK_HIP_ARMOR.geometry}
        rotation={[Math.PI / 2, 0, 0]}
        scale={5}
      />
      <Mesh
        activeColor={props.activeColor.color}
        paintMode={props.paintMode}
        modelColors={props.modelColors}
        modelColorsRef={props.modelColorsRef}
        name="L_ELBOW"
        lightOne={props.lightOne}
        geometry={nodes.L_ELBOW.geometry}
        rotation={[Math.PI / 2, 0, 0]}
        scale={5}
      />
      <Mesh
        activeColor={props.activeColor.color}
        paintMode={props.paintMode}
        modelColors={props.modelColors}
        modelColorsRef={props.modelColorsRef}
        name="L_ELBOW_MESH"
        lightOne={props.lightOne}
        geometry={nodes.L_ELBOW_MESH.geometry}
        rotation={[Math.PI / 2, 0, 0]}
        scale={5}
      />
      <Mesh
        activeColor={props.activeColor.color}
        paintMode={props.paintMode}
        modelColors={props.modelColors}
        modelColorsRef={props.modelColorsRef}
        name="L_FOOT_A"
        lightOne={props.lightOne}
        geometry={nodes.L_FOOT_A.geometry}
        rotation={[Math.PI / 2, 0, 0]}
        scale={5}
      />
      <Mesh
        activeColor={props.activeColor.color}
        paintMode={props.paintMode}
        modelColors={props.modelColors}
        modelColorsRef={props.modelColorsRef}
        name="L_FOOT_FLAT"
        lightOne={props.lightOne}
        geometry={nodes.L_FOOT_FLAT.geometry}
        rotation={[Math.PI / 2, 0, 0]}
        scale={5}
      />
      <Mesh
        activeColor={props.activeColor.color}
        paintMode={props.paintMode}
        modelColors={props.modelColors}
        modelColorsRef={props.modelColorsRef}
        name="L_FOOT_TOP_PLATE"
        lightOne={props.lightOne}
        geometry={nodes.L_FOOT_TOP_PLATE.geometry}
        rotation={[Math.PI / 2, 0, 0]}
        scale={5}
      />
      <Mesh
        activeColor={props.activeColor.color}
        paintMode={props.paintMode}
        modelColors={props.modelColors}
        modelColorsRef={props.modelColorsRef}
        name="L_FOREARM_BLANK"
        lightOne={props.lightOne}
        geometry={nodes.L_FOREARM_BLANK.geometry}
        rotation={[Math.PI / 2, 0, 0]}
        scale={5}
      />
      <Mesh
        activeColor={props.activeColor.color}
        paintMode={props.paintMode}
        modelColors={props.modelColors}
        modelColorsRef={props.modelColorsRef}
        name="L_FOREARM_SKULL"
        lightOne={props.lightOne}
        geometry={nodes.L_FOREARM_SKULL.geometry}
        rotation={[Math.PI / 2, 0, 0]}
        scale={5}
      />
      <Mesh
        activeColor={props.activeColor.color}
        paintMode={props.paintMode}
        modelColors={props.modelColors}
        modelColorsRef={props.modelColorsRef}
        name="L_HAND_GLOVE_MESH001"
        lightOne={props.lightOne}
        geometry={nodes.L_HAND_GLOVE_MESH001.geometry}
        position={[0, 22.35, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={5}
      />
      <Mesh
        activeColor={props.activeColor.color}
        paintMode={props.paintMode}
        modelColors={props.modelColors}
        modelColorsRef={props.modelColorsRef}
        name="L_HAND_INDEX_1"
        lightOne={props.lightOne}
        geometry={nodes.L_HAND_INDEX_1.geometry}
        position={[0, 22.35, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={5}
      />
      <Mesh
        activeColor={props.activeColor.color}
        paintMode={props.paintMode}
        modelColors={props.modelColors}
        modelColorsRef={props.modelColorsRef}
        name="L_HAND_INDEX_2"
        lightOne={props.lightOne}
        geometry={nodes.L_HAND_INDEX_2.geometry}
        position={[0, 22.35, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={5}
      />
      <Mesh
        activeColor={props.activeColor.color}
        paintMode={props.paintMode}
        modelColors={props.modelColors}
        modelColorsRef={props.modelColorsRef}
        name="L_HAND_INDEX_3"
        lightOne={props.lightOne}
        geometry={nodes.L_HAND_INDEX_3.geometry}
        position={[0, 22.35, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={5}
      />
      <Mesh
        activeColor={props.activeColor.color}
        paintMode={props.paintMode}
        modelColors={props.modelColors}
        modelColorsRef={props.modelColorsRef}
        name="L_HAND_MIDDLE_1"
        lightOne={props.lightOne}
        geometry={nodes.L_HAND_MIDDLE_1.geometry}
        position={[0, 22.35, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={5}
      />
      <Mesh
        activeColor={props.activeColor.color}
        paintMode={props.paintMode}
        modelColors={props.modelColors}
        modelColorsRef={props.modelColorsRef}
        name="L_HAND_MIDDLE_2"
        lightOne={props.lightOne}
        geometry={nodes.L_HAND_MIDDLE_2.geometry}
        position={[0, 22.35, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={5}
      />
      <Mesh
        activeColor={props.activeColor.color}
        paintMode={props.paintMode}
        modelColors={props.modelColors}
        modelColorsRef={props.modelColorsRef}
        name="L_HAND_MIDDLE_3"
        lightOne={props.lightOne}
        geometry={nodes.L_HAND_MIDDLE_3.geometry}
        position={[0, 22.35, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={5}
      />
      <Mesh
        activeColor={props.activeColor.color}
        paintMode={props.paintMode}
        modelColors={props.modelColors}
        modelColorsRef={props.modelColorsRef}
        name="L_HAND_PALM_ARMOR"
        lightOne={props.lightOne}
        geometry={nodes.L_HAND_PALM_ARMOR.geometry}
        position={[0, 22.35, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={5}
      />
      <Mesh
        activeColor={props.activeColor.color}
        paintMode={props.paintMode}
        modelColors={props.modelColors}
        modelColorsRef={props.modelColorsRef}
        name="L_HAND_PINKY_1"
        lightOne={props.lightOne}
        geometry={nodes.L_HAND_PINKY_1.geometry}
        position={[0, 22.35, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={5}
      />
      <Mesh
        activeColor={props.activeColor.color}
        paintMode={props.paintMode}
        modelColors={props.modelColors}
        modelColorsRef={props.modelColorsRef}
        name="L_HAND_PINKY_2"
        lightOne={props.lightOne}
        geometry={nodes.L_HAND_PINKY_2.geometry}
        position={[0, 22.35, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={5}
      />
      <Mesh
        activeColor={props.activeColor.color}
        paintMode={props.paintMode}
        modelColors={props.modelColors}
        modelColorsRef={props.modelColorsRef}
        name="L_HAND_PINKY_3"
        lightOne={props.lightOne}
        geometry={nodes.L_HAND_PINKY_3.geometry}
        position={[0, 22.35, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={5}
      />
      <Mesh
        activeColor={props.activeColor.color}
        paintMode={props.paintMode}
        modelColors={props.modelColors}
        modelColorsRef={props.modelColorsRef}
        name="L_HAND_RING_1"
        lightOne={props.lightOne}
        geometry={nodes.L_HAND_RING_1.geometry}
        position={[0, 22.35, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={5}
      />
      <Mesh
        activeColor={props.activeColor.color}
        paintMode={props.paintMode}
        modelColors={props.modelColors}
        modelColorsRef={props.modelColorsRef}
        name="L_HAND_RING_2"
        lightOne={props.lightOne}
        geometry={nodes.L_HAND_RING_2.geometry}
        position={[0, 22.35, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={5}
      />
      <Mesh
        activeColor={props.activeColor.color}
        paintMode={props.paintMode}
        modelColors={props.modelColors}
        modelColorsRef={props.modelColorsRef}
        name="L_HAND_RING_3"
        lightOne={props.lightOne}
        geometry={nodes.L_HAND_RING_3.geometry}
        position={[0, 22.35, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={5}
      />
      <Mesh
        activeColor={props.activeColor.color}
        paintMode={props.paintMode}
        modelColors={props.modelColors}
        modelColorsRef={props.modelColorsRef}
        name="L_HAND_THUMB_1"
        lightOne={props.lightOne}
        geometry={nodes.L_HAND_THUMB_1.geometry}
        position={[0, 22.35, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={5}
      />
      <Mesh
        activeColor={props.activeColor.color}
        paintMode={props.paintMode}
        modelColors={props.modelColors}
        modelColorsRef={props.modelColorsRef}
        name="L_HAND_THUMB_2"
        lightOne={props.lightOne}
        geometry={nodes.L_HAND_THUMB_2.geometry}
        position={[0, 22.35, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={5}
      />
      <Mesh
        activeColor={props.activeColor.color}
        paintMode={props.paintMode}
        modelColors={props.modelColors}
        modelColorsRef={props.modelColorsRef}
        name="L_HAND_THUMB_3"
        lightOne={props.lightOne}
        geometry={nodes.L_HAND_THUMB_3.geometry}
        position={[0, 22.35, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={5}
      />
      <Mesh
        activeColor={props.activeColor.color}
        paintMode={props.paintMode}
        modelColors={props.modelColors}
        modelColorsRef={props.modelColorsRef}
        name="L_KNEE_BLANK"
        lightOne={props.lightOne}
        geometry={nodes.L_KNEE_BLANK.geometry}
        rotation={[Math.PI / 2, 0, 0]}
        scale={5}
      />
      <Mesh
        activeColor={props.activeColor.color}
        paintMode={props.paintMode}
        modelColors={props.modelColors}
        modelColorsRef={props.modelColorsRef}
        name="L_KNEE_MESH001"
        lightOne={props.lightOne}
        geometry={nodes.L_KNEE_MESH001.geometry}
        position={[0, 22.35, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={5}
      />
      <Mesh
        activeColor={props.activeColor.color}
        paintMode={props.paintMode}
        modelColors={props.modelColors}
        modelColorsRef={props.modelColorsRef}
        name="L_KNEE_SKULL"
        lightOne={props.lightOne}
        geometry={nodes.L_KNEE_SKULL.geometry}
        rotation={[Math.PI / 2, 0, 0]}
        scale={5}
      />
      <Mesh
        activeColor={props.activeColor.color}
        paintMode={props.paintMode}
        modelColors={props.modelColors}
        modelColorsRef={props.modelColorsRef}
        name="L_LEG_ARMOR"
        lightOne={props.lightOne}
        geometry={nodes.L_LEG_ARMOR.geometry}
        rotation={[Math.PI / 2, 0, 0]}
        scale={5}
      />
      <Mesh
        activeColor={props.activeColor.color}
        paintMode={props.paintMode}
        modelColors={props.modelColors}
        modelColorsRef={props.modelColorsRef}
        name="L_SHIN_A"
        lightOne={props.lightOne}
        geometry={nodes.L_SHIN_A.geometry}
        rotation={[Math.PI / 2, 0, 0]}
        scale={5}
      />
      <Mesh
        activeColor={props.activeColor.color}
        paintMode={props.paintMode}
        modelColors={props.modelColors}
        modelColorsRef={props.modelColorsRef}
        name="L_SHOULDER"
        lightOne={props.lightOne}
        geometry={nodes.L_SHOULDER.geometry}
        rotation={[Math.PI / 2, 0, 0]}
        scale={5}
      />
      <Mesh
        activeColor={props.activeColor.color}
        paintMode={props.paintMode}
        modelColors={props.modelColors}
        modelColorsRef={props.modelColorsRef}
        name="L_SHOULDER_MESH"
        lightOne={props.lightOne}
        geometry={nodes.L_SHOULDER_MESH.geometry}
        rotation={[Math.PI / 2, 0, 0]}
        scale={5}
      />
      <Mesh
        activeColor={props.activeColor.color}
        paintMode={props.paintMode}
        modelColors={props.modelColors}
        modelColorsRef={props.modelColorsRef}
        name="L_SHOULDER_PAD_BLANK"
        lightOne={props.lightOne}
        geometry={nodes.L_SHOULDER_PAD_BLANK.geometry}
        position={[0, -0.41, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={5}
      />
      <Mesh
        activeColor={props.activeColor.color}
        paintMode={props.paintMode}
        modelColors={props.modelColors}
        modelColorsRef={props.modelColorsRef}
        name="L_THIGH"
        lightOne={props.lightOne}
        geometry={nodes.L_THIGH.geometry}
        position={[0, 22.35, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={5}
      />
      <Mesh
        activeColor={props.activeColor.color}
        paintMode={props.paintMode}
        modelColors={props.modelColors}
        modelColorsRef={props.modelColorsRef}
        name="L_THIGH_MESH"
        lightOne={props.lightOne}
        geometry={nodes.L_THIGH_MESH.geometry}
        rotation={[Math.PI / 2, 0, 0]}
        scale={5}
      />
      <Mesh
        activeColor={props.activeColor.color}
        paintMode={props.paintMode}
        modelColors={props.modelColors}
        modelColorsRef={props.modelColorsRef}
        name="LOWER_TORSO"
        lightOne={props.lightOne}
        geometry={nodes.LOWER_TORSO.geometry}
        rotation={[Math.PI / 2, 0, 0]}
        scale={5}
      />
      <Mesh
        activeColor={props.activeColor.color}
        paintMode={props.paintMode}
        modelColors={props.modelColors}
        modelColorsRef={props.modelColorsRef}
        name="R_AQUILA_HIP_ARMOR"
        lightOne={props.lightOne}
        geometry={nodes.R_AQUILA_HIP_ARMOR.geometry}
        rotation={[Math.PI / 2, 0, 0]}
        scale={5}
      />
      <Mesh
        activeColor={props.activeColor.color}
        paintMode={props.paintMode}
        modelColors={props.modelColors}
        modelColorsRef={props.modelColorsRef}
        name="R_BLANK_HIP_ARMOR"
        lightOne={props.lightOne}
        geometry={nodes.R_BLANK_HIP_ARMOR.geometry}
        rotation={[Math.PI / 2, 0, 0]}
        scale={5}
      />
      <Mesh
        activeColor={props.activeColor.color}
        paintMode={props.paintMode}
        modelColors={props.modelColors}
        modelColorsRef={props.modelColorsRef}
        name="R_ELBOW"
        lightOne={props.lightOne}
        geometry={nodes.R_ELBOW.geometry}
        rotation={[Math.PI / 2, 0, 0]}
        scale={5}
      />
      <Mesh
        activeColor={props.activeColor.color}
        paintMode={props.paintMode}
        modelColors={props.modelColors}
        modelColorsRef={props.modelColorsRef}
        name="R_ELBOW_MESH"
        lightOne={props.lightOne}
        geometry={nodes.R_ELBOW_MESH.geometry}
        rotation={[Math.PI / 2, 0, 0]}
        scale={5}
      />
      <Mesh
        activeColor={props.activeColor.color}
        paintMode={props.paintMode}
        modelColors={props.modelColors}
        modelColorsRef={props.modelColorsRef}
        name="R_FOOT_A"
        lightOne={props.lightOne}
        geometry={nodes.R_FOOT_A.geometry}
        rotation={[Math.PI / 2, 0, 0]}
        scale={5}
      />
      <Mesh
        activeColor={props.activeColor.color}
        paintMode={props.paintMode}
        modelColors={props.modelColors}
        modelColorsRef={props.modelColorsRef}
        name="R_FOOT_FLAT"
        lightOne={props.lightOne}
        geometry={nodes.R_FOOT_FLAT.geometry}
        rotation={[Math.PI / 2, 0, 0]}
        scale={5}
      />
      <Mesh
        activeColor={props.activeColor.color}
        paintMode={props.paintMode}
        modelColors={props.modelColors}
        modelColorsRef={props.modelColorsRef}
        name="R_FOOT_TOP_PLATE"
        lightOne={props.lightOne}
        geometry={nodes.R_FOOT_TOP_PLATE.geometry}
        rotation={[Math.PI / 2, 0, 0]}
        scale={5}
      />
      <Mesh
        activeColor={props.activeColor.color}
        paintMode={props.paintMode}
        modelColors={props.modelColors}
        modelColorsRef={props.modelColorsRef}
        name="R_FOREARM_BLANK"
        lightOne={props.lightOne}
        geometry={nodes.R_FOREARM_BLANK.geometry}
        rotation={[Math.PI / 2, 0, 0]}
        scale={5}
      />
      <Mesh
        activeColor={props.activeColor.color}
        paintMode={props.paintMode}
        modelColors={props.modelColors}
        modelColorsRef={props.modelColorsRef}
        name="R_FOREARM_SKULL"
        lightOne={props.lightOne}
        geometry={nodes.R_FOREARM_SKULL.geometry}
        rotation={[Math.PI / 2, 0, 0]}
        scale={5}
      />
      <Mesh
        activeColor={props.activeColor.color}
        paintMode={props.paintMode}
        modelColors={props.modelColors}
        modelColorsRef={props.modelColorsRef}
        name="R_HAND_GLOVE_MESH001"
        lightOne={props.lightOne}
        geometry={nodes.R_HAND_GLOVE_MESH001.geometry}
        position={[0, 22.35, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={5}
      />
      <Mesh
        activeColor={props.activeColor.color}
        paintMode={props.paintMode}
        modelColors={props.modelColors}
        modelColorsRef={props.modelColorsRef}
        name="R_HAND_INDEX_1"
        lightOne={props.lightOne}
        geometry={nodes.R_HAND_INDEX_1.geometry}
        position={[0, 22.35, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={5}
      />
      <Mesh
        activeColor={props.activeColor.color}
        paintMode={props.paintMode}
        modelColors={props.modelColors}
        modelColorsRef={props.modelColorsRef}
        name="R_HAND_INDEX_2"
        lightOne={props.lightOne}
        geometry={nodes.R_HAND_INDEX_2.geometry}
        position={[0, 22.35, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={5}
      />
      <Mesh
        activeColor={props.activeColor.color}
        paintMode={props.paintMode}
        modelColors={props.modelColors}
        modelColorsRef={props.modelColorsRef}
        name="R_HAND_INDEX_3"
        lightOne={props.lightOne}
        geometry={nodes.R_HAND_INDEX_3.geometry}
        position={[0, 22.35, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={5}
      />
      <Mesh
        activeColor={props.activeColor.color}
        paintMode={props.paintMode}
        modelColors={props.modelColors}
        modelColorsRef={props.modelColorsRef}
        name="R_HAND_MIDDLE_1"
        lightOne={props.lightOne}
        geometry={nodes.R_HAND_MIDDLE_1.geometry}
        position={[0, 22.35, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={5}
      />
      <Mesh
        activeColor={props.activeColor.color}
        paintMode={props.paintMode}
        modelColors={props.modelColors}
        modelColorsRef={props.modelColorsRef}
        name="R_HAND_MIDDLE_2"
        lightOne={props.lightOne}
        geometry={nodes.R_HAND_MIDDLE_2.geometry}
        position={[0, 22.35, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={5}
      />
      <Mesh
        activeColor={props.activeColor.color}
        paintMode={props.paintMode}
        modelColors={props.modelColors}
        modelColorsRef={props.modelColorsRef}
        name="R_HAND_MIDDLE_3"
        lightOne={props.lightOne}
        geometry={nodes.R_HAND_MIDDLE_3.geometry}
        position={[0, 22.35, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={5}
      />
      <Mesh
        activeColor={props.activeColor.color}
        paintMode={props.paintMode}
        modelColors={props.modelColors}
        modelColorsRef={props.modelColorsRef}
        name="R_HAND_PALM_ARMOR"
        lightOne={props.lightOne}
        geometry={nodes.R_HAND_PALM_ARMOR.geometry}
        position={[0, 22.35, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={5}
      />
      <Mesh
        activeColor={props.activeColor.color}
        paintMode={props.paintMode}
        modelColors={props.modelColors}
        modelColorsRef={props.modelColorsRef}
        name="R_HAND_PINKY_1"
        lightOne={props.lightOne}
        geometry={nodes.R_HAND_PINKY_1.geometry}
        position={[0, 22.35, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={5}
      />
      <Mesh
        activeColor={props.activeColor.color}
        paintMode={props.paintMode}
        modelColors={props.modelColors}
        modelColorsRef={props.modelColorsRef}
        name="R_HAND_PINKY_2"
        lightOne={props.lightOne}
        geometry={nodes.R_HAND_PINKY_2.geometry}
        position={[0, 22.35, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={5}
      />
      <Mesh
        activeColor={props.activeColor.color}
        paintMode={props.paintMode}
        modelColors={props.modelColors}
        modelColorsRef={props.modelColorsRef}
        name="R_HAND_PINKY_3"
        lightOne={props.lightOne}
        geometry={nodes.R_HAND_PINKY_3.geometry}
        position={[0, 22.35, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={5}
      />
      <Mesh
        activeColor={props.activeColor.color}
        paintMode={props.paintMode}
        modelColors={props.modelColors}
        modelColorsRef={props.modelColorsRef}
        name="R_HAND_RING_1"
        lightOne={props.lightOne}
        geometry={nodes.R_HAND_RING_1.geometry}
        position={[0, 22.35, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={5}
      />
      <Mesh
        activeColor={props.activeColor.color}
        paintMode={props.paintMode}
        modelColors={props.modelColors}
        modelColorsRef={props.modelColorsRef}
        name="R_HAND_RING_2"
        lightOne={props.lightOne}
        geometry={nodes.R_HAND_RING_2.geometry}
        position={[0, 22.35, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={5}
      />
      <Mesh
        activeColor={props.activeColor.color}
        paintMode={props.paintMode}
        modelColors={props.modelColors}
        modelColorsRef={props.modelColorsRef}
        name="R_HAND_RING_3"
        lightOne={props.lightOne}
        geometry={nodes.R_HAND_RING_3.geometry}
        position={[0, 22.35, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={5}
      />
      <Mesh
        activeColor={props.activeColor.color}
        paintMode={props.paintMode}
        modelColors={props.modelColors}
        modelColorsRef={props.modelColorsRef}
        name="R_HAND_THUMB_1"
        lightOne={props.lightOne}
        geometry={nodes.R_HAND_THUMB_1.geometry}
        position={[0, 22.35, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={5}
      />
      <Mesh
        activeColor={props.activeColor.color}
        paintMode={props.paintMode}
        modelColors={props.modelColors}
        modelColorsRef={props.modelColorsRef}
        name="R_HAND_THUMB_2"
        lightOne={props.lightOne}
        geometry={nodes.R_HAND_THUMB_2.geometry}
        position={[0, 22.35, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={5}
      />
      <Mesh
        activeColor={props.activeColor.color}
        paintMode={props.paintMode}
        modelColors={props.modelColors}
        modelColorsRef={props.modelColorsRef}
        name="R_HAND_THUMB_3"
        lightOne={props.lightOne}
        geometry={nodes.R_HAND_THUMB_3.geometry}
        position={[0, 22.35, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={5}
      />
      <Mesh
        activeColor={props.activeColor.color}
        paintMode={props.paintMode}
        modelColors={props.modelColors}
        modelColorsRef={props.modelColorsRef}
        name="R_KNEE_BLANK"
        lightOne={props.lightOne}
        geometry={nodes.R_KNEE_BLANK.geometry}
        rotation={[Math.PI / 2, 0, 0]}
        scale={5}
      />
      <Mesh
        activeColor={props.activeColor.color}
        paintMode={props.paintMode}
        modelColors={props.modelColors}
        modelColorsRef={props.modelColorsRef}
        name="R_KNEE_MESH001"
        lightOne={props.lightOne}
        geometry={nodes.R_KNEE_MESH001.geometry}
        position={[0, 22.35, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={5}
      />
      <Mesh
        activeColor={props.activeColor.color}
        paintMode={props.paintMode}
        modelColors={props.modelColors}
        modelColorsRef={props.modelColorsRef}
        name="R_KNEE_SKULL"
        lightOne={props.lightOne}
        geometry={nodes.R_KNEE_SKULL.geometry}
        rotation={[Math.PI / 2, 0, 0]}
        scale={5}
      />
      <Mesh
        activeColor={props.activeColor.color}
        paintMode={props.paintMode}
        modelColors={props.modelColors}
        modelColorsRef={props.modelColorsRef}
        name="R_LEG_ARMOR"
        lightOne={props.lightOne}
        geometry={nodes.R_LEG_ARMOR.geometry}
        rotation={[Math.PI / 2, 0, 0]}
        scale={5}
      />
      <Mesh
        activeColor={props.activeColor.color}
        paintMode={props.paintMode}
        modelColors={props.modelColors}
        modelColorsRef={props.modelColorsRef}
        name="R_SHIN_A"
        lightOne={props.lightOne}
        geometry={nodes.R_SHIN_A.geometry}
        rotation={[Math.PI / 2, 0, 0]}
        scale={5}
      />
      <Mesh
        activeColor={props.activeColor.color}
        paintMode={props.paintMode}
        modelColors={props.modelColors}
        modelColorsRef={props.modelColorsRef}
        name="R_SHOUDLER_MESH"
        lightOne={props.lightOne}
        geometry={nodes.R_SHOUDLER_MESH.geometry}
        rotation={[Math.PI / 2, 0, 0]}
        scale={5}
      />
      <Mesh
        activeColor={props.activeColor.color}
        paintMode={props.paintMode}
        modelColors={props.modelColors}
        modelColorsRef={props.modelColorsRef}
        name="R_SHOULDER"
        lightOne={props.lightOne}
        geometry={nodes.R_SHOULDER.geometry}
        rotation={[Math.PI / 2, 0, 0]}
        scale={5}
      />
      <Mesh
        activeColor={props.activeColor.color}
        paintMode={props.paintMode}
        modelColors={props.modelColors}
        modelColorsRef={props.modelColorsRef}
        name="R_SHOULDER_PAD_BLANK"
        lightOne={props.lightOne}
        geometry={nodes.R_SHOULDER_PAD_BLANK.geometry}
        rotation={[Math.PI / 2, 0, 0]}
        scale={5}
      />
      <Mesh
        activeColor={props.activeColor.color}
        paintMode={props.paintMode}
        modelColors={props.modelColors}
        modelColorsRef={props.modelColorsRef}
        name="R_THIGH"
        lightOne={props.lightOne}
        geometry={nodes.R_THIGH.geometry}
        position={[0, 22.35, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={5}
      />
      <Mesh
        activeColor={props.activeColor.color}
        paintMode={props.paintMode}
        modelColors={props.modelColors}
        modelColorsRef={props.modelColorsRef}
        name="R_THIGH_MESH"
        lightOne={props.lightOne}
        geometry={nodes.R_THIGH_MESH.geometry}
        rotation={[Math.PI / 2, 0, 0]}
        scale={5}
      />
      <Mesh
        activeColor={props.activeColor.color}
        paintMode={props.paintMode}
        modelColors={props.modelColors}
        modelColorsRef={props.modelColorsRef}
        name="SHIELD_1"
        lightOne={props.lightOne}
        geometry={nodes.SHIELD_1.geometry}
        position={[14.3, -5.68, -5.73]}
        rotation={[1.6, 0, 0]}
        scale={5}
      />
      <Mesh
        activeColor={props.activeColor.color}
        paintMode={props.paintMode}
        modelColors={props.modelColors}
        modelColorsRef={props.modelColorsRef}
        name="SHIELD_2"
        lightOne={props.lightOne}
        geometry={nodes.SHIELD_2.geometry}
        position={[14.51, -5.4, -3.03]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={5}
      />
      <Mesh
        activeColor={props.activeColor.color}
        paintMode={props.paintMode}
        modelColors={props.modelColors}
        modelColorsRef={props.modelColorsRef}
        name="SWORD"
        lightOne={props.lightOne}
        geometry={nodes.SWORD.geometry}
        position={[-11.6, -4.49, 2.18]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={5}
      />
      <Mesh
        activeColor={props.activeColor.color}
        paintMode={props.paintMode}
        modelColors={props.modelColors}
        modelColorsRef={props.modelColorsRef}
        name="TORSO_SHIELD_A"
        lightOne={props.lightOne}
        geometry={nodes.TORSO_SHIELD_A.geometry}
        rotation={[Math.PI / 2, 0, 0]}
        scale={5}
      />
      <Mesh
        activeColor={props.activeColor.color}
        paintMode={props.paintMode}
        modelColors={props.modelColors}
        modelColorsRef={props.modelColorsRef}
        name="TORSO_SHIELD_B"
        lightOne={props.lightOne}
        geometry={nodes.TORSO_SHIELD_B.geometry}
        rotation={[Math.PI / 2, 0, 0]}
        scale={5}
      />
      <Mesh
        activeColor={props.activeColor.color}
        paintMode={props.paintMode}
        modelColors={props.modelColors}
        modelColorsRef={props.modelColorsRef}
        name="TORSO_SHIELD_C"
        lightOne={props.lightOne}
        geometry={nodes.TORSO_SHIELD_C.geometry}
        rotation={[Math.PI / 2, 0, 0]}
        scale={5}
      />
      <Mesh
        activeColor={props.activeColor.color}
        paintMode={props.paintMode}
        modelColors={props.modelColors}
        modelColorsRef={props.modelColorsRef}
        name="VANILLA_BLANK_HELMET"
        lightOne={props.lightOne}
        geometry={nodes.VANILLA_BLANK_HELMET.geometry}
        rotation={[Math.PI / 2, 0, 0]}
        scale={5}
      />
      <Mesh
        activeColor={props.activeColor.color}
        paintMode={props.paintMode}
        modelColors={props.modelColors}
        modelColorsRef={props.modelColorsRef}
        name="VANILLA_BLANK_HELMET_SKULL"
        lightOne={props.lightOne}
        geometry={nodes.VANILLA_BLANK_HELMET_SKULL.geometry}
        rotation={[Math.PI / 2, 0, 0]}
        scale={5}
      />
      <Mesh
        activeColor={props.activeColor.color}
        paintMode={props.paintMode}
        modelColors={props.modelColors}
        modelColorsRef={props.modelColorsRef}
        name="WAIST_NO_BELT"
        lightOne={props.lightOne}
        geometry={nodes.WAIST_NO_BELT.geometry}
        rotation={[Math.PI / 2, 0, 0]}
        scale={5}
      />
    </group>
  );
}

useGLTF.preload('spacemarine/bladeguard/scene.gltf');