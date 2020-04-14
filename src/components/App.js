import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '0',
    };
  }

  updateValue(data, name) {
    this.setState({
      value: calculate(data, name),
    });
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
