import React from 'react';
import Test from './Test';

export default function ThreeJS(props) {
  return (
    <group position={[0, 0, 0]} scale={[0.7, 0.7, 0.7]}>
      <Test props={props} />
    </group>
  );
}
