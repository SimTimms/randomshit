import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PublicLayout from '../views/layouts/publicLayout';
import Photo from '../Photo';

export default function PublicRoutes({ theme, props: { ...props } }) {
  return (
    <Switch>
      <Route
        path="/photo/:pathParam/:image"
        render={(props) => (
          <Photo
            imageIn={`${props.match.params.pathParam}/${props.match.params.image}`}
          />
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
