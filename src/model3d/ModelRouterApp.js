import React, { useEffect, useRef } from 'react';
import { withRouter } from 'react-router-dom';
import { Row, Column } from './components';
import 'rc-slider/assets/index.css';
import { ColorContext } from '../context';
import ModelLoader from './modelLoader';
import PaintRackApp from './PaintRackApp';

function ModelRouterApp({
  gltf,
  js,
  gameId,
  box,
  back,
  game,
  login,
  history,
  profilePriority,
  modelArtist,
  controls,
  rotate,
  paint,
  cameraPos,
  targets,
  watermark,
}) {
  const modelColorsRef = useRef({});
  const [panels, setPanels] = React.useState(null);
  const [lightOne, setLightOne] = React.useState(30);
  const [attachedPart, setAttachedPart] = React.useState([]);
  const [lightTwo, setLightTwo] = React.useState(30);
  const [lightThree, setLightThree] = React.useState(0);
  const [lightFour, setLightFour] = React.useState(30);
  const [lightFive, setLightFive] = React.useState(0);
  const [lightSix, setLightSix] = React.useState(0);
  const [lightSeven, setLightSeven] = React.useState(0);
  const [paintMode, setPaintMode] = React.useState(0);
  const [color, setColor] = React.useState(null);
  const [markings, setMarkings] = React.useState(null);

  const [activeColor, setActiveColor] = React.useState({
    color: '#fff',
    name: 'Plastic Grey',
  });
  const colorMap = {};

  useEffect(() => {
    !color && setColor(colorMap);
  }, [colorMap, color, modelColorsRef, js]);
  return (
    <ColorContext.Provider
      value={{
        activeColor: { color: activeColor.color, name: activeColor.name },
      }}
    >
      <Column h="100%">
        <Row h="100%" w="100%" j="flex-start" a="flex-start">
          <ModelLoader
            activeColor={activeColor}
            sprayMode={false}
            gltfIn={gltf}
            gameId={gameId}
            modelName={game}
            paintMode={paintMode}
            setPaintMode={setPaintMode}
            lightOne={lightOne}
            lightTwo={lightTwo}
            lightThree={lightThree}
            lightFour={lightFour}
            lightFive={lightFive}
            lightSix={lightSix}
            lightSeven={lightSeven}
            box={box}
            setPanels={setPanels}
            panels={panels}
            back={back}
            login={login}
            history={history}
            markings={markings}
            profilePriority={profilePriority}
            modelArtist={modelArtist ? modelArtist : null}
            rotate={rotate}
            controls={controls}
            paint={paint}
            cameraPos={cameraPos}
            targets={targets}
            watermark={watermark}
          />
        </Row>
      </Column>
    </ColorContext.Provider>
  );
}

export default withRouter(ModelRouterApp);
