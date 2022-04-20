import React, { useEffect } from 'react';
import * as THREE from 'three';

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
  shading,
  paint,
  setTargetA,
  buttons,
}) {
  const [material, setMaterial] = React.useState(null);
  const [meshColor, setMeshColor] = React.useState('#fff');
  const [paintMode, setPaintMode] = React.useState(0);

  useEffect(() => {
    if (paint !== null) {
      const paintParsed = JSON.parse(paint);
      paintParsed[name] && setMeshColor(paintParsed[name].color);
    }

    if (!material && !texture) {
      const materialNew = new THREE.MeshStandardMaterial({
        ...materialIn,
        transparent: true,
      });
      setMaterial(materialNew);
    }
  }, [
    decalNormal,
    decals,
    meshColor,
    material,
    materialIn,
    paint,
    name,
    texture,
  ]);
  return !material ? null : (
    <group
      position={position && position}
      rotation={rotation && rotation}
      scale={scale && scale}
    >
      <mesh
        onClick={(e) => {
          /*
          if (name === 'ScreenTwo') {
            window.open(
              'https://www.warhammer-community.com/2021/12/22/who-is-the-exodite-check-out-the-trailer-for-the-thrilling-new-warhammer-tv-series/',
              '_blank'
            );
          }
          if (name === 'ScreenOne') {
            window.open('https://warhammerplus.com/', '_blank');
          }*/
        }}
        onPointerDown={(e) => paintMode !== 1 && setPaintMode(1)}
        onPointerUp={(e) => {
          if (paintMode === 1) {
            if (buttons.indexOf(name) > -1) {
              setTargetA({
                position: [-30, 0, 100],
                target: [position[0], position[1] - 7, position[2]],
              });
            } else {
              setTargetA({
                position: [0, 0, 400],
                target: [0, 0, 0],
              });
            }
            if (activeColor.type !== 'Shade') {
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
          }
        }}
        onPointerMove={(e) => paintMode !== 0 && !shading && setPaintMode(0)}
        geometry={geometry}
        material={material}
        material-color={meshColor}
        material-metalness={0}
        material-roughness={0}
      />
    </group>
  );
}
