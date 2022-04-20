import React from 'react';
import { Row, Column } from '../components';

import CircleButton from '../CircleButton';

export default function Lighting({
  setLightOne,
  lightOne,
  setLightTwo,
  lightTwo,
  setLightThree,
  lightThree,
  setLightFour,
  lightFour,
  setLightFive,
  lightFive,
  setLightSix,
  lightSix,
  setLightSeven,
  lightSeven,
}) {
  const lightIncrease = 30;
  return (
    <Column j="space-between" h="100%" w={300} mh={300}>
      <CircleButton
        onClickEvent={() =>
          setLightFour(
            lightFour > lightIncrease * 2 - 1 ? 0 : lightFour + lightIncrease
          )
        }
        icon={
          lightFour === 0
            ? 'lightbulb'
            : lightFour < lightIncrease * 2 - 1
            ? 'brightness_6'
            : 'brightness_7'
        }
        bg={
          lightFour === 0
            ? '#222'
            : `rgba(255,255,255,${(lightFour + 30) / 100}`
        }
        color={lightFour === 0 ? '#fff' : '#222'}
        border={lightFour > 0 ? '1px solid #fff' : ''}
      />
      <CircleButton
        onClickEvent={() =>
          setLightSeven(
            lightSeven > lightIncrease * 2 - 1 ? 0 : lightSeven + lightIncrease
          )
        }
        icon={
          lightSeven === 0
            ? 'lightbulb'
            : lightSeven < lightIncrease * 2 - 1
            ? 'brightness_6'
            : 'brightness_7'
        }
        bg={
          lightSeven === 0
            ? '#222'
            : `rgba(255,255,255,${(lightSeven + 30) / 100}`
        }
        color={lightSeven === 0 ? '#fff' : '#222'}
        border={lightSeven > 0 ? '1px solid #fff' : ''}
      />
      <Row w="100%" j="space-between">
        <CircleButton
          onClickEvent={() =>
            setLightThree(
              lightThree > lightIncrease * 2 - 1
                ? 0
                : lightThree + lightIncrease
            )
          }
          icon={
            lightThree === 0
              ? 'lightbulb'
              : lightThree < lightIncrease * 2 - 1
              ? 'brightness_6'
              : 'brightness_7'
          }
          bg={
            lightThree === 0
              ? '#222'
              : `rgba(255,255,255,${(lightThree + 30) / 100}`
          }
          color={lightThree === 0 ? '#fff' : '#222'}
          border={lightThree > 0 ? '1px solid #fff' : ''}
        />
        <CircleButton
          onClickEvent={() =>
            setLightOne(
              lightOne > lightIncrease * 2 - 1 ? 0 : lightOne + lightIncrease
            )
          }
          icon={
            lightOne === 0
              ? 'lightbulb'
              : lightOne < lightIncrease * 2 - 1
              ? 'brightness_6'
              : 'brightness_7'
          }
          bg={
            lightOne === 0
              ? '#222'
              : `rgba(255,255,255,${(lightOne + 30) / 100}`
          }
          color={lightOne === 0 ? '#fff' : '#222'}
          border={lightOne > 0 ? '1px solid #fff' : ''}
        />
        <CircleButton
          onClickEvent={() =>
            setLightTwo(
              lightTwo > lightIncrease * 2 - 1 ? 0 : lightTwo + lightIncrease
            )
          }
          icon={
            lightTwo === 0
              ? 'lightbulb'
              : lightTwo < lightIncrease * 2 - 1
              ? 'brightness_6'
              : 'brightness_7'
          }
          bg={
            lightTwo === 0
              ? '#222'
              : `rgba(255,255,255,${(lightTwo + 30) / 100}`
          }
          color={lightTwo === 0 ? '#fff' : '#222'}
          border={lightTwo > 0 ? '1px solid #fff' : ''}
        />
      </Row>
      <CircleButton
        onClickEvent={() =>
          setLightSix(
            lightSix > lightIncrease * 2 - 1 ? 0 : lightSix + lightIncrease
          )
        }
        icon={
          lightSix === 0
            ? 'lightbulb'
            : lightSix < lightIncrease * 2 - 1
            ? 'brightness_6'
            : 'brightness_7'
        }
        bg={
          lightSix === 0 ? '#222' : `rgba(255,255,255,${(lightSix + 30) / 100}`
        }
        color={lightSix === 0 ? '#fff' : '#222'}
        border={lightSix > 0 ? '1px solid #fff' : ''}
      />
      <CircleButton
        onClickEvent={() =>
          setLightFive(
            lightFive > lightIncrease * 2 - 1 ? 0 : lightFive + lightIncrease
          )
        }
        icon={
          lightFive === 0
            ? 'lightbulb'
            : lightFive < lightIncrease * 2 - 1
            ? 'brightness_6'
            : 'brightness_7'
        }
        bg={
          lightFive === 0
            ? '#222'
            : `rgba(255,255,255,${(lightFive + 30) / 100}`
        }
        color={lightFive === 0 ? '#fff' : '#222'}
        border={lightFive > 0 ? '1px solid #fff' : ''}
      />
    </Column>
  );
}
