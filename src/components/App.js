import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '0',
    };
  }

  render() {
    const { value } = this.state;
    return (
      <div id="container">
        <Display value={value} />
        <ButtonPanel />
      </div>
    );
  }
}

export default App;
