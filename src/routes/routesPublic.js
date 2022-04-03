import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import PreviewLayout from '../layouts/preview';
import { PublicLayout } from '../layouts/public';
import MyCharEmbed from '../MyCharEmbed';
import ModelApp from '../layouts/app/modelApp';
import bg from '../assets/house/bg.png';
import day from '../assets/house/day.png';
import housefront from '../assets/house/housefront.png';
import houselight from '../assets/house/houselight.png';
import skynight from '../assets/house/skynight.png';
import logo from '../assets/house/logo.png';
export default function PublicRoutes({ theme, props: { ...props } }) {
  const [lightOne, setLightOne] = React.useState(0);
  const [dayNight, setDayNight] = React.useState(0);
  const [hue, setHue] = React.useState(0);
  const [brightness, setBrightness] = React.useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      dayNight === 0
        ? setLightOne(lightOne + 0.001)
        : setLightOne(lightOne - 0.001);

      if (lightOne > 0.4 && hue < 40) {
        setHue(hue + 1);
      }
      if (lightOne < 0.4 && hue > 0) {
        setHue(hue - 1);
      }

      if (lightOne > 0.4 && brightness > 0) {
        setBrightness(brightness - 1);
      }
      if (lightOne < 0.4 && brightness < 40) {
        setBrightness(brightness + 1);
      }
      if (lightOne > 1.2) {
        setDayNight(1);
      }
      if (lightOne < 0) {
        setDayNight(0);
      }
    }, 10);

    carryCount([129, 456]);
    return () => clearInterval(interval);
  }, [lightOne, hue, brightness]);

  function carryCount(inputVar) {
    //[100,200]
    const inputVar1 = inputVar[0].toString().length;
    const inputVar2 = inputVar[1].toString().length;

    for (let i = inputVar1 - 1; i > -1; i = i - 1) {
      console.log(inputVar[i]);
      //  const currentDigit= inputVar[]
    }
    //   console.log(inputVar[0][inputVar1], inputVar[1][inputVar1]);
  }

  return (
    <Switch>
      <Route path="/toptal" render={(props) => <div>TopTal</div>} />
      <Route
        path="/cycle"
        render={(props) => (
          <div style={{ width: '100%' }}>
            <img
              src={housefront}
              style={{
                width: '100%',
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: 4,
                opacity: lightOne,
              }}
            />

            <img
              src={houselight}
              style={{
                width: '100%',
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: 3,
                opacity: lightOne > 0.8 ? 1 : 0,
              }}
            />
            <img
              src={bg}
              style={{
                width: '100%',
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: 2,
                opacity: lightOne * 2,
              }}
            />
            <img
              src={skynight}
              style={{
                width: '100%',
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: 1,
                opacity: lightOne,
                filter: `hue-rotate(${hue}deg),`,
              }}
            />
            <img
              src={day}
              style={{
                width: '100%',
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: 0,
              }}
            />
          </div>
        )}
      />
      <Route
        path="/"
        render={(props) => <ModelApp {...props} theme={theme} basic={true} />}
      />
    </Switch>
  );
}
