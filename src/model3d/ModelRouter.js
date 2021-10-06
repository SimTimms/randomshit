import React, { useEffect, useRef } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import themeDesigner from './theme';
import ThreeJS from './threeJS';
import { Row, Column, DividerMini } from './components';
import 'rc-slider/assets/index.css';
import RecentColors from './recentColors';
import TitleBar from './TitleBar';
import PaintRack from './PaintRack';
import Lighting from './lighting';
import ModeBar from './ModeBar';
import Tools from './Tools';
import Decals from './Decals';
import Parts from './Parts';
import Models from './Models';
import PaintPot from './PaintPot';

function RouterComponent(props) {
  const theme = themeDesigner();
  //needs to re-render model
  const modelColorsRef = useRef({});
  const [lightOne, setLightOne] = React.useState(30);
  const [decals, setDecals] = React.useState(null);
  const [part, setPart] = React.useState({ primaryWeapon: 'boltgun' });
  const [model, setModel] = React.useState('spacemarine');
  const [lightTwo, setLightTwo] = React.useState(70);
  const [paintMode, setPaintMode] = React.useState(false);
  const [color, setColor] = React.useState(null);
  const [modelColors, setModelColors] = React.useState(null);

  const [activeColor, setActiveColor] = React.useState({
    color: '#aaa',
    name: 'Plastic Grey',
  });

  const colorMap = {};
  function setColorFunction(activeColorIn) {
    setActiveColor(activeColorIn);
    setPaintMode(true);
  }

  useEffect(() => {
    !color && setColor(colorMap);
    setModelColors(modelColorsRef.current);
  }, [colorMap, color, modelColorsRef]);

  return (
    <ThemeProvider theme={theme}>
      <Column>
        <TitleBar model={model} setModel={setModel} />
        <Row h="100%" w="100%" j="flex-start" a="flex-start" bg="#222">
          <PaintRack setColorFunction={setColorFunction} />
        </Row>
        <Row h="100%" w="100%" j="flex-start" a="flex-start">
          <Column
            bg="#222"
            a="flex-start"
            j="flex-start"
            w={200}
            h={`calc(100vh - 100px)`}
          >
            <RecentColors
              activeColor={activeColor}
              setColorFunction={setColorFunction}
              setPaintMode={setPaintMode}
            />

            <Lighting
              setLightOne={setLightOne}
              lightOne={lightOne}
              setLightTwo={setLightTwo}
              lightTwo={lightTwo}
            />

            {/*<Tools
            spray={spray}
            setSpray={setSpray}
            setPaintMode={setPaintMode}
          />*/}
            {model === 'spacemarine' && <Decals setDecals={setDecals} />}
            {model === 'spacemarine' && <Parts setPart={setPart} />}
            <Models setModel={setModel} />
          </Column>

          <Column>
            <ModeBar paintMode={paintMode} setPaintMode={setPaintMode} />
            <ThreeJS
              color={color}
              lightOne={lightOne / 100}
              lightTwo={lightTwo / 100}
              intensity={(lightOne + lightTwo) / 200}
              activeColor={activeColor}
              paintMode={paintMode}
              setPaintMode={setPaintMode}
              modelColorsRef={modelColorsRef}
              modelColors={modelColors}
              model={model}
              decalSet={decals}
              part={part}
              model={model}
            />
            <Typography
              align="center"
              style={{
                marginLeft: 10,
                padding: 4,
                fontFamily: 'roboto',
                fontSize: 10,
                color: '#aaa',
              }}
            >
              Model by Kurilovich Aleksey
              https://creativecommons.org/licenses/by/4.0/ Profile:
              https://sketchfab.com/brcasius Model: https://skfb.ly/6B6Nz
            </Typography>
          </Column>
          <Column
            bg="#222"
            a="flex-start"
            j="flex-start"
            w={180}
            h={`calc(100vh - 100px)`}
          >
            <DividerMini />
            <Row j="flex-start">
              <PaintPot color={activeColor} setColorFunction={() => null} />
              <Typography align="left" style={{ color: '#fff' }}>
                {activeColor.name}
              </Typography>
            </Row>
            <Typography
              align="left"
              style={{ color: '#aaa', width: 180, marginLeft: 4 }}
            >
              {activeColor.company}
            </Typography>
            <Typography
              align="left"
              style={{ color: '#aaa', width: 180, marginLeft: 4 }}
            >
              {activeColor.link && (
                <a
                  href={activeColor.link}
                  style={{ color: 'rgba(255,255,255,0.6)' }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get This Paint
                </a>
              )}{' '}
            </Typography>
          </Column>
        </Row>
      </Column>
    </ThemeProvider>
  );
}

export default withRouter(RouterComponent);
