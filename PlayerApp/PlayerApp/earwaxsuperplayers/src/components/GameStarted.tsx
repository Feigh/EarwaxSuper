import * as React from 'react';
export interface GameStartedProps {
    
}
 
export interface GameStartedState {
    
}
 
class GameStarted extends React.Component<GameStartedProps, GameStartedState> {
    constructor(props: GameStartedProps) {
        super(props);
        console.log("Startad");
        
    }
    render() { 
        return ( <div><h2>Startat</h2></div> );
    }
}
 
export default GameStarted;