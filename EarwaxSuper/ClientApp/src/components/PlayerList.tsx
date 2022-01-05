import { Component } from 'react';
import * as React from "react"


export interface PlayerListState {
    playerinput: [];
    inputvalue: string
}


export default class PlayerList extends React.PureComponent<{}, PlayerListState> {
    static displayName = PlayerList.name;
    constructor(props: any) {
        super(props);
        this.state = { playerinput: [], inputvalue: "" };;
        this.populatePlayerInputData()
    }


    public render() {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Player Input</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.playerinput.map((pp: any) =>
                        <tr key={pp}>{pp}
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    async populatePlayerInputData() {
        console.log("hämta input")
        const response = await fetch('api/game');
        const data = await response.json();
        console.log("Loading serverdata")
        this.setState({ playerinput: data });
    }
}
