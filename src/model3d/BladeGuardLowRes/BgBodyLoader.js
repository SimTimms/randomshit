import React from 'react';

import BG from './BGVLow';

export default function BgBodyLoader({ props }) {
  return (
    <group scale={[0.05, 0.05, 0.05]} position={[0, 0.9, 0]}>
      <BG props={props} />
    </group>
  );
}
