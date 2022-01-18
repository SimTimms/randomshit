import React from 'react';
import { Row, Column, WidgetTitle } from '../components';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Title from './Title';
import Icon from './Icon';
import CircleButton from '../CircleButton';
import ultra from '../../assets/ultra.png';

export default function Markings({ setMarkings, setPanels }) {
  return (
    <Column j="center" h="100%" w={300} mh={300} bg="rgba(0,0,0,0.5)">
      <Row>
        <CircleButton
          onClickEvent={() => {
            setPanels(null);
            setMarkings(null);
          }}
          icon="close"
        />
        <CircleButton
          onClickEvent={() => {
            setPanels(null);
            setMarkings('/textures/transfer.png');
          }}
          bg={`url(${ultra})`}
        />
      </Row>
    </Column>
  );
}
