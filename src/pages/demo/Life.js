import React, {Component} from 'react';
import Child from './Child';

export default class Life extends Component {
  constructor (props) {
    super (props);
    this.state = {
      count: 0,
    };
  }
  handleAdd = () => {
    this.setState ({
      count: this.state.count + 1,
    });
  };
  render () {
    return (
      <div>
        <p> 生命周期 </p>
        <button onClick={this.handleAdd}> 点击一下 </button>
        <p> {this.state.count} </p>
        <Child name={this.state.count} />
      </div>
    );
  }
}
