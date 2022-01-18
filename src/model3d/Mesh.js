import React, { useEffect } from 'react';
import * as THREE from 'three';
import { ColorContext } from '../context';
import { Html } from '@react-three/drei';
export default function Mesh({
  geometry,
  name,
  decalNormal,
  decals,
  position,
  rotation,
  scale,
  activeColor,
  texture,
  materialIn,
}) {
  const [material, setMaterial] = React.useState(null);
  const [meshColor, setMeshColor] = React.useState('#aaa');
  const [decalItem, setDecalItem] = React.useState(null);
  const [paintMode, setPaintMode] = React.useState(0);
  let savedColors = JSON.parse(localStorage.getItem('modelColorSave'));
  const metals = [
    '#9e573c',
    '#f5b13d',
    '#848484',
    '#e6b351',
    '#ced2d4',
    '#a9afb4',
    '#6a7071',
    '#c89e5b',
    '#b55513',
    '#c17a3c',
    '#a97753',
    '#e9b860',
    '#8b431e',
    '#a28167',
    '#98542c',
    '#b49b95',
    '#00708a',
  ];
  useEffect(() => {
    let savedColors = localStorage.getItem('modelColorSave');

    if (savedColors !== 'null' && savedColors !== null) {
      savedColors = JSON.parse(savedColors);
      if (savedColors[name] && savedColors[name].color !== meshColor) {
        setMeshColor(savedColors[name].color);
      }
    }

    if (texture && !material) {
      var texLoader = new THREE.TextureLoader();
      const texLoaded = texLoader.load(texture);
      const materialNew = new THREE.MeshStandardMaterial({
        ...materialIn,
        transparent: true,
        map: texLoaded ? texLoaded : null,
      });
      setMaterial(materialNew);
    }
    if (!material && !texture) {
      const materialNew = new THREE.MeshStandardMaterial({
        ...materialIn,
        transparent: true,
      });
      setMaterial(materialNew);
    }

    if (!decalItem) {
      var texLoader = new THREE.TextureLoader();
      const texLoaded = texLoader.load(decals);
      const materialNew = new THREE.MeshStandardMaterial({
        ...materialIn,
        transparent: true,
        map: texLoaded ? texLoaded : null,
      });
      setDecalItem(materialNew);
    }
  }, [decalNormal, decals, meshColor]);

  return !material ? null : (
    <group
      position={position && position}
      rotation={rotation && rotation}
      scale={scale && scale}
    >
      <mesh
        onClick={(e) => {}}
        onPointerDown={(e) => paintMode !== 1 && setPaintMode(1)}
        onPointerUp={(e) => {
          if (paintMode === 1) {
            e.stopPropagation();
            let savedColors = localStorage.getItem('modelColorSave');
            if (savedColors === 'null' || savedColors === null) {
              savedColors = {};
            } else {
              savedColors = JSON.parse(savedColors);
            }

            if (activeColor) {
              savedColors[name] = {
                color: activeColor.color,
                name: activeColor.name,
              };
              localStorage.setItem(
                'modelColorSave',
                JSON.stringify(savedColors)
              );

              setMeshColor(activeColor.color);
            }
          }
        }}
        onPointerMove={(e) => paintMode !== 0 && setPaintMode(0)}
        geometry={geometry}
        material={material}
        material-color={meshColor}
        castShadow={true}
        receiveShadow={true}
        material-metalness={metals.indexOf(meshColor) > -1 ? 0.7 : 0}
        material-roughness={metals.indexOf(meshColor) > -1 ? 0.5 : 1}
      />
      <mesh geometry={geometry} material={decalItem} />
    </group>
  );
}
