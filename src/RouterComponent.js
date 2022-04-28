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
  const [modelId, setModelId] = React.useState(null);
  const [controls, setControls] = React.useState('blank');
  const [rotate, setRotate] = React.useState('blank');
  const [paint, setPaint] = React.useState('blank');
  const [cameraPos, setCameraPos] = React.useState('blank');
  const [targets, setTargets] = React.useState('blank');
  const [url, setUrl] = React.useState(null);
  const [userId, setUserId] = React.useState(null);
  const [clickEvent, setClickEvent] = React.useState(null);

  useEffect(() => {
    const idElement = document.getElementById(props.elementId);

    if (idElement) {
      const userIdParam = idElement.getAttribute('userId');
      const camera = idElement.getAttribute('camera').split(',');
      !modelId && setModelId(idElement.getAttribute('modelId'));
      controls === 'blank' && setControls(idElement.getAttribute('controls'));
      rotate === 'blank' && setRotate(idElement.getAttribute('rotate'));
      paint === 'blank' && setPaint(idElement.getAttribute('paint'));
      !url && setUrl(idElement.getAttribute('url'));
      userIdParam && !userId && setUserId(userIdParam);
      setTargets(idElement.getAttribute('targets'));
      cameraPos === 'blank' && setCameraPos([camera[0], camera[1], camera[2]]);

      idElement.getAttribute('onClickEvent') &&
        setClickEvent(() => window[idElement.getAttribute('onClickEvent')]);
    }
  }, [modelId, cameraPos, controls, paint, props, rotate, url, userId]);

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
          />
        ) : (
          `Please add this to your site: <div id="modelId" modelId="6259ae1fb012e3b1d9746402"></div>`
        )}
      </ApolloProvider>
    </div>
  );
}

export default withRouter(RouterComponent);
