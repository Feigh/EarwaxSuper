import * as React from 'react';

export class Home extends React.PureComponent<any> {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <h1>Earwax Super</h1>
            <p>Välkommen till appen</p>
            {Home.displayName}
      </div>
    );
  }
}
