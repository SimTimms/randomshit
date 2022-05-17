import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import WidgetRoutes from './routes/routesWidget';
import { REACT_APP_API } from './envVars';

function RouterComponent(props) {
  const client = new ApolloClient({
    uri: REACT_APP_API,
    cache: new InMemoryCache({ addTypename: false }),
    headers: {
      authorization: '',
    },
  });

  const [elementId, setElementId] = React.useState(null);
  const [clickFor3d, setClickFor3d] = React.useState(false);

  useEffect(() => {
    setElementId(props.elementId);
    const clickfor3dTemp = document
      .getElementById(props.elementId)
      .getAttribute('clickfor3d');

    clickfor3dTemp === 'true' && setClickFor3d(true);
  }, [props]);

  const idElement = document.getElementById(elementId);

  if (idElement) {
    const userIdParam = idElement.getAttribute('userId');

    const camera = idElement.getAttribute('camera').split(',');

    const modelId = idElement.getAttribute('modelid');

    const controls = idElement.getAttribute('controls');
    const backforth = idElement.getAttribute('backforth');

    const rotate = idElement.getAttribute('rotate');
    const paint = idElement.getAttribute('paint');
    const url = idElement.getAttribute('url');
    const userId = userIdParam;
    const targets = idElement.getAttribute('targets');

    const cameraPos = [camera[0], camera[1], camera[2]];

    const enablePan = idElement.getAttribute('enablepan');

    const enableZoom = idElement.getAttribute('enablezoom');

    const suspenseImage = idElement.getAttribute('suspenseimage');

    const backgroundColor = idElement.getAttribute('backgroundcolor');

    const clickEvent = window[idElement.getAttribute('onclickevent')];

    const colors = idElement.getAttribute('colors');

    return (
      <div style={{ width: '100%', height: '100%' }}>
        <ApolloProvider client={client}>
          {modelId ? (
            <WidgetRoutes
              props={props}
              theme={null}
              modelId={modelId}
              controls={controls}
              rotate={rotate}
              paint={paint}
              cameraPos={cameraPos}
              targets={targets}
              url={url}
              userId={userId}
              clickEvent={clickEvent}
              enablePan={enablePan}
              enableZoom={enableZoom}
              suspenseImage={suspenseImage}
              backgroundColor={backgroundColor}
              clickFor3d={clickFor3d}
              colors={colors}
              backforth={backforth}
            />
          ) : (
            `Please add this to your site: <div id="modelId" modelId="6259ae1fb012e3b1d9746402"></div>`
          )}
        </ApolloProvider>
      </div>
    );
  }
  return null;
}

export default withRouter(RouterComponent);
