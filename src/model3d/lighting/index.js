import React from 'react';
import { Row, Column, WidgetTitle } from '../components';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Title from './Title';
import Icon from './Icon';

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
}) {
  return (
    <Column w={200} a="flex-start" bb="1px solid #444">
      <WidgetTitle str="Lighting" />
      <Column p={10} pt={0}>
        <Column>
          <Row>
            <Icon icon="light_mode" />
            <Slider
              onChange={(value) => setLightOne(value)}
              startPoint={0}
              min={0}
              max={100}
              value={lightOne}
            />
            <Title str="Ambient" />
          </Row>
          <Row>
            <Icon icon="light_mode" />
            <Slider
              onChange={(value) => setLightTwo(value)}
              startPoint={0}
              min={0}
              max={100}
              value={lightTwo}
            />
            <Title str="Spot R" />
          </Row>
          <Row>
            <Icon icon="light_mode" />
            <Slider
              onChange={(value) => setLightThree(value)}
              startPoint={0}
              min={0}
              max={100}
              value={lightThree}
            />
            <Title str="Spot L" />
          </Row>
          <Row>
            <Icon icon="light_mode" />
            <Slider
              onChange={(value) => setLightFour(value)}
              startPoint={0}
              min={0}
              max={100}
              value={lightFour}
            />
            <Title str="Spot T" />
          </Row>
          <Row>
            <Icon icon="light_mode" />
            <Slider
              onChange={(value) => setLightFive(value)}
              startPoint={0}
              min={0}
              max={100}
              value={lightFive}
            />
            <Title str="Spot B" />
          </Row>
        </Column>
      </Column>
    </Column>
  );
}
