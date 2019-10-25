import React, {Component} from 'react';

import {HashRouter, Switch, Route} from 'react-router-dom';
// import routes from './router';
// import {BrowserRouter, HashRouter, Route, Switch} from 'react-router-dom';

import Login from './components/login/login.jsx';
import Admin from './components/admin/admin.jsx';

// import service from './api/interceptor';
// Vue.prototype.$axios = service;

// import httpUrl from '../src/api/httpUrl.js';
// Vue.prototype.$httpUrl = httpUrl;
export default class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/" component={Admin}></Route>
        </Switch>
      </HashRouter>
    );
  }
}
