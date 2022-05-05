import React, { useEffect, useRef } from 'react';
import { withRouter } from 'react-router-dom';
import { Row, Column } from './components';
import ModelLoader from './modelLoader';

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
  clickEvent,
  enableZoom,
  enablePan,
  suspenseImage,
  backgroundColor,
  clickFor3d,
  colors,
}) {
  const modelColorsRef = useRef({});
  const [panels, setPanels] = React.useState(null);

  const [paintMode, setPaintMode] = React.useState(0);
  const [color, setColor] = React.useState(null);

  const activeColor = {
    color: '#fff',
    name: 'Plastic Grey',
  };
  const colorMap = {};

  useEffect(() => {
    !color && setColor(colorMap);
  }, [colorMap, color, modelColorsRef, js]);
  return (
    <Column h="100%" w="100%">
      <Row h="100%" w="100%" j="flex-start" a="flex-start">
        <ModelLoader
          activeColor={activeColor}
          sprayMode={false}
          gltfIn={gltf}
          gameId={gameId}
          modelName={game}
          paintMode={paintMode}
          setPaintMode={setPaintMode}
          lightOne={30}
          lightTwo={30}
          lightThree={0}
          lightFour={30}
          lightFive={0}
          lightSix={0}
          lightSeven={0}
          box={box}
          setPanels={setPanels}
          panels={panels}
          back={back}
          login={login}
          history={history}
          markings={null}
          profilePriority={profilePriority}
          modelArtist={modelArtist ? modelArtist : null}
          rotate={rotate}
          controls={controls}
          paint={paint}
          cameraPos={cameraPos}
          targets={targets}
          watermark={watermark}
          clickEvent={clickEvent}
          enablePan={enablePan}
          enableZoom={enableZoom}
          suspenseImage={suspenseImage}
          backgroundColor={backgroundColor}
          clickFor3d={clickFor3d}
          colors={colors}
        />
      </Row>
    </Column>
  );
}

export default withRouter(ModelRouterApp);
