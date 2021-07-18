import { Component } from 'react';
import * as React from "react"
import { Route } from 'react-router';
import { Home } from './components/Home';
import { GameStarted } from './components/GameStarted';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
      return (
          <div>
              <Route exact path='/' component={GameStarted} />
                <Route path='/gamestarted' component={GameStarted} />
          </div>
    );
  }
}
