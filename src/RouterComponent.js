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
  const [controls, setControls] = React.useState('blank');
  const [rotate, setRotate] = React.useState('blank');

  useEffect(() => {
    if (document.getElementById('modelId')) {
      !modelId &&
        setModelId(document.getElementById('modelId').getAttribute('modelId'));

      controls === 'blank' &&
        setControls(
          document.getElementById('modelId').getAttribute('controls')
        );

      rotate === 'blank' &&
        setRotate(document.getElementById('modelId').getAttribute('rotate'));
    }
  }, [modelId]);

  return (
    <div style={{ width: '100vw', height: '100%', position: 'fixed' }}>
      <ThemeProvider theme={theme}>
        <ApolloProvider client={client}>
          {modelId ? (
            <WidgetRoutes
              props={props}
              theme={theme}
              modelId={modelId}
              controls={controls}
              rotate={rotate}
            />
          ) : (
            `Please add this to your site: <div id="modelId" modelId="6259ae1fb012e3b1d9746402"></div>`
          )}
        </ApolloProvider>
      </ThemeProvider>
    </div>
  );
}

export default withRouter(RouterComponent);
