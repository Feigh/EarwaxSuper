import * as React from 'react';
import { isThisTypeNode } from 'typescript';
export interface GameStartedProps {
    
}
 
export interface GameStartedState {
    inputvalue: string,
    errormessage: string
}
 
class GameStarted extends React.Component<GameStartedProps, GameStartedState> {
    constructor(props: GameStartedProps) {
        super(props);
        console.log("Startad");
        this.state = {  inputvalue: "", errormessage: ""};
        this.handleChange = this.handleChange.bind(this);
    }

    private handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            inputvalue :e.target.value
        });
    }

    async submitPlayerInputData(answer: string) {
        console.log(JSON.stringify({ answer }));
        const url = 'https://localhost:44357/api/game'
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ answer })
        };
        fetch(url, requestOptions)
        .then(response => {  
            if (!response.ok) { 
                return response.text();
            } 
            else{
                return "ok";
            }
        })
            .then(data => {
                if(data!="ok"){
                    this.setState({errormessage:data})
                }
            })
            //.then(data => this.setState({errormessage:data.value}))
            .catch(error => this.setState({errormessage:error}))
    }

    render() { 
        return ( <div>
            <h2>Startat</h2>
            <input id="testplayerinput" onChange={this.handleChange} type="input" />
                <button type="button"
                    className="btn btn-primary btn-lg"
                    onClick={() => { this.submitPlayerInputData(this.state.inputvalue) }}>
                    Submit
                </button>
            <h3>{this.state.errormessage}</h3>
            </div> );
    }
}
 
export default GameStarted;