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
      {attachedPart['6161d1c72eb908b0ef54364c'] && (
        <SmLeftShoulder
          props={{
            ...props.props,
            gltfIn: attachedPart['6161d1c72eb908b0ef54364c'].gltf,
          }}
        />
      )}
      {attachedPart['6161f7122eb908b0ef5436cf'] && (
        <SmRightShoulder
          props={{
            ...props.props,
            gltfIn: attachedPart['6161f7122eb908b0ef5436cf'].gltf,
          }}
        />
      )}
      {attachedPart['6161faf3d2f93ecb2ff9727a'] && (
        <SmLeftKnee
          props={{
            ...props.props,
            gltfIn: attachedPart['6161faf3d2f93ecb2ff9727a'].gltf,
          }}
        />
      )}
      {attachedPart['6161fc4ed2f93ecb2ff97296'] && (
        <SmBackpack
          props={{
            ...props.props,
            gltfIn: attachedPart['6161fc4ed2f93ecb2ff97296'].gltf,
          }}
        />
      )}
      {attachedPart['6162097260eb15d18655ebb0'] && (
        <group scale={[0.06, 0.06, 0.06]} position={[0, 2.24, 0.05]}>
          <SmHelmetAdvanced
            props={{
              ...props.props,
              gltfIn: attachedPart['6162097260eb15d18655ebb0'].gltf,
            }}
          />
        </group>
      )}
      {/*
       
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
        */}
    </group>
  );
}
