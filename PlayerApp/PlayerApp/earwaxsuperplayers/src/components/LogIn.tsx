import * as React from 'react';
export interface LogInProps {
    
}
 
export interface LogInState {
    
}
 
class LogIn extends React.Component<LogInProps, LogInState> {
    constructor(props: LogInProps) {
        super(props);
    }
    render() { 
        return ( <div><h2>Väntar</h2></div> );
    }
}
 
export default LogIn;