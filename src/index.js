import React from 'react';
import ReactDOM from 'react-dom';
import RouterComponent from './RouterComponent';
import { BrowserRouter as Router } from 'react-router-dom';

let eleArr = [];
var elements = document.getElementsByTagName('div');
for (var i = 0; i < elements.length; i++) {
  elements[i].id.indexOf('modelId') > -1 && eleArr.push(elements[i].id);
}
eleArr.map((elementId) =>
  ReactDOM.render(
    <Router>
      <RouterComponent elementId={elementId} />
    </Router>,
    document.getElementById(elementId)
  )
);
