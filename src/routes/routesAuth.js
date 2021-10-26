import React from 'react';
import AppLayout from '../views/layouts/appLayout';
import { Route, Switch } from 'react-router-dom';

export default function AuthRoutes({ theme, props: { ...props } }) {
  return (
    <Switch>
      <Route
        path="/app/:page/:pathParam?/:pathParam2?"
        render={(props) => <AppLayout {...props} theme={theme} />}
      />
    </Switch>
  );
}
