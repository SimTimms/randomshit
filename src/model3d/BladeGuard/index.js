import React from 'react';
import BgBodyLoader from './BgBodyLoader';
export default function ThreeJS({ model, ...props }) {
  if (props.props.js !== 'Bladeguard') {
    return null;
  }
  return (
    <group position={[0, 0.3, 0]} scale={[1, 1, 1]}>
      <BgBodyLoader props={props.props} />
    </group>
  );
}
