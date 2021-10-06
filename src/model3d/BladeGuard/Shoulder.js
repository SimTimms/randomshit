/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';

import * as THREE from 'three';

import Mesh from '../Mesh';
export default function Model({ props }) {
  const group = useRef();
  const { nodes } = useGLTF('spacemarine/bg/shoulders/scene.gltf');
  const [decalNormal, setDecalNormal] = React.useState(null);

  useEffect(() => {
    if (props.decalSet) {
      if (props.decalSet['mesh_2']) {
        var texLoader = new THREE.TextureLoader();
        texLoader.load(props.decalSet['mesh_2'].tex, (texture) =>
          setDecalNormal(texture)
        );
      }
    }
  }, [props.decalSet]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, -22.65, 0]} scale={20.85}>
        <group position={[0, 1.01, -0.06]} rotation={[0.25, 0, 0]}>
          <group position={[0, 0.15, 0]} rotation={[-0.13, 0, 0]}>
            <group position={[0, 0.14, 0]} rotation={[-0.16, 0, 0]}>
              <group position={[0, 0.17, 0]}>
                <group position={[0, 0.19, 0]} rotation={[0.62, 0, 0]}>
                  <group position={[0, 0.04, 0]} rotation={[-0.46, 0, 0]}>
                    <group position={[0, 0.09, 0]} rotation={[-0.13, 0, 0]} />
                  </group>
                </group>
                <group
                  position={[0.02, 0.14, 0.08]}
                  rotation={[-1.52, 0.01, -1.27]}
                >
                  <group
                    position={[-0.01, 0.32, 0]}
                    rotation={[2.67, 1.42, 2.54]}
                  >
                    <group
                      position={[0, 0.32, 0]}
                      rotation={[0.57, 0.22, -0.21]}
                    >
                      <group
                        position={[0, 0.34, 0]}
                        rotation={[-0.25, -0.08, 0.03]}
                      >
                        <group
                          position={[0, 0.02, 0.02]}
                          rotation={[-2.72, 1.46, 3.05]}
                        >
                          <group
                            position={[0, 0.1, 0]}
                            rotation={[0.18, -0.12, -0.02]}
                          >
                            <group
                              position={[0, 0.06, 0]}
                              rotation={[1.48, -0.2, 0.24]}
                            />
                          </group>
                          <group
                            position={[-0.04, -0.01, 0.03]}
                            rotation={[-1.19, 0.98, 1.6]}
                          >
                            <group
                              position={[0, 0.06, 0]}
                              rotation={[0.4, -0.17, 0.31]}
                            />
                          </group>
                        </group>
                        <group
                          position={[-0.01, 0.02, 0]}
                          rotation={[-2.25, 1.52, 2.41]}
                        >
                          <group
                            position={[0, 0.1, 0]}
                            rotation={[0.28, -0.06, 0]}
                          >
                            <group
                              position={[0, 0.07, 0]}
                              rotation={[1.49, -0.16, 0.22]}
                            />
                          </group>
                        </group>
                        <group
                          position={[0, 0.03, -0.01]}
                          rotation={[-0.11, 1.49, 0.08]}
                        >
                          <group
                            position={[0, 0.09, 0]}
                            rotation={[0.18, -0.01, 0.02]}
                          >
                            <group
                              position={[0, 0.07, 0]}
                              rotation={[1.6, -0.21, 0.02]}
                            />
                          </group>
                        </group>
                        <group
                          position={[0, 0.03, -0.03]}
                          rotation={[0.23, 1.45, -0.53]}
                        >
                          <group
                            position={[0, 0.1, 0]}
                            rotation={[0.41, -0.06, 0.36]}
                          >
                            <group
                              position={[0, 0.05, 0]}
                              rotation={[1.25, -0.36, -0.21]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                </group>
                <group
                  position={[-0.02, 0.14, 0.08]}
                  rotation={[-1.52, -0.01, 1.27]}
                >
                  <group
                    position={[0.01, 0.32, 0]}
                    rotation={[2.67, -1.42, -2.54]}
                  >
                    <group
                      position={[0, 0.32, 0]}
                      rotation={[0.57, -0.22, 0.21]}
                    >
                      <group
                        position={[0, 0.34, 0]}
                        rotation={[-0.25, 0.08, -0.03]}
                      >
                        <group
                          position={[0, 0.02, 0.02]}
                          rotation={[-2.79, -1.46, -3.13]}
                        >
                          <group
                            position={[0, 0.1, 0]}
                            rotation={[-0.02, 0.04, 0.06]}
                          >
                            <group
                              position={[0, 0.06, 0]}
                              rotation={[1.03, 0.2, -0.08]}
                            />
                          </group>
                          <group
                            position={[0.04, -0.01, 0.03]}
                            rotation={[-1.14, -1.09, -1.64]}
                          >
                            <group
                              position={[0, 0.06, 0]}
                              rotation={[0.52, -0.01, 0.11]}
                            />
                          </group>
                        </group>
                        <group
                          position={[0.01, 0.02, 0]}
                          rotation={[-2.36, -1.52, -2.51]}
                        >
                          <group
                            position={[0, 0.1, 0]}
                            rotation={[0.12, 0.03, 0.02]}
                          >
                            <group
                              position={[0, 0.07, 0]}
                              rotation={[1.14, 0.17, -0.15]}
                            />
                          </group>
                        </group>
                        <group
                          position={[0, 0.03, -0.01]}
                          rotation={[0, -1.49, 0.04]}
                        >
                          <group
                            position={[0, 0.09, 0]}
                            rotation={[0.03, 0.01, -0.02]}
                          >
                            <group
                              position={[0, 0.07, 0]}
                              rotation={[1.22, 0.2, -0.01]}
                            />
                          </group>
                        </group>
                        <group
                          position={[0, 0.03, -0.03]}
                          rotation={[0.3, -1.44, 0.6]}
                        >
                          <group
                            position={[0, 0.1, 0]}
                            rotation={[0.27, 0.09, -0.39]}
                          >
                            <group
                              position={[0, 0.05, 0]}
                              rotation={[1.19, 0.35, 0.21]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                    <Mesh
                      activeColor={props.activeColor.color}
                      paintMode={props.paintMode}
                      modelColors={props.modelColors}
                      modelColorsRef={props.modelColorsRef}
                      name="R_SHOULDER"
                      lightOne={props.lightOne}
                      geometry={nodes.R_SHOULDER.geometry}
                      position={[-0.52, 0.3, 0.04]}
                      rotation={[-1.39, -0.48, 2.99]}
                      scale={0.24}
                    />
                  </group>
                  <group
                    position={[0.01, 0.32, 0]}
                    rotation={[0.24, -0.3, 0.06]}
                  >
                    <Mesh
                      activeColor={props.activeColor.color}
                      paintMode={props.paintMode}
                      modelColors={props.modelColors}
                      modelColorsRef={props.modelColorsRef}
                      name="R_SHOULDER_PAD_BLANK"
                      lightOne={props.lightOne}
                      geometry={nodes.R_SHOULDER_PAD_BLANK.geometry}
                      position={[-0.1, -0.42, -0.42]}
                      rotation={[2.91, -0.33, 1.26]}
                      scale={[0.24, 0.24, 0.24]}
                    />
                    <Mesh
                      activeColor={props.activeColor.color}
                      paintMode={props.paintMode}
                      modelColors={props.modelColors}
                      modelColorsRef={props.modelColorsRef}
                      name="R_SHOULDER_PAD_BLANK001"
                      lightOne={props.lightOne}
                      geometry={nodes.R_SHOULDER_PAD_BLANK001.geometry}
                      position={[-0.1, -0.42, -0.42]}
                      rotation={[2.91, -0.33, 1.26]}
                      scale={[0.24, 0.24, 0.24]}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
          <group rotation={[-1.74, -0.4, -2.03]} />
          <group rotation={[-1.74, 0.4, 2.03]} />
          <group position={[0.19, 0.05, 0.03]} rotation={[2.8, 0, -0.27]}>
            <group position={[0, 0.43, 0]} rotation={[0.24, 0.05, 0.07]}>
              <group position={[0, 0.49, 0]} rotation={[-1.12, -0.17, -0.03]} />
            </group>
          </group>
          <group position={[-0.19, 0.05, 0.03]} rotation={[2.8, 0, 0.27]}>
            <group position={[0, 0.43, 0]} rotation={[0.24, -0.05, -0.07]}>
              <group position={[0, 0.49, 0]} rotation={[-1.12, 0.17, 0.03]} />
            </group>
          </group>
        </group>
        <Mesh
          activeColor={props.activeColor.color}
          paintMode={props.paintMode}
          modelColors={props.modelColors}
          modelColorsRef={props.modelColorsRef}
          name="R_SHOUDLER_MESH"
          lightOne={props.lightOne}
          geometry={nodes.R_SHOUDLER_MESH.geometry}
          position={[0, 1.09, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.24}
        />
      </group>
    </group>
  );
}

useGLTF.preload('spacemarine/bg/shoulders/scene.gltf');
