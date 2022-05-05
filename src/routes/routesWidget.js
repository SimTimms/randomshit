import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ModelApp from '../layouts/app/modelApp';

export default function WidgetRoutes({
  theme,
  modelId,
  controls,
  rotate,
  paint,
  cameraPos,
  targets,
  url,
  userId,
  clickEvent,
  enableZoom,
  enablePan,
  suspenseImage,
  backgroundColor,
  clickFor3d,
  colors,
  props: { ...props },
}) {
  return (
    <Switch>
      <Route
        path="/"
        render={(props) => (
          <ModelApp
            {...props}
            theme={theme}
            basic={true}
            modelId={modelId}
            controls={controls}
            rotate={rotate}
            paint={paint}
            cameraPos={cameraPos}
            targets={targets}
            url={url}
            userId={userId}
            clickEvent={clickEvent}
            enablePan={enablePan}
            enableZoom={enableZoom}
            suspenseImage={suspenseImage}
            backgroundColor={backgroundColor}
            clickFor3d={clickFor3d}
            colors={colors}
          />
        )}
      />
    </Switch>
  );
}
