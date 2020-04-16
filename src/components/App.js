import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      total: null,
      next: null,
      operaton: null,
    };
  }
handleClick = (name) =>{
this.setState(state =>({
  total: calculate(state, name)
}));
}
  render() {
    return (
      <div id="container">
        <Display value={this.state.error || this.state.next || this.state.total || '0'} />
        <ButtonPanel handleClick = {this.handleClick} />
      </div>
    );
  }
}

export default App;
