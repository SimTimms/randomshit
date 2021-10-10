import React from 'react';
import SmBodyLoader from './SmBodyLoader';
import SmLeftShoulder from './SmLeftShoulder';
import SmRightShoulder from './SmRightShoulder';
import SmLeftKnee from './SmLeftKnee';
import SmBackpack from './SmBackpack';
import SmHelmet from './SmHelmet';
import SmHelmetAdvanced from './SmHelmetAdvanced';
import SmBolter from './SmBolter';

export default function SpaceMarine({ attachedPart, parts, ...props }) {
  if (props.props.js !== 'SpaceMarine') {
    return null;
  }

  return (
    <group position={[0, 0, 0]} scale={[0.7, 0.7, 0.7]}>
      <SmBodyLoader props={props.props} />
      {attachedPart.map((item) => {
        if (item.js === 'SMLeftShoulder') {
          return (
            <SmLeftShoulder props={{ ...props.props, gltfIn: item.gltf }} />
          );
        }
        if (item.js === 'SMRightShoulder') {
          return (
            <SmRightShoulder props={{ ...props.props, gltfIn: item.gltf }} />
          );
        }
        if (item.js === 'SMLeftknee') {
          return <SmLeftKnee props={{ ...props.props, gltfIn: item.gltf }} />;
        }
        if (item.js === 'SMBackpack') {
          return <SmBackpack props={{ ...props.props, gltfIn: item.gltf }} />;
        }
        if (item.js === 'SMHelmet') {
          return <SmHelmet props={{ ...props.props, gltfIn: item.gltf }} />;
        }
        if (item.js === 'SMBolter') {
          return <SmBolter props={{ ...props.props, gltfIn: item.gltf }} />;
        }
        if (item.js === 'SMHelmetAdvanced') {
          return (
            <group scale={[0.06, 0.06, 0.06]} position={[0, 2.24, 0.05]}>
              <SmHelmetAdvanced props={{ ...props.props, gltfIn: item.gltf }} />
            </group>
          );
        }
      })}
    </group>
  );
}
