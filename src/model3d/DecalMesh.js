import React, { useEffect } from 'react';
import * as THREE from 'three';
import { ColorContext } from '../context';

export default function DecalMesh({
  geometry,
  position,
  rotation,
  scale,
  texture,
}) {
  const [material, setMaterial] = React.useState(null);

  useEffect(() => {
    var texLoader = new THREE.TextureLoader();
    const texLoaded = texLoader.load(texture);
    const materialNew = new THREE.MeshStandardMaterial({
      map: texLoaded ? texLoaded : null,
    });
    !material && setMaterial(materialNew);
  });

  return !material ? null : (
    <group
      position={position && position}
      rotation={rotation && rotation}
      scale={scale && scale}
    >
      <mesh geometry={geometry} material={material} />
    </group>
  );
}
