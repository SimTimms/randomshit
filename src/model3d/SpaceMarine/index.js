import React from 'react';
import SmBodyLoader from './SmBodyLoader';
import SmBoltgunLoader from './SmBoltgunLoader';
import SmBase from './SmBase';
export default function ThreeJS({ model, ...props }) {
  return (
    model === 'spacemarine' && (
      <group position={[0, 0, 0]} scale={[0.7, 0.7, 0.7]}>
        {/* <SmBodyLoader props={props} />*/}
      </group>
    )
  );
}
