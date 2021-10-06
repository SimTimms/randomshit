import React from 'react';
import BgBodyLoader from './BgBodyLoader';
import SmBase from './SmBase';
export default function ThreeJS({ model, ...props }) {
  return (
    model === 'bladeguard' && (
      <group position={[0, 0.3, 0]} scale={[1, 1, 1]}>
        <BgBodyLoader props={props} />
        <group position={[0, -0.25, 0]} scale={[1, 1, 1]}>
          <SmBase props={props} />
        </group>
      </group>
    )
  );
}
