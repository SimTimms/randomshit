import React from 'react';
import { Row, Column, WidgetTitle } from '../components';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Title from './Title';
import Icon from './Icon';
import CircleButton from '../CircleButton';
import ultra from '../../assets/ultra.png';
import ba from '../../assets/ba.png';
import ifist from '../../assets/if.png';

export default function Markings({ setMarkings, markings, setPanels }) {
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
            setMarkings({
              ...markings,
              SM_leftShoulder_shell_Shoulder_shell_0: '/textures/transfer.png',
              SM_leftShoulderShell_mesh23_Shoulder_shell_0:
                '/textures/transfer.png',
            });
          }}
          bg={`url(${ultra})`}
        />
        <CircleButton
          onClickEvent={() => {
            setPanels(null);
            setMarkings({
              ...markings,
              SM_rightKnee01_mesh_knees_0: '/textures/knees_ultra.png',
            });
          }}
          bg={`url(${ultra})`}
        />
        <CircleButton
          onClickEvent={() => {
            setPanels(null);
            setMarkings({
              ...markings,
              SM_rightKnee01_mesh_knees_0: '/textures/knees_cross.png',
            });
          }}
          bg={`url(${ultra})`}
        />
        <CircleButton
          onClickEvent={() => {
            setPanels(null);
            setMarkings({
              ...markings,
              SM_rightKnee01_mesh_knees_0: '/textures/knees_stripe.png',
            });
          }}
          bg={`url(${ultra})`}
        />
        <CircleButton
          onClickEvent={() => {
            setPanels(null);
            setMarkings({
              ...markings,
              Legs_legs_0: '/textures/lower_leg_script.png',
            });
          }}
          bg={`url(${ultra})`}
        />
        <CircleButton
          onClickEvent={() => {
            setPanels(null);
            setMarkings({
              ...markings,
              Legs_legs_0: '/textures/lower_leg_mud.png',
            });
          }}
          bg={`url(${ultra})`}
        />
        <CircleButton
          onClickEvent={() => {
            setPanels(null);
            setMarkings({
              ...markings,
              SM_rightKnee01_mesh_knees_0: '/textures/knees_battle.png',
            });
          }}
          bg={`url(${ultra})`}
        />
        <CircleButton
          onClickEvent={() => {
            setPanels(null);
            setMarkings({
              ...markings,
              SM_leftShoulder_shell_Shoulder_shell_0:
                '/textures/transferba.png',
              SM_leftShoulderShell_mesh23_Shoulder_shell_0:
                '/textures/transferba.png',
            });
          }}
          bg={`url(${ba})`}
        />
        <CircleButton
          onClickEvent={() => {
            setPanels(null);
            setMarkings({
              ...markings,
              SM_leftShoulder_shell_Shoulder_shell_0:
                '/textures/transferif.png',
              SM_leftShoulderShell_mesh23_Shoulder_shell_0:
                '/textures/transferif.png',
            });
          }}
          bg={`url(${ifist})`}
        />
      </Row>
    </Column>
  );
}
