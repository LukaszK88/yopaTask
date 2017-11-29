import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter as Router } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import './resources/css/global.css';
import registerServiceWorker from './registerServiceWorker';
import routes from './routes';
import reducers from './Reducers';
import setAuthorizationToken from './utils/setAuthorizationToken';
import { currentLoggedInUser } from './Actions/user';

const createStoreWithMiddleware = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(promise, thunk)),
);

if (window.localStorage.getItem('token')) {
  setAuthorizationToken(window.localStorage.getItem('token'));
  createStoreWithMiddleware.dispatch(currentLoggedInUser(window.localStorage.getItem('token')));
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware}>
    <Router>
      {renderRoutes(routes)}
    </Router>
  </Provider>
  , document.getElementById('root'),
);
registerServiceWorker();
