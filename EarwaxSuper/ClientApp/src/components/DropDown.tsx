import * as React from 'react';

export interface Props {
    select: string;
    currentstate: string;
}


export class DropDown extends React.PureComponent<{}, Props> {
    constructor(props: any) {
        super(props);
        this.state = { select: "waiting", currentstate: "" };
        this.handleChange = this.handleChange.bind(this);
    }

    public componentDidMount() {
        console.log("Game did mount")
        this.getCurrentState();
    }

    private handleChange(e: string) {
        this.setState({
            select: e
        });
    }

    async submitChangeState(status: string) {
        console.log(JSON.stringify({ status }));
        const url = 'api/state'
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status })
        };
        fetch(url, requestOptions)
            .then(response => this.getCurrentState())
            .catch(error => console.log('Form submit error', error))
    }

    async getCurrentState() {

        console.log("Get State")
        const response = await fetch('api/state');
        const data = await response.json();
        console.log("Loading state data")
        this.setState({ currentstate: data });
        console.log(data)
    }

    public render() {
        return (
            <div>
                <h1>Nuvarande state</h1>
                {this.state.currentstate}
                <select name="statuschoise" value={this.state.select} onChange={e => this.handleChange(e.target.value)} id="statuschoise">
                    <option value="waiting">Waiting</option>
                    <option value="started">Started</option>
                    <option value="finish" >Finish</option>
                </select>
                <button type="button"
                    className="btn btn-primary btn-lg"
                    onClick={() => { this.submitChangeState(this.state.select) }}>
                    Submit
                </button>
            </div>
        )
    }
    
}

export default DropDown
