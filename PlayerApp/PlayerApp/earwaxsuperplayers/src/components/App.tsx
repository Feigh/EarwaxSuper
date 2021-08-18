import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, withRouter, RouteComponentProps, Redirect } from "react-router-dom";
import { History, LocationState, createBrowserHistory, createHashHistory  } from "history";
import logo from './logo.svg';
import Login from './LogIn'
import GameStarted from './GameStarted'
import './App.css';

interface PlayerState  {
 gamestatus: string; //replace any with suitable type
 history: History<LocationState>;
}

export interface PlayerProps {
    
}

export class App extends React.PureComponent<PlayerProps, PlayerState> {

  constructor(props: any) {
    super(props);
    this.state = { gamestatus: '', history: createBrowserHistory() };
}

public componentDidMount() {
    this.getGameStatus();
}

public statusChanged() {
    if(this.state.gamestatus=='waiting')
    {
        this.state.history.push('/');
    }
    if(this.state.gamestatus=='started')
    {
        this.state.history.push('/gamestarted');
    }
}

public render() {
    return (
        <div>
            <Router>
                <Route exact path="/" component={Login} />
                <Route exact path="/gamestarted" component={GameStarted} /> 
            </Router>
        </div>
    );
}

async getGameStatus() {
    
    const response = await fetch('https://localhost:44357/api/state');
    const data = await response.json();
    console.log("Loading serverdata")
    console.log(data);
    this.setState({ gamestatus: data});
    this.statusChanged();
}


}

export default App;
