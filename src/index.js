import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import Register from './views/Register/Register';
import Send from './views/Send/Send';
import Home from './views/Home/Home';
import Profile from './views/Profile/Profile';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <HashRouter>
    <App>
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/home" component={Home} />
        <Route path="/send" component={Send} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </App>
  </HashRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
