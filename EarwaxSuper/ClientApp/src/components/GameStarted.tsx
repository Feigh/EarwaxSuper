import * as React from 'react';
import * as GameData from '../store/GameData';


export class GameStarted extends React.PureComponent<{}, GameData.GameDataState> {

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
                <h1 id="tabelLabel" >Player Input</h1>
                {this.renderPlayerInputTable(this.state.playerinput)}
            </div>
        );
    }

    async populatePlayerInputData() {

        const response = await fetch('api/game');
        const data = await response.json();
        console.log("Loading serverdata")
        console.log(data);
        this.setState({ playerinput: data});
    }
}