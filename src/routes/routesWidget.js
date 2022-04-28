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
          />
        )}
      />
    </Switch>
  );
}
