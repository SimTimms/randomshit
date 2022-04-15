import React, { useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { withRouter } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import themeDesigner from './theme';
import WidgetRoutes from './routes/routesWidget';
import { REACT_APP_API } from './envVars';

function RouterComponent(props) {
  const theme = themeDesigner();
  const client = new ApolloClient({
    uri: REACT_APP_API,
    cache: new InMemoryCache({ addTypename: false }),
    headers: {
      authorization: '',
    },
  });
  const [modelId, setModelId] = React.useState(null);

  useEffect(() => {
    var modelIdTemp =
      document.getElementById('modelId') &&
      document.getElementById('modelId').getAttribute('modelId');
    !modelId && setModelId(modelIdTemp);
    console.log(modelIdTemp);
  }, [modelId]);

  return (
    <div style={{ width: '100vw', height: '100%', position: 'fixed' }}>
      <ThemeProvider theme={theme}>
        <ApolloProvider client={client}>
          {modelId ? (
            <WidgetRoutes props={props} theme={theme} modelId={modelId} />
          ) : (
            `Please add this to your site: <div id="modelId" modelId="6259ae1fb012e3b1d9746402"></div>`
          )}
        </ApolloProvider>
      </ThemeProvider>
    </div>
  );
}

export default withRouter(RouterComponent);
