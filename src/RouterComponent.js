import React, { useRef } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { withRouter } from 'react-router-dom';
import Cookies from 'js-cookie';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import themeDesigner from './theme';
import AuthRoutes from './routes/routesAuth';
import PublicRoutes from './routes/routesPublic';
import WidgetRoutes from './routes/routesWidget';
import { MenuContext } from './context';
import { PAGES } from './const';
import { REACT_APP_API } from './envVars';

function RouterComponent(props) {
  const authToken = Cookies.get('token');
  const theme = themeDesigner();
  const client = new ApolloClient({
    uri: REACT_APP_API,
    cache: new InMemoryCache({ addTypename: false }),
    headers: {
      authorization: authToken ? `Bearer ${authToken}` : '',
    },
  });

  const [pageValues, setPageValues] = React.useState({
    primaryPage: 'home',
    publicPage: 'profile',
    homePage: {
      primaryPage: PAGES.pickModelsPrimary,
      secondaryPage: PAGES.pickModelsSecondary,
      kickstarterId: null,
      myPostId: null,
      gameId: null,
      userId: null,
    },
    uploadPage: {
      primaryPage: null,
      secondaryPage: null,
      gameId: null,
    },
  });

  return (
    <div style={{ width: '100vw', height: '100%', position: 'fixed' }}>
      <ThemeProvider theme={theme}>
        <ApolloProvider client={client}>
          <MenuContext.Provider
            value={{
              primaryPage: pageValues.primaryPage,
              publicPage: pageValues.publicPage,
              homePage: {
                primaryPage: pageValues.homePage.primaryPage,
                secondaryPage: pageValues.homePage.secondaryPage,
                gameId: pageValues.homePage.gameId,
                userId: pageValues.homePage.userId,
              },
              uploadPage: {
                primaryPage: pageValues.uploadPage.primaryPage,
                secondaryPage: pageValues.uploadPage.secondaryPage,
                gameId: pageValues.uploadPage.gameId,
              },

              updateMenuContext: setPageValues,
            }}
          >
            {authToken && <AuthRoutes props={props} theme={theme} />}
            {!authToken && <WidgetRoutes props={props} theme={theme} />}
            {!authToken && <PublicRoutes props={props} theme={theme} />}
          </MenuContext.Provider>
        </ApolloProvider>
      </ThemeProvider>
    </div>
  );
}

export default withRouter(RouterComponent);
