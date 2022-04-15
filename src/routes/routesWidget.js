import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PreviewLayout from '../layouts/preview';
import { PublicLayout } from '../layouts/public';
import MyCharEmbed from '../MyCharEmbed';
import ModelApp from '../layouts/app/modelApp';

export default function WidgetRoutes({ theme, props: { ...props } }) {
  return (
    <Switch>
      <Route
        path="/"
        render={(props) => <ModelApp {...props} theme={theme} basic={true} />}
      />
    </Switch>
  );
}
