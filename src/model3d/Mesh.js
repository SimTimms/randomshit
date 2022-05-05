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
  clickEvent,
  fullColor,
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
    if (fullColor.name !== '' && name.indexOf('noshade') === -1) {
      setMeshColor(fullColor.color);
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
    fullColor,
  ]);
  return !material ? null : (
    <group
      position={position && position}
      rotation={rotation && rotation}
      scale={scale && scale}
    >
      <mesh
        onPointerDown={(e) => paintMode !== 1 && setPaintMode(1)}
        onPointerUp={(e) => {
          e.stopPropagation();
          clickEvent(name, meshColor);
          setTargetA({
            target: `${position[0]},${position[1] - 7},${position[2]}`,
          });
          if (paintMode === 1) {
            if (activeColor.type !== 'Shade') {
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
        material-roughness={0.8}
      />
    </group>
  );
}
