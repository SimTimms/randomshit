import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ModelApp from '../layouts/app/modelApp';

export default function WidgetRoutes({
  theme,
  modelId,
  controls,
  rotate,
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
          />
        )}
      />
    </Switch>
  );
}
