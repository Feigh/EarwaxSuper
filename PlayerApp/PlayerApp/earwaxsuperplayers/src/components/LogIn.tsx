import * as React from 'react';
export interface LogInProps {
    
}
 
export interface LogInState {
    inputvalue: string,
    errormessage: string
}
 
class LogIn extends React.Component<LogInProps, LogInState> {
    constructor(props: LogInProps) {
        super(props);
        this.state = {  inputvalue: "", errormessage: ""};
        this.handleChange = this.handleChange.bind(this);
    }

    private handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            inputvalue :e.target.value
        });
    }

    async submitLoginInputData(answer: string) {
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
                console.log(response.status);
                if(response.status==204){
                    this.setState({errormessage:"Game State is not waiting"})
                }
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
            <h2>Väntar</h2>
            <input id="testplayerinput" onChange={this.handleChange} type="input" />
                <button type="button"
                    className="btn btn-primary btn-lg"
                    onClick={() => { this.submitLoginInputData(this.state.inputvalue) }}>
                    Submit
                </button>
            <h3>{this.state.errormessage}</h3>
            </div> );
    }
}
 
export default LogIn;