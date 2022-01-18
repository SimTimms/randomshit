import React, { useEffect } from 'react';
import { Row, Column, WidgetTitle, DividerMini } from './components';
import { Icon } from '@material-ui/core';

export default function Decals({ setDecals }) {
  return (
    <Column w={200} a="flex-start" bb="1px solid #444">
      <WidgetTitle str="Detailing" />
      <DividerMini />
      <Row wrap="wrap">
        <div
          style={{
            border: '1px solid #555',
            height: 40,
            width: 40,
            margin: 3,
            cursor: 'pointer',
          }}
          onClick={() => {
            setDecals({
              TORSO_SHIELD_A004: {
                texNormal: '/spacemarine/bg/torsoShield.png',
                int: 1,
              },
              SM_rightKnee01_mesh_knees_0: {
                texNormal: '/spacemarine/sm_left_knee/textures/decal.jpg',
                int: 1,
              },
              SM_leftEye_mesh1_eyes_0: {
                tex: '/spacemarine/sm_helmet/textures/helmet_1.jpg',
                int: 0.1,
              },
              SM_rightEye_mesh1_eyes_0: {
                tex: '/spacemarine/sm_helmet/textures/helmet_1.jpg',
                int: 0.1,
              },
              SM_frontHelmet01plate_mesh_mouth_0: {
                tex: '/spacemarine/sm_helmet/textures/helmet_1.jpg',
              },
              SM_beltBuckle_mesh_bodyparts_0: {
                tex: '/spacemarine/sm_no_shoulder/textures/decals.jpg',
                int: 1,
                intCol: '#fff',
              },
              SM_leftShoulderShell_mesh23_Shoulder_shell_0: {
                tex: '/spacemarine/sm_left_shoulder/textures/shoulder_1.jpg',
              },
              SM_leftShoulder_shell_Shoulder_shell_0: {
                tex: '/spacemarine/sm_right_shoulder/textures/shoulder_1.jpg',
              },
            });
          }}
        ></div>
        <div
          style={{
            border: '1px solid #555',
            height: 40,
            width: 40,
            margin: 3,
            cursor: 'pointer',
          }}
          onClick={() => {
            setDecals({
              SM_rightKnee01_mesh_knees_0: {
                texNormal:
                  '/spacemarine/sm_left_knee/textures/imperial_fist.jpg',
              },
              SM_leftEye_mesh1_eyes_0: {
                tex: '/spacemarine/sm_helmet/textures/helmet_1.jpg',
                int: 2,
              },
              SM_rightEye_mesh1_eyes_0: {
                tex: '/spacemarine/sm_helmet/textures/helmet_1.jpg',
                int: 2,
              },
              SM_frontHelmet01plate_mesh_mouth_0: {
                tex: '/spacemarine/sm_helmet/textures/helmet_1.jpg',
              },
              SM_beltBuckle_mesh_bodyparts_0: {
                tex: '/spacemarine/sm_no_shoulder/textures/decals.jpg',
                int: 1,
                intCol: '#fff',
              },
              SM_leftShoulderShell_mesh23_Shoulder_shell_0: {
                tex: '/spacemarine/sm_left_shoulder/textures/shoulder_1.jpg',
              },
              SM_leftShoulder_shell_Shoulder_shell_0: {
                tex: '/spacemarine/sm_right_shoulder/textures/imperial_fist.jpg',
                int: 3,
                intCol: '#fff',
              },
              L_SHOULDER_PAD_BLANK001: {
                tex: '/spacemarine/sm_right_shoulder/textures/imperial_fist.jpg',
              },
            });
          }}
        ></div>
        <div
          style={{
            border: '1px solid #555',
            height: 40,
            width: 40,
            margin: 3,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ccc',
            cursor: 'pointer',
          }}
          onClick={() => {
            setDecals(null);
          }}
        >
          <Icon>delete</Icon>
        </div>
      </Row>
    </Column>
  );
}
