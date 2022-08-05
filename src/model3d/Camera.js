import React from 'react';
import { useCallback, useRef, useEffect, memo } from 'react';
import TWEEN from '@tweenjs/tween.js';
import { useThree, extend, useFrame } from '@react-three/fiber';
import { Vector3 } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import animateCamera from './anim';

extend({ OrbitControls });

function CameraControlsTween({
  target,
  setTargetA,
  rotate,
  enablePan,
  enableZoom,
  backforth,
}) {
  const controls = useRef();
  const {
    camera,
    gl: { domElement },
  } = useThree();

  const animateToLookAt = useCallback(
    (destination, factor = 1.0) => {
      const { camera: position, target, fov } = destination;

      if (position && target && controls && fov) {
        const [cx, cy, cz] = position;
        const [tx, ty, tz] = target;
        animateCamera(
          camera,
          controls.current,
          {
            position: {
              x: cx,
              y: cy,
              z: cz,
            },
            target: {
              x: tx,
              y: ty,
              z: tz,
            },
            duration: 5000,
          },
          () => {
            console.log('here');
          }
        );
      }
    },
    [camera]
  );

  useEffect(() => {
    animateToLookAt({
      target: target.target,
      camera: target.position,
      fov: 30,
    });
  }, [animateToLookAt, target]);

  useFrame(({ clock, camera }) => {
    TWEEN.update();
    controls.current.update();
  });

  return (
    <>
      <orbitControls
        minPan={new Vector3(0, 0, 0)}
        maxPan={new Vector3(0, 0, 0)}
        enableZoom={enableZoom}
        enablePan={enablePan}
        enableDamping={true}
        autoRotate={rotate}
        autoRotateSpeed={rotate ? rotate : 5}
        ref={controls}
        args={[camera, domElement]}
      />
    </>
  );
}

export default memo(CameraControlsTween);
