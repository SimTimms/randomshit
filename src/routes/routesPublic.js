import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PreviewLayout from '../layouts/preview';
import { PublicLayout } from '../layouts/public';
import MyCharEmbed from '../MyCharEmbed';

export default function PublicRoutes({ theme, props: { ...props } }) {
  return (
    <Switch>
      <Route
        path="/photo/:pathParam/:image"
        render={(props) => (
          <MyCharEmbed
            imageIn={`${props.match.params.pathParam}/${props.match.params.image}`}
          />
        )}
      />
      <Route
        path="/user-profile/:pathParam"
        render={(props) => (
          <PreviewLayout {...props} theme={theme} publicView={true} />
        )}
      />
      <Route
        path="/:page/:token"
        render={(props) => <PublicLayout {...props} theme={theme} />}
      />
      <Route
        path="/:page"
        render={(props) => <PublicLayout {...props} theme={theme} />}
      />
      <Route
        path="/"
        render={(props) => <PublicLayout {...props} theme={theme} />}
      />
    </Switch>
  );
}
