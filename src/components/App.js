import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: '0',
    };
  }

  render() {
    const { result } = this.state;
    return (
      <div id="container">
        <Display value={result} />
        <ButtonPanel />
      </div>
    );
  }
}

export default App;
