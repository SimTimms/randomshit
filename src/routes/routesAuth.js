import React from 'react';
import AppLayout from '../layouts/app';
import { Route, Switch, Redirect } from 'react-router-dom';
import PreviewLayout from '../layouts/preview';
import {
  FeaturedCreativeWidget,
  CreativeRosterWidget,
  FeaturedKickstarters,
  FeaturedCreativeMiniWidget,
  JobDescriptionWidget,
  PublicJobWidget,
} from '../widgets';

export default function AuthRoutes({ theme, props: { ...props } }) {
  return (
    <Switch>
      <Route
        path="/app/:page/:pathParam?/:pathParam2?"
        render={(props) => <AppLayout {...props} theme={theme} />}
      />

      <Route path="/" exact render={() => <Redirect push to="/app/home" />} />
    </Switch>
  );
}
