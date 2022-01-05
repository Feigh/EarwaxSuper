import * as React from 'react';
import * as GameData from '../store/GameData';
import DropDown from './DropDown'
import SoundPlayer from './SoundPlayer'
import PlayerList from './PlayerList'


export class GameStarted extends React.PureComponent<{}, GameData.GameDataState> {

    constructor(props: any) {
        super(props);
        this.state = { playerinput: [], inputvalue: ""};
        this.handleChange = this.handleChange.bind(this);
    }

    public componentDidMount() {
        console.log("Game did mount")
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
                <PlayerList />
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

            body: JSON.stringify({ answer })
        };
        fetch(url, requestOptions)
            .then(response => console.log("Data submited"))
            .catch(error => console.log('Form submit error', error))
    }

}