/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Janovich (https://sketchfab.com/janovich3D)
created: Fri Oct  1 18:41:08 2021
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/warhammer-40k-space-marine-650166abbb3448e9adece85e30b59c06
title: Warhammer 40K Space Marine
*/

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

import Mesh from '../Mesh';
export default function Model({ props }) {
  const group = useRef();
  const { nodes } = useGLTF(
    'https://random-shit-store.s3.eu-west-2.amazonaws.com/614b73c98a97c40c65957b89/Test3/scene.gltf'
  );
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <Mesh
            activeColor={props.activeColor.color}
            paintMode={props.paintMode}
            modelColors={props.modelColors}
            modelColorsRef={props.modelColorsRef}
            name="default1_bodyparts_0"
            lightOne={props.lightOne}
            geometry={nodes.default1_bodyparts_0.geometry}
          />
          <Mesh
            activeColor={props.activeColor.color}
            paintMode={props.paintMode}
            modelColors={props.modelColors}
            modelColorsRef={props.modelColorsRef}
            name="SM_pants_mesh_bodyparts_0"
            lightOne={props.lightOne}
            geometry={nodes.SM_pants_mesh_bodyparts_0.geometry}
          />
          <Mesh
            activeColor={props.activeColor.color}
            paintMode={props.paintMode}
            modelColors={props.modelColors}
            modelColorsRef={props.modelColorsRef}
            name="SM_beltBuckle_mesh_bodyparts_0"
            lightOne={props.lightOne}
            geometry={nodes.SM_beltBuckle_mesh_bodyparts_0.geometry}
            decalNormal={props.decalSet}
          />
          <Mesh
            activeColor={props.activeColor.color}
            paintMode={props.paintMode}
            modelColors={props.modelColors}
            modelColorsRef={props.modelColorsRef}
            name="SM_bodyWire_mesh1_tubes_0"
            lightOne={props.lightOne}
            geometry={nodes.SM_bodyWire_mesh1_tubes_0.geometry}
          />
          <Mesh
            activeColor={props.activeColor.color}
            paintMode={props.paintMode}
            modelColors={props.modelColors}
            modelColorsRef={props.modelColorsRef}
            name="SM_bodyWire_mesh_tubes_0"
            lightOne={props.lightOne}
            geometry={nodes.SM_bodyWire_mesh_tubes_0.geometry}
          />
          <Mesh
            activeColor={props.activeColor.color}
            paintMode={props.paintMode}
            modelColors={props.modelColors}
            modelColorsRef={props.modelColorsRef}
            name="SM_bodyWire_mesh2_tubes_0"
            lightOne={props.lightOne}
            geometry={nodes.SM_bodyWire_mesh2_tubes_0.geometry}
          />
          <Mesh
            activeColor={props.activeColor.color}
            paintMode={props.paintMode}
            modelColors={props.modelColors}
            modelColorsRef={props.modelColorsRef}
            name="SM_body_mesh_flex_0"
            lightOne={props.lightOne}
            geometry={nodes.SM_body_mesh_flex_0.geometry}
          />
          <Mesh
            activeColor={props.activeColor.color}
            paintMode={props.paintMode}
            modelColors={props.modelColors}
            modelColorsRef={props.modelColorsRef}
            name="SM_chestInner_mesh_chest1_0"
            lightOne={props.lightOne}
            geometry={nodes.SM_chestInner_mesh_chest1_0.geometry}
          />
          <Mesh
            activeColor={props.activeColor.color}
            paintMode={props.paintMode}
            modelColors={props.modelColors}
            modelColorsRef={props.modelColorsRef}
            name="chest_mesh_chest1_0"
            lightOne={props.lightOne}
            geometry={nodes.chest_mesh_chest1_0.geometry}
          />
          <Mesh
            activeColor={props.activeColor.color}
            paintMode={props.paintMode}
            modelColors={props.modelColors}
            modelColorsRef={props.modelColorsRef}
            name="SM_wingLeft_mesh1_details_0"
            lightOne={props.lightOne}
            geometry={nodes.SM_wingLeft_mesh1_details_0.geometry}
          />
          <Mesh
            activeColor={props.activeColor.color}
            paintMode={props.paintMode}
            modelColors={props.modelColors}
            modelColorsRef={props.modelColorsRef}
            name="SM_skull_mesh_details_0"
            lightOne={props.lightOne}
            geometry={nodes.SM_skull_mesh_details_0.geometry}
          />
          <Mesh
            activeColor={props.activeColor.color}
            paintMode={props.paintMode}
            modelColors={props.modelColors}
            modelColorsRef={props.modelColorsRef}
            name="SM_wingLeft_mesh_details_0"
            lightOne={props.lightOne}
            geometry={nodes.SM_wingLeft_mesh_details_0.geometry}
          />
          <Mesh
            activeColor={props.activeColor.color}
            paintMode={props.paintMode}
            modelColors={props.modelColors}
            modelColorsRef={props.modelColorsRef}
            name="SM_leftHipFlex_mesh_flex_0"
            lightOne={props.lightOne}
            geometry={nodes.SM_leftHipFlex_mesh_flex_0.geometry}
          />
          <Mesh
            activeColor={props.activeColor.color}
            paintMode={props.paintMode}
            modelColors={props.modelColors}
            modelColorsRef={props.modelColorsRef}
            name="SM_leftKnee01_mesh_knees_0"
            lightOne={props.lightOne}
            geometry={nodes.SM_leftKnee01_mesh_knees_0.geometry}
          />
          <Mesh
            activeColor={props.activeColor.color}
            paintMode={props.paintMode}
            modelColors={props.modelColors}
            modelColorsRef={props.modelColorsRef}
            name="SM_leftKneeFlex_mesh_flex_0"
            lightOne={props.lightOne}
            geometry={nodes.SM_leftKneeFlex_mesh_flex_0.geometry}
          />
          <Mesh
            activeColor={props.activeColor.color}
            paintMode={props.paintMode}
            modelColors={props.modelColors}
            modelColorsRef={props.modelColorsRef}
            name="Legs_legs_0"
            lightOne={props.lightOne}
            geometry={nodes.Legs_legs_0.geometry}
          />
          <Mesh
            activeColor={props.activeColor.color}
            paintMode={props.paintMode}
            modelColors={props.modelColors}
            modelColorsRef={props.modelColorsRef}
            name="SM_leftShoe01_mesh_shoes_0"
            lightOne={props.lightOne}
            geometry={nodes.SM_leftShoe01_mesh_shoes_0.geometry}
          />
          <Mesh
            activeColor={props.activeColor.color}
            paintMode={props.paintMode}
            modelColors={props.modelColors}
            modelColorsRef={props.modelColorsRef}
            name="SM_leftThighPlate_mesh2_legs_0"
            lightOne={props.lightOne}
            geometry={nodes.SM_leftThighPlate_mesh2_legs_0.geometry}
          />
          <Mesh
            activeColor={props.activeColor.color}
            paintMode={props.paintMode}
            modelColors={props.modelColors}
            modelColorsRef={props.modelColorsRef}
            name="SM_leftThighPlate_mesh1_legs_0"
            lightOne={props.lightOne}
            geometry={nodes.SM_leftThighPlate_mesh1_legs_0.geometry}
          />
          <Mesh
            activeColor={props.activeColor.color}
            paintMode={props.paintMode}
            modelColors={props.modelColors}
            modelColorsRef={props.modelColorsRef}
            name="SM_leftHipFlex_mesh1_flex_0"
            lightOne={props.lightOne}
            geometry={nodes.SM_leftHipFlex_mesh1_flex_0.geometry}
          />
          <Mesh
            activeColor={props.activeColor.color}
            paintMode={props.paintMode}
            modelColors={props.modelColors}
            modelColorsRef={props.modelColorsRef}
            name="SM_leftShinPlate_mesh1_legs_0"
            lightOne={props.lightOne}
            geometry={nodes.SM_leftShinPlate_mesh1_legs_0.geometry}
          />
          <Mesh
            activeColor={props.activeColor.color}
            paintMode={props.paintMode}
            modelColors={props.modelColors}
            modelColorsRef={props.modelColorsRef}
            name="SM_rightShoe01_mesh_shoes_0"
            lightOne={props.lightOne}
            geometry={nodes.SM_rightShoe01_mesh_shoes_0.geometry}
          />
          <Mesh
            activeColor={props.activeColor.color}
            paintMode={props.paintMode}
            modelColors={props.modelColors}
            modelColorsRef={props.modelColorsRef}
            name="SM_leftKneeFlex_mesh1_flex_0"
            lightOne={props.lightOne}
            geometry={nodes.SM_leftKneeFlex_mesh1_flex_0.geometry}
          />
          <group position={[0, 0.15, -0.69]} rotation={[0.32, 0, 0]}>
            <Mesh
              activeColor={props.activeColor.color}
              paintMode={props.paintMode}
              modelColors={props.modelColors}
              modelColorsRef={props.modelColorsRef}
              name="SM_shoulder_mesh1_arms_0"
              lightOne={props.lightOne}
              geometry={nodes.SM_shoulder_mesh1_arms_0.geometry}
            />
            <group position={[0.02, 0.22, 1.02]} rotation={[-0.58, 0, 0]}>
              <Mesh
                activeColor={props.activeColor.color}
                paintMode={props.paintMode}
                modelColors={props.modelColors}
                modelColorsRef={props.modelColorsRef}
                name="SM_elbowArmor_mesh1_arms_0"
                lightOne={props.lightOne}
                geometry={nodes.SM_elbowArmor_mesh1_arms_0.geometry}
              />
            </group>
            <group position={[0, -0.01, -0.03]}>
              <Mesh
                activeColor={props.activeColor.color}
                paintMode={props.paintMode}
                modelColors={props.modelColors}
                modelColorsRef={props.modelColorsRef}
                name="SM_armFlex_mesh_flex_0"
                lightOne={props.lightOne}
                geometry={nodes.SM_armFlex_mesh_flex_0.geometry}
              />
            </group>
            <group
              position={[-0.36, 2.15, 1.45]}
              rotation={[-0.71, 0.97, -0.94]}
            >
              <Mesh
                activeColor={props.activeColor.color}
                paintMode={props.paintMode}
                modelColors={props.modelColors}
                modelColorsRef={props.modelColorsRef}
                name="pCylinder36_hands_0"
                lightOne={props.lightOne}
                geometry={nodes.pCylinder36_hands_0.geometry}
              />
              <Mesh
                activeColor={props.activeColor.color}
                paintMode={props.paintMode}
                modelColors={props.modelColors}
                modelColorsRef={props.modelColorsRef}
                name="pCylinder56_hands_0"
                lightOne={props.lightOne}
                geometry={nodes.pCylinder56_hands_0.geometry}
              />
              <Mesh
                activeColor={props.activeColor.color}
                paintMode={props.paintMode}
                modelColors={props.modelColors}
                modelColorsRef={props.modelColorsRef}
                name="pCylinder74_flex_0"
                lightOne={props.lightOne}
                geometry={nodes.pCylinder74_flex_0.geometry}
              />
              <Mesh
                activeColor={props.activeColor.color}
                paintMode={props.paintMode}
                modelColors={props.modelColors}
                modelColorsRef={props.modelColorsRef}
                name="pCylinder73_hands_0"
                lightOne={props.lightOne}
                geometry={nodes.pCylinder73_hands_0.geometry}
              />
              <Mesh
                activeColor={props.activeColor.color}
                paintMode={props.paintMode}
                modelColors={props.modelColors}
                modelColorsRef={props.modelColorsRef}
                name="pCylinder72_hands_0"
                lightOne={props.lightOne}
                geometry={nodes.pCylinder72_hands_0.geometry}
              />
              <Mesh
                activeColor={props.activeColor.color}
                paintMode={props.paintMode}
                modelColors={props.modelColors}
                modelColorsRef={props.modelColorsRef}
                name="pCylinder79_hands_0"
                lightOne={props.lightOne}
                geometry={nodes.pCylinder79_hands_0.geometry}
              />
              <Mesh
                activeColor={props.activeColor.color}
                paintMode={props.paintMode}
                modelColors={props.modelColors}
                modelColorsRef={props.modelColorsRef}
                name="pCylinder78_hands_0"
                lightOne={props.lightOne}
                geometry={nodes.pCylinder78_hands_0.geometry}
              />
              <Mesh
                activeColor={props.activeColor.color}
                paintMode={props.paintMode}
                modelColors={props.modelColors}
                modelColorsRef={props.modelColorsRef}
                name="pCylinder77_hands_0"
                lightOne={props.lightOne}
                geometry={nodes.pCylinder77_hands_0.geometry}
              />
              <Mesh
                activeColor={props.activeColor.color}
                paintMode={props.paintMode}
                modelColors={props.modelColors}
                modelColorsRef={props.modelColorsRef}
                name="pCylinder76_flex_0"
                lightOne={props.lightOne}
                geometry={nodes.pCylinder76_flex_0.geometry}
              />
              <Mesh
                activeColor={props.activeColor.color}
                paintMode={props.paintMode}
                modelColors={props.modelColors}
                modelColorsRef={props.modelColorsRef}
                name="pCylinder75_hands_0"
                lightOne={props.lightOne}
                geometry={nodes.pCylinder75_hands_0.geometry}
              />
              <Mesh
                activeColor={props.activeColor.color}
                paintMode={props.paintMode}
                modelColors={props.modelColors}
                modelColorsRef={props.modelColorsRef}
                name="pCylinder58_hands_0"
                lightOne={props.lightOne}
                geometry={nodes.pCylinder58_hands_0.geometry}
              />
              <Mesh
                activeColor={props.activeColor.color}
                paintMode={props.paintMode}
                modelColors={props.modelColors}
                modelColorsRef={props.modelColorsRef}
                name="pCylinder80_flex_0"
                lightOne={props.lightOne}
                geometry={nodes.pCylinder80_flex_0.geometry}
              />
              <Mesh
                activeColor={props.activeColor.color}
                paintMode={props.paintMode}
                modelColors={props.modelColors}
                modelColorsRef={props.modelColorsRef}
                name="pCylinder59_hands_0"
                lightOne={props.lightOne}
                geometry={nodes.pCylinder59_hands_0.geometry}
              />
              <Mesh
                activeColor={props.activeColor.color}
                paintMode={props.paintMode}
                modelColors={props.modelColors}
                modelColorsRef={props.modelColorsRef}
                name="pCylinder57_hands_0"
                lightOne={props.lightOne}
                geometry={nodes.pCylinder57_hands_0.geometry}
              />
              <Mesh
                activeColor={props.activeColor.color}
                paintMode={props.paintMode}
                modelColors={props.modelColors}
                modelColorsRef={props.modelColorsRef}
                name="pCylinder71_hands_0"
                lightOne={props.lightOne}
                geometry={nodes.pCylinder71_hands_0.geometry}
              />
              <Mesh
                activeColor={props.activeColor.color}
                paintMode={props.paintMode}
                modelColors={props.modelColors}
                modelColorsRef={props.modelColorsRef}
                name="pCube97_hands_0"
                lightOne={props.lightOne}
                geometry={nodes.pCube97_hands_0.geometry}
              />
              <Mesh
                activeColor={props.activeColor.color}
                paintMode={props.paintMode}
                modelColors={props.modelColors}
                modelColorsRef={props.modelColorsRef}
                name="pCylinder60_hands_0"
                lightOne={props.lightOne}
                geometry={nodes.pCylinder60_hands_0.geometry}
              />
              <Mesh
                activeColor={props.activeColor.color}
                paintMode={props.paintMode}
                modelColors={props.modelColors}
                modelColorsRef={props.modelColorsRef}
                name="pCylinder61_hands_0"
                lightOne={props.lightOne}
                geometry={nodes.pCylinder61_hands_0.geometry}
              />
              <Mesh
                activeColor={props.activeColor.color}
                paintMode={props.paintMode}
                modelColors={props.modelColors}
                modelColorsRef={props.modelColorsRef}
                name="pCylinder70_flex_0"
                lightOne={props.lightOne}
                geometry={nodes.pCylinder70_flex_0.geometry}
              />
              <Mesh
                activeColor={props.activeColor.color}
                paintMode={props.paintMode}
                modelColors={props.modelColors}
                modelColorsRef={props.modelColorsRef}
                name="pCube96_hands_0"
                lightOne={props.lightOne}
                geometry={nodes.pCube96_hands_0.geometry}
              />
              <Mesh
                activeColor={props.activeColor.color}
                paintMode={props.paintMode}
                modelColors={props.modelColors}
                modelColorsRef={props.modelColorsRef}
                name="pCylinder55_flex_0"
                lightOne={props.lightOne}
                geometry={nodes.pCylinder55_flex_0.geometry}
              />
              <Mesh
                activeColor={props.activeColor.color}
                paintMode={props.paintMode}
                modelColors={props.modelColors}
                modelColorsRef={props.modelColorsRef}
                name="pCube95_flex_0"
                lightOne={props.lightOne}
                geometry={nodes.pCube95_flex_0.geometry}
              />
              <Mesh
                activeColor={props.activeColor.color}
                paintMode={props.paintMode}
                modelColors={props.modelColors}
                modelColorsRef={props.modelColorsRef}
                name="SM_wrist_mesh1_arms_0"
                lightOne={props.lightOne}
                geometry={nodes.SM_wrist_mesh1_arms_0.geometry}
              />
            </group>
          </group>
          <group position={[0, 0.01, -0.21]} rotation={[0.09, 0, 0]}>
            <Mesh
              activeColor={props.activeColor.color}
              paintMode={props.paintMode}
              modelColors={props.modelColors}
              modelColorsRef={props.modelColorsRef}
              name="SM_shoulder_mesh_arms_0"
              lightOne={props.lightOne}
              geometry={nodes.SM_shoulder_mesh_arms_0.geometry}
            />
            <Mesh
              activeColor={props.activeColor.color}
              paintMode={props.paintMode}
              modelColors={props.modelColors}
              modelColorsRef={props.modelColorsRef}
              name="SM_armFlex_mesh1_flex_0"
              lightOne={props.lightOne}
              geometry={nodes.SM_armFlex_mesh1_flex_0.geometry}
              position={[0, -0.04, 0.1]}
              rotation={[-0.06, 0, 0]}
            />
            <group position={[0, 0.1, 0.91]} rotation={[-0.48, 0, 0]}>
              <Mesh
                activeColor={props.activeColor.color}
                paintMode={props.paintMode}
                modelColors={props.modelColors}
                modelColorsRef={props.modelColorsRef}
                name="SM_elbowArmor_mesh_arms_0"
                lightOne={props.lightOne}
                geometry={nodes.SM_elbowArmor_mesh_arms_0.geometry}
              />
            </group>
            <group position={[0.53, 0.83, 1.21]} rotation={[-1.3, 0.4, 0.39]}>
              <group
                position={[0.68, 0.61, 0.13]}
                rotation={[-0.08, -0.05, 0.63]}
              >
                <Mesh
                  activeColor={props.activeColor.color}
                  paintMode={props.paintMode}
                  modelColors={props.modelColors}
                  modelColorsRef={props.modelColorsRef}
                  name="pCylinder36_hands_0_1"
                  lightOne={props.lightOne}
                  geometry={nodes.pCylinder36_hands_0_1.geometry}
                />
                <Mesh
                  activeColor={props.activeColor.color}
                  paintMode={props.paintMode}
                  modelColors={props.modelColors}
                  modelColorsRef={props.modelColorsRef}
                  name="pCylinder56_hands_0_1"
                  lightOne={props.lightOne}
                  geometry={nodes.pCylinder56_hands_0_1.geometry}
                />
                <Mesh
                  activeColor={props.activeColor.color}
                  paintMode={props.paintMode}
                  modelColors={props.modelColors}
                  modelColorsRef={props.modelColorsRef}
                  name="pCylinder74_flex_0_1"
                  lightOne={props.lightOne}
                  geometry={nodes.pCylinder74_flex_0_1.geometry}
                />
                <Mesh
                  activeColor={props.activeColor.color}
                  paintMode={props.paintMode}
                  modelColors={props.modelColors}
                  modelColorsRef={props.modelColorsRef}
                  name="pCylinder73_hands_0_1"
                  lightOne={props.lightOne}
                  geometry={nodes.pCylinder73_hands_0_1.geometry}
                />
                <Mesh
                  activeColor={props.activeColor.color}
                  paintMode={props.paintMode}
                  modelColors={props.modelColors}
                  modelColorsRef={props.modelColorsRef}
                  name="pCylinder72_hands_0_1"
                  lightOne={props.lightOne}
                  geometry={nodes.pCylinder72_hands_0_1.geometry}
                />
                <Mesh
                  activeColor={props.activeColor.color}
                  paintMode={props.paintMode}
                  modelColors={props.modelColors}
                  modelColorsRef={props.modelColorsRef}
                  name="pCylinder79_hands_0_1"
                  lightOne={props.lightOne}
                  geometry={nodes.pCylinder79_hands_0_1.geometry}
                />
                <Mesh
                  activeColor={props.activeColor.color}
                  paintMode={props.paintMode}
                  modelColors={props.modelColors}
                  modelColorsRef={props.modelColorsRef}
                  name="pCylinder78_hands_0_1"
                  lightOne={props.lightOne}
                  geometry={nodes.pCylinder78_hands_0_1.geometry}
                />
                <Mesh
                  activeColor={props.activeColor.color}
                  paintMode={props.paintMode}
                  modelColors={props.modelColors}
                  modelColorsRef={props.modelColorsRef}
                  name="pCylinder77_hands_0_1"
                  lightOne={props.lightOne}
                  geometry={nodes.pCylinder77_hands_0_1.geometry}
                />
                <Mesh
                  activeColor={props.activeColor.color}
                  paintMode={props.paintMode}
                  modelColors={props.modelColors}
                  modelColorsRef={props.modelColorsRef}
                  name="pCylinder76_flex_0_1"
                  lightOne={props.lightOne}
                  geometry={nodes.pCylinder76_flex_0_1.geometry}
                />
                <Mesh
                  activeColor={props.activeColor.color}
                  paintMode={props.paintMode}
                  modelColors={props.modelColors}
                  modelColorsRef={props.modelColorsRef}
                  name="pCylinder75_hands_0_1"
                  lightOne={props.lightOne}
                  geometry={nodes.pCylinder75_hands_0_1.geometry}
                />
                <Mesh
                  activeColor={props.activeColor.color}
                  paintMode={props.paintMode}
                  modelColors={props.modelColors}
                  modelColorsRef={props.modelColorsRef}
                  name="pCylinder58_hands_0_1"
                  lightOne={props.lightOne}
                  geometry={nodes.pCylinder58_hands_0_1.geometry}
                />
                <Mesh
                  activeColor={props.activeColor.color}
                  paintMode={props.paintMode}
                  modelColors={props.modelColors}
                  modelColorsRef={props.modelColorsRef}
                  name="pCylinder80_flex_0_1"
                  lightOne={props.lightOne}
                  geometry={nodes.pCylinder80_flex_0_1.geometry}
                />
                <Mesh
                  activeColor={props.activeColor.color}
                  paintMode={props.paintMode}
                  modelColors={props.modelColors}
                  modelColorsRef={props.modelColorsRef}
                  name="pCylinder59_hands_0_1"
                  lightOne={props.lightOne}
                  geometry={nodes.pCylinder59_hands_0_1.geometry}
                />
                <Mesh
                  activeColor={props.activeColor.color}
                  paintMode={props.paintMode}
                  modelColors={props.modelColors}
                  modelColorsRef={props.modelColorsRef}
                  name="pCylinder57_hands_0_1"
                  lightOne={props.lightOne}
                  geometry={nodes.pCylinder57_hands_0_1.geometry}
                />
                <Mesh
                  activeColor={props.activeColor.color}
                  paintMode={props.paintMode}
                  modelColors={props.modelColors}
                  modelColorsRef={props.modelColorsRef}
                  name="pCylinder71_hands_0_1"
                  lightOne={props.lightOne}
                  geometry={nodes.pCylinder71_hands_0_1.geometry}
                />
                <Mesh
                  activeColor={props.activeColor.color}
                  paintMode={props.paintMode}
                  modelColors={props.modelColors}
                  modelColorsRef={props.modelColorsRef}
                  name="pCube97_hands_0_1"
                  lightOne={props.lightOne}
                  geometry={nodes.pCube97_hands_0_1.geometry}
                />
                <Mesh
                  activeColor={props.activeColor.color}
                  paintMode={props.paintMode}
                  modelColors={props.modelColors}
                  modelColorsRef={props.modelColorsRef}
                  name="pCylinder60_hands_0_1"
                  lightOne={props.lightOne}
                  geometry={nodes.pCylinder60_hands_0_1.geometry}
                />
                <Mesh
                  activeColor={props.activeColor.color}
                  paintMode={props.paintMode}
                  modelColors={props.modelColors}
                  modelColorsRef={props.modelColorsRef}
                  name="pCylinder61_hands_0_1"
                  lightOne={props.lightOne}
                  geometry={nodes.pCylinder61_hands_0_1.geometry}
                />
                <Mesh
                  activeColor={props.activeColor.color}
                  paintMode={props.paintMode}
                  modelColors={props.modelColors}
                  modelColorsRef={props.modelColorsRef}
                  name="pCylinder70_flex_0_1"
                  lightOne={props.lightOne}
                  geometry={nodes.pCylinder70_flex_0_1.geometry}
                />
                <Mesh
                  activeColor={props.activeColor.color}
                  paintMode={props.paintMode}
                  modelColors={props.modelColors}
                  modelColorsRef={props.modelColorsRef}
                  name="pCube96_hands_0_1"
                  lightOne={props.lightOne}
                  geometry={nodes.pCube96_hands_0_1.geometry}
                />
                <Mesh
                  activeColor={props.activeColor.color}
                  paintMode={props.paintMode}
                  modelColors={props.modelColors}
                  modelColorsRef={props.modelColorsRef}
                  name="pCylinder55_flex_0_1"
                  lightOne={props.lightOne}
                  geometry={nodes.pCylinder55_flex_0_1.geometry}
                />
                <Mesh
                  activeColor={props.activeColor.color}
                  paintMode={props.paintMode}
                  modelColors={props.modelColors}
                  modelColorsRef={props.modelColorsRef}
                  name="pCube95_flex_0_1"
                  lightOne={props.lightOne}
                  geometry={nodes.pCube95_flex_0_1.geometry}
                />
              </group>
              <Mesh
                activeColor={props.activeColor.color}
                paintMode={props.paintMode}
                modelColors={props.modelColors}
                modelColorsRef={props.modelColorsRef}
                name="SM_wrist_mesh_arms_0"
                lightOne={props.lightOne}
                geometry={nodes.SM_wrist_mesh_arms_0.geometry}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(
  'https://random-shit-store.s3.eu-west-2.amazonaws.com/614b73c98a97c40c65957b89/Test3/scene.gltf'
);