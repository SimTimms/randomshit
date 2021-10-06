import React from 'react';
import ModelButton from './Button';
import { Row } from '../components';
import modelSM from '../assets/model_sm.png';
import modelDread from '../assets/model_dread.png';
import modelScout from '../assets/model_scout.png';

export default function ModelBar({ setModel }) {
  return (
    <Row w={320} j="space-between">
      <ModelButton
        title="Space Marine"
        strValue="spaceMarine"
        setModel={setModel}
        img={modelSM}
      />
      <ModelButton
        title="Scout"
        strValue="airScout"
        setModel={setModel}
        img={modelScout}
      />
      <ModelButton
        title="Dreadnought"
        strValue="dreadnought"
        setModel={setModel}
        img={modelDread}
      />
    </Row>
  );
}
