import React, { useEffect } from 'react';
import * as THREE from 'three';
export default function Mesh({
  geometry,
  activeColor,
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
}) {
  const [material, setMaterial] = React.useState(null);
  const [meshColor, setMeshColor] = React.useState('#aaa');
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
    const modelIsStored = modelColors[name];
    const modelHasMaterial = material;

    if (!modelIsStored) {
      const materialNew = new THREE.MeshStandardMaterial({
        color: activeColor,
        transparent: true,
      });
      const modelColorCopy = { ...modelColorsRef.current };
      modelColorCopy[name] = {
        color: activeColor,
      };
      modelColorsRef.current = modelColorCopy;
      // materialNew.color = activeColor;
      setMaterial(materialNew);
    }

    if (modelIsStored && !modelHasMaterial) {
      const materialNew = new THREE.MeshStandardMaterial({
        color: modelColors[name].color,
        emissiveMap: modelColorsRef.current[name].decals,
        emissive: modelColorsRef.current[name].intCol,
        map: modelColorsRef.current[name].decalNormal,
        emissiveIntensity: modelColorsRef.current[name].int,
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
  }, [activeColor, modelColors, modelColorsRef, decalNormal, decals]);
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
            const modelColorCopy = modelColorsRef.current;
            modelColorCopy[name].color = activeColor;
            modelColorsRef.current = modelColorCopy;
            paintMode && setMeshColor(activeColor);
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
