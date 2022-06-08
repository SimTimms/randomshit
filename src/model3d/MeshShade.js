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
  armourColor,
  video,
  shading,
}) {
  const [material, setMaterial] = React.useState(null);
  const [shadeMaterial, setShadeMaterial] = React.useState(null);
  const [meshColor, setMeshColor] = React.useState('#484645');
  const [decalItem, setDecalItem] = React.useState(null);
  const [paintMode, setPaintMode] = React.useState(0);
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
    '#b8c4cc',
    '#b6aca5',
    '#625f5c',
    '#946347',
    '#d0875b',
    '#695844',
  ];

  useEffect(() => {
    let savedColors = localStorage.getItem('modelColorShadeSave');
    if (
      armourColor === null &&
      savedColors !== 'null' &&
      savedColors !== null
    ) {
      savedColors = JSON.parse(savedColors);
      if (savedColors[name] && savedColors[name].color !== meshColor) {
        setMeshColor(savedColors[name].color);
      }
    } else if (armourColor !== null) {
      setMeshColor(armourColor);
    }

    if (!shadeMaterial) {
      var texLoader = new THREE.TextureLoader();
      try {
        let nameReplace = materialIn.map.image.src.replace(
          `https://random-shit-store.s3.amazonaws.com/614b73c98a97c40c65957b89/Primaris/`,
          ''
        );
        nameReplace = nameReplace.replace('.png', '');

        const texLoaded = texLoader.load(
          `https://random-shit-store.s3.eu-west-2.amazonaws.com/614b73c98a97c40c65957b89/Primaris/${nameReplace}%20Shade.png`
        );

        const materialNew = new THREE.MeshStandardMaterial({
          ...materialIn,
          map: texLoaded ? texLoaded : null,
          transparent: true,
        });

        setShadeMaterial(materialNew);
      } catch (error) {
        console.log(error);
      }
    }
  }, [decalNormal, decals, meshColor]);
  return !shadeMaterial ? null : (
    <group
      position={position && position}
      rotation={rotation && rotation}
      scale={scale && scale}
    >
      <mesh
        onPointerDown={(e) => paintMode !== 1 && setPaintMode(1)}
        onPointerUp={(e) => {
          if (paintMode === 1 && activeColor.type === 'Shade') {
            e.stopPropagation();
            let savedColors = localStorage.getItem('modelColorShadeSave');
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
                'modelColorShadeSave',
                JSON.stringify(savedColors)
              );
              setMeshColor(activeColor.color);
            }
          }
        }}
        onPointerMove={(e) => paintMode !== 0 && setPaintMode(0)}
        geometry={geometry}
        material={shadeMaterial}
        material-color={meshColor}
        material-metalness={metals.indexOf(meshColor) > -1 ? 0.7 : 0}
        material-roughness={metals.indexOf(meshColor) > -1 ? 0.5 : 1}
      />
    </group>
  );
}
