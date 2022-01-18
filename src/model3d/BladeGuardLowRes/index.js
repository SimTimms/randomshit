import React from 'react';
import BgBodyLoader from './BgBodyLoader';
import BaseStandard from '../Base';
import FoliageRocks from '../FoliageRocks';
import CrackedEarth from '../CrackedEarth';
export default function ThreeJS({ model, attachedPart, parts, ...props }) {
  if (props.props.js !== 'Bladeguard Low Res') {
    return null;
  }
  return (
    <group position={[0, 0.3, 0]} scale={[1, 1, 1]}>
      <group position={[0, 0.3, 0]} scale={[1, 1, 1]}>
        <BgBodyLoader props={props.props} />
      </group>
      {attachedPart['61709641233e7f8b634eed40'] && (
        <group position={[0, -0.22, 0]} scale={[0.23, 0.23, 0.23]}>
          <BaseStandard
            props={{
              ...props.props,
              gltfIn: attachedPart['61709641233e7f8b634eed40'].gltf,
            }}
          />
        </group>
      )}
      {attachedPart['6172eb4001bc10c1ab4a96ad'] && (
        <group
          position={[0, -0.22, 0]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={[0.23, 0.23, 0.23]}
        >
          <FoliageRocks
            props={{
              ...props.props,
              gltfIn: attachedPart['6172eb4001bc10c1ab4a96ad'].gltf,
            }}
          />
        </group>
      )}{' '}
      {attachedPart['6172f6e801bc10c1ab4a96df'] && (
        <group
          position={[0, -0.22, 0]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={[0.23, 0.23, 0.23]}
        >
          <CrackedEarth
            props={{
              ...props.props,
              gltfIn: attachedPart['6172f6e801bc10c1ab4a96df'].gltf,
            }}
          />
        </group>
      )}
    </group>
  );
}
