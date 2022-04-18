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
  const [paint, setPaint] = React.useState('blank');
  const [cameraPos, setCameraPos] = React.useState('blank');
  const [targets, setTargets] = React.useState('blank');
  const [url, setUrl] = React.useState(null);
  const [userId, setUserId] = React.useState(null);

  useEffect(() => {
    const idElement = document.getElementById(props.elementId);
    const userIdParam = idElement.getAttribute('userId');
    const camera = idElement.getAttribute('camera').split(',');
    if (document.getElementById(props.elementId)) {
      !modelId && setModelId(idElement.getAttribute('modelId'));
      controls === 'blank' && setControls(idElement.getAttribute('controls'));
      rotate === 'blank' && setRotate(idElement.getAttribute('rotate'));
      paint === 'blank' && setPaint(idElement.getAttribute('paint'));
      !url && setUrl(idElement.getAttribute('url'));
      userIdParam && !userId && setUserId(userIdParam);
      setTargets(idElement.getAttribute('targets'));
      cameraPos === 'blank' && setCameraPos([camera[0], camera[1], camera[2]]);
    }
  }, [modelId]);

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <ThemeProvider theme={theme}>
        <ApolloProvider client={client}>
          {modelId ? (
            <WidgetRoutes
              props={props}
              theme={theme}
              modelId={modelId}
              controls={controls}
              rotate={rotate}
              paint={paint}
              cameraPos={cameraPos}
              targets={targets}
              url={url}
              userId={userId}
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
