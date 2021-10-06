import React from 'react';

//import Scene from './Scene';
import Helmet from './Helmet';
import BackPack from './BackPack';
import Chest from './Chest';
import Shoulder from './Shoulder';
import ShoulderLeft from './ShoulderLeft';
import TorsoShield from './TorsoShield';
import BG from './BG';

export default function BgBodyLoader({ props }) {
  return (
    <group scale={[0.05, 0.05, 0.05]} position={[0, 0.9, 0]}>
      <BG props={props} />
      {/*<Chest props={props} />
      <Helmet props={props} />
      <Shoulder props={props} />
      <ShoulderLeft props={props} />
  <TorsoShield props={props} />*/}
    </group>
  );
}
