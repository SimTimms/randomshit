import React, { useEffect } from 'react';
import * as THREE from 'three';
import { ColorContext } from '../context';

export default function Mesh({
  geometry,
  paintMode,
  modelColorsRef,
  name,
  modelColors,
  spray,
  decalNormal,
  decals,
  lightOne,
  position,
  rotation,
  scale,
  activeColor,
}) {
  const [material, setMaterial] = React.useState(null);
  const [meshColor, setMeshColor] = React.useState('#aaa');
  const [importedColors, setImportedColors] = React.useState(null);
  const [decalItem, setDecalItem] = React.useState(null);
  const [decalNormalItem, setDecalNormalItem] = React.useState(null);

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

    if (!material) {
      const materialNew = new THREE.MeshStandardMaterial({
        transparent: true,
      });
      setMaterial(materialNew);
    }

    if (decals !== null && decals !== undefined) {
      var texLoader = new THREE.TextureLoader();
      if (decals[name].tex) {
        texLoader.load(decals[name].tex, function (texture) {
          setDecalItem(texture);
        });
      } else if (decals[name].texNormal) {
        texLoader.load(decals[name].texNormal, function (texture) {
          setDecalNormalItem(texture);
        });
      }
    }
  }, [modelColorsRef, decalNormal, decals, meshColor]);

  return !material ? null : (
    <group
      position={position && position}
      rotation={rotation && rotation}
      scale={scale && scale}
    >
      <mesh
        onClick={(e) => {
          if (paintMode) {
            e.stopPropagation();

            let savedColors = localStorage.getItem('modelColorSave');
            if (savedColors === 'null' || savedColors === null) {
              savedColors = {};
            } else {
              savedColors = JSON.parse(savedColors);
            }

            savedColors[name] = { color: activeColor.color };
            localStorage.setItem('modelColorSave', JSON.stringify(savedColors));

            paintMode && setMeshColor(activeColor.color);
          }
        }}
        castShadow
        receiveShadow
        geometry={geometry}
        material={material}
        material-color={meshColor}
        material-map={decalNormalItem ? decalNormalItem : null}
        material-emissiveIntensity={
          decalItem ? (decals[name].int ? decals[name].int : lightOne) : null
        }
        material-emissiveMap={decalItem ? decalItem : null}
        material-emissive={decalItem ? '#fff' : null}
        material-metalness={metals.indexOf(meshColor) > -1 ? 0.7 : 0}
        material-roughness={metals.indexOf(meshColor) > -1 ? 0.5 : 1}
        transparent={true}
      />
    </group>
  );
}
