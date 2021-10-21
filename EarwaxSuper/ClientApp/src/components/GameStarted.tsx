import * as React from 'react';
import * as GameData from '../store/GameData';
import DropDown from './DropDown'
import SoundPlayer from './SoundPlayer'


export class GameStarted extends React.PureComponent<{}, GameData.GameDataState> {

    constructor(props: any) {
        super(props);
        this.state = { playerinput: [], inputvalue: ""};
        this.handleChange = this.handleChange.bind(this);
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

    public renderPlayerStatus(player: any) {
        return (
            <div>
                <h1> Player Status </h1>

            </div>
        );
    }

    private handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            inputvalue :e.target.value
        });
    }

    public render() {
        return (
            <div>
                <h1 id="tabelLabel" >Player Input</h1>
                {this.renderPlayerInputTable(this.state.playerinput)}
                <h1 id="tabelLabel" >Test Input</h1>
                <input id="testplayerinput" onChange={this.handleChange} type="input" />
                <button type="button"
                    className="btn btn-primary btn-lg"
                    onClick={() => { this.submitPlayerInputData(this.state.inputvalue) }}>
                    Submit
                </button>

                <DropDown />
                <SoundPlayer />
            </div>
        );
    }

    async submitPlayerInputData(answer: string) {
        console.log(JSON.stringify({ answer }));
        const url = 'api/game'
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            //headers: { 'Content-Type': 'text/plain' },
            //body: value
            body: JSON.stringify({ answer })
        };
        fetch(url, requestOptions)
            .then(response => this.populatePlayerInputData())
            .catch(error => console.log('Form submit error', error))
    }

    async populatePlayerInputData() {

        const response = await fetch('api/game');
        const data = await response.json();
        console.log("Loading serverdata")
        this.setState({ playerinput: data});
    }

}