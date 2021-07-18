import * as React from 'react';

export interface Props {
    
}
 
export interface State {
    inputvalue: string;
}
 
class PlayerInput extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { inputvalue: ""  };
        this.handleChange = this.handleChange.bind(this);
    }

    private handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            inputvalue :e.target.value
        });
    }
    render() { 
        return (  
            <div>
            <h1 id="tabelLabel" >Player App</h1>
            <input id="testplayerinput" onChange={this.handleChange} type="input" />
                <button type="button"
                    className="btn btn-primary btn-lg"
                    onClick={() => { this.submitPlayerInputData(this.state.inputvalue) }}>
                    Submit
                </button>
        </div>
        );
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
            .then(response => console.log("Submited data"))
            .catch(error => console.log('Form submit error', error))
    }
}
 
export default PlayerInput;