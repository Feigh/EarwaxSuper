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
}

public render() {
    return (
        <div>
            Vi bhöver sätta en regel här som gör så att om servern har status väntar så visas en runt och status started visas en annan ruta
        </div>
    );
}


}

export default App;
