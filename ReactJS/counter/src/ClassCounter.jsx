import React, { Component } from "react";

class ClassCounter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrement = () => {
    this.setState((dec) => ({
      count: dec.count > 0 ? dec.count - 1 : 0,
    }));
  };

  render() {
    return (
      <div className="text-center mt-5">
        <h1>ClassCounter: {this.state.count}</h1>
        <button onClick={this.increment} className="btn btn-primary m-2">
          +
        </button>
        <button onClick={this.decrement} className="btn btn-danger m-2">
          -
        </button>
      </div>
    );
  }
}

export default ClassCounter;
