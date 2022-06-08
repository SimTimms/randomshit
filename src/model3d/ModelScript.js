import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import Mesh from './Mesh';
import MeshShade from './MeshShade';

const mainParts = [
  'SM_leftShoulder_shell_Shoulder_shell_0',
  'Legs_legs_0',
  'SM_leftThighPlate_mesh2_legs_0',
  'SM_leftShoe01_mesh_shoes_0',
  'SM_topHelmet_mesh2_helmet1_0',
  'SM_leftShoulderShell_mesh23_Shoulder_shell_0',
  'chest_mesh_chest1_0',
  'SM_wrist_mesh1_arms_0',
  'SM_pants_mesh_bodyparts_0',
  'pCylinder36_hands_0',
  'default1_bodyparts_0',
  'pCube17_backpack1_0',
  'Group7095_backpack1_0',
  'pSphere4_backpack1_0',
  'pCube95_flex_0001',
  'SM_rightKnee01_mesh_knees_0',
  'SM_beltBuckle_mesh_bodyparts_0',
  'SM_frontHelmet01_mesh1_helmet1_0',
];

export default function ModelScript({
  gltfIn,
  activeColor,
  sprayMode,
  markings,
  armourColor,
  shading,
}) {
  const group = useRef();

  const mod = useGLTF(gltfIn);

  const nodes = mod.nodes;
  const rNbr = (number) => {
    return parseFloat(number.toFixed(Math.round(2)));
  };
  const rDeg = (number) => {
    const abs = Math.abs(Math.round(parseFloat(number) * 100000));
    for (let i = 1; i <= 10; i++) {
      if (abs === Math.round(parseFloat(Math.PI / i) * 100000))
        return Math.PI / 2;
    }
    return rNbr(number);
  };

  function node(nodeArr) {
    let nodeMap = [];
    const existsArray = [];

    if (nodeArr) {
      for (let i = 0; i < nodeArr.length; i++) {
        const item = nodeArr[i];
        let scale = null;
        if (
          item.scale &&
          item.scale.isVector3 &&
          !(
            rNbr(item.scale.x) === 1 &&
            rNbr(item.scale.y) === 1 &&
            rNbr(item.scale.z) === 1
          )
        ) {
          if (item.scale.x === item.scale.y && item.scale.x === item.scale.z) {
            scale = rNbr(item.scale.x);
          } else {
            scale = [
              rNbr(item.scale.x),
              rNbr(item.scale.y),
              rNbr(item.scale.z),
            ];
          }
        }

        const nodeChildArr = Object.values(item.children);
        const exists = existsArray.indexOf(item.name);

        if (exists === -1) {
          existsArray.push(item.name);
          if (item.geometry && item.visible) {
            //     const edges = new THREE.EdgesGeometry(item.geometry, 35);
            nodeMap.push(
              <group dispose={null} key={`index_${i}_${Math.random(1000)}`}>
                <Mesh
                  armourColor={
                    mainParts.indexOf(item.name) > -1 ? armourColor : null
                  }
                  gltfIn={gltfIn}
                  sprayMode={sprayMode}
                  activeColor={activeColor}
                  geometry={item.geometry}
                  scale={item.scale}
                  materialIn={nodeArr[i].material}
                  decals={
                    markings && markings[item.name] ? markings[item.name] : null
                  }
                  video={
                    gltfIn ===
                    'https://random-shit-store.s3.amazonaws.com/614b73c98a97c40c65957b89/Box2/scene.gltf'
                      ? '/Exodite.mp4'
                      : gltfIn ===
                        'https://random-shit-store.s3.eu-west-2.amazonaws.com/614b73c98a97c40c65957b89/Box3/scene.gltf'
                      ? '/corvus.mp4'
                      : null
                  }
                  name={item.name}
                  position={[
                    rNbr(item.position.x),
                    rNbr(item.position.y),
                    rNbr(item.position.z),
                  ]}
                  rotation={[
                    rDeg(item.rotation.x),
                    rDeg(item.rotation.y),
                    rDeg(item.rotation.z),
                  ]}
                >
                  {node(nodeChildArr, nodes)}
                </Mesh>
                {shading && (
                  <MeshShade
                    armourColor={
                      mainParts.indexOf(item.name) > -1 ? armourColor : null
                    }
                    sprayMode={sprayMode}
                    activeColor={activeColor}
                    geometry={item.geometry}
                    scale={item.scale}
                    materialIn={nodeArr[i].material}
                    decals={
                      markings && markings[item.name]
                        ? markings[item.name]
                        : null
                    }
                    video={
                      gltfIn ===
                      'https://random-shit-store.s3.amazonaws.com/614b73c98a97c40c65957b89/Box2/scene.gltf'
                        ? '/Exodite.mp4'
                        : gltfIn ===
                          'https://random-shit-store.s3.eu-west-2.amazonaws.com/614b73c98a97c40c65957b89/Box3/scene.gltf'
                        ? '/corvus.mp4'
                        : null
                    }
                    name={item.name}
                    position={[
                      item.position.x,
                      item.position.y,
                      item.position.z,
                    ]}
                    rotation={[
                      rDeg(item.rotation.x),
                      rDeg(item.rotation.y),
                      rDeg(item.rotation.z),
                    ]}
                  >
                    {node(nodeChildArr, nodes)}
                  </MeshShade>
                )}
                {/*
                <lineSegments
                  geometry={edges}
                  renderOrder={100}
                  scale={item.scale}
                  position={[
                    rNbr(item.position.x),
                    rNbr(item.position.y),
                    rNbr(item.position.z),
                  ]}
                  rotation={[
                    rDeg(item.rotation.x),
                    rDeg(item.rotation.y),
                    rDeg(item.rotation.z),
                  ]}
                >
                  <lineBasicMaterial />
                </lineSegments>
                */}
              </group>
            );
          }
          if (item.type === 'Object3D') {
            nodeMap.push(
              <group
                position={[
                  rNbr(item.position.x),
                  rNbr(item.position.y),
                  rNbr(item.position.z),
                ]}
                scale={item.scale}
                rotation={[
                  rDeg(item.rotation.x),
                  rDeg(item.rotation.y),
                  rDeg(item.rotation.z),
                ]}
              >
                {node(nodeChildArr, nodes)}
              </group>
            );
          }
        }
      }
    }
    return nodeMap.filter((item) => item !== null);
  }
  const nodeArr = Object.values(nodes);

  return (
    <group ref={group} dispose={null}>
      {node(nodeArr, nodes)}
    </group>
  );
}
