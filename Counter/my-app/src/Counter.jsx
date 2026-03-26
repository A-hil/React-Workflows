import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  Reset = () => {
    this.setState({count: this.state.count*0});
  }

  render() {
    return (
      <div style={{ textAlign: 'center', border: '1px solid gray', padding: '10px' }}>
        <h1>Счетчик: {this.state.count}</h1>
        <button onClick={this.increment}>Добавить +1</button>
        <button onClick={this.decrement}>Убавить -1</button>
        <button onClick={this.Reset}>Обнулить</button>
      </div>
    );
  }
}

export default Counter;