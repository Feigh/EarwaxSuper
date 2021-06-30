import React from 'react';
import logo from './logo.svg';
import './App.css';

interface PlayerState  {
 playerinput: []; //replace any with suitable type
}

export class App extends React.PureComponent<{}, PlayerState> {

  constructor(props: any) {
    super(props);
    this.state = { playerinput: [] };
    console.log("Game Started")
}

public componentDidMount() {
    console.log("Game did mount")
    this.populatePlayerInputData();
}

public renderPlayerInputTable(player: any) {
    console.log(player)
    return (
        <table className='table table-striped' aria-labelledby="tabelLabel">
            <thead>
                <tr>
                    <th>Player Input</th>
                </tr>
            </thead>
            <tbody>
                {player.map((pp : any) =>
                    <tr key={pp}>{pp}
                    </tr>
                )}
            </tbody>
        </table>
    );
}

public render() {
    return (
        <div>
            <h1 id="tabelLabel" >Player App</h1>
            {this.renderPlayerInputTable(this.state.playerinput)}
        </div>
    );
}

async populatePlayerInputData() {

    const response = await fetch('https://localhost:44357/api/game');
    const data = await response.json();
    console.log("Loading serverdata")
    console.log(data);
    this.setState({ playerinput: data});
}
}

export default App;
