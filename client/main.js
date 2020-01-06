import React from 'react';
import ReactDOM from 'react-dom';
import './main.html';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import App from './components/app';
import BinMain from "./components/bins/bin_main"
import BinList from "./components/bins/bin_list"

const routes = (
  <BrowserRouter>
      <div>
          <App/>
          <Switch>
              <Route exact path="/" component={BinList}/>
              <Route path="/bins/:binID" component={BinMain}/>
          </Switch>
      </div>
  </BrowserRouter>
);

Meteor.startup(() => {
    ReactDOM.render(routes, document.querySelector('.render-target'));
})