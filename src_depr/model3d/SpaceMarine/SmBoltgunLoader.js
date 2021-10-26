import React from 'react';
import SmBoltgun from './SmBoltgun';
import SmBolter from './SmBolter';

export default function SmBoltgunLoader({ props }) {
  return (
    <group>
      {props.part.primaryWeapon === 'boltgun' ? (
        <group
          position={[0.2, 1.6, 0.5]}
          rotation={[0.4, 0, 0.1]}
          scale={[1.5, 1.5, 1.5]}
        >
          <SmBoltgun props={props} />
        </group>
      ) : (
        <group
          position={[0.2, 1.4, 0.4]}
          rotation={[0.15, 0, 0]}
          scale={[0.08, 0.08, 0.08]}
        >
          <SmBolter props={props} />
        </group>
      )}
    </group>
  );
}
