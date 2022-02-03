import React, { useRef } from 'react';
import { ThemeProvider } from '@mui/styles';
import { withRouter } from 'react-router-dom';
import Cookies from 'js-cookie';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import themeDesigner from './theme';
import AuthRoutes from './routes/routesAuth';
import PublicRoutes from './routes/routesPublic';
import { MenuContext } from './context';
import { PAGES } from './const';
import { REACT_APP_API } from './envVars';

function RouterComponent(props) {
  const authToken = Cookies.get('token');
  const theme = themeDesigner();
  console.log('asd', REACT_APP_API);
  const client = new ApolloClient({
    uri: REACT_APP_API,
    cache: new InMemoryCache({ addTypename: false }),
    headers: {
      authorization: authToken ? `Bearer ${authToken}` : '',
    },
  });

  console.log(client);

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
    workPage: {
      primaryPage: 'my_work',
      secondaryPage: 'active_work',
      jobId: null,
      inviteId: null,
      contractId: null,
    },
    jobPage: {
      primaryPage: 'job_board',
      secondaryPage: 'dashboard',
      jobId: null,
      contractId: null,
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

              updateMenuContext: setPageValues,
            }}
          >
            {authToken && <AuthRoutes props={props} theme={theme} />}
            {!authToken && <PublicRoutes props={props} theme={theme} />}
          </MenuContext.Provider>
        </ApolloProvider>
      </ThemeProvider>
    </div>
  );
}

export default withRouter(RouterComponent);
