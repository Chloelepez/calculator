import React, { Component } from 'react';
import Button from './components/Button';
import Input from './components/Input';
import Equal from './components/Equal';
import './App.css';

class App extends Component {
   constructor(props) {
     super(props);

     this.state = {
       input: "",
       operator: "",
       n1: "",
       n2: "",
     }
    }   

  addToInput = val => {
    this.setState({ input: this.state.input + val })
  }

  addZeroToInput = val => {
    if (this.state.input !== "") {
      this.setState({ input: this.state.input + val })
    }
  }

  addDecimal = val => {
    if (this.state.input.indexOf(',') === -1) {
      this.setState({ input: this.state.input + val })
    }
  }

  clearInput = () => {
    this.setState({ input: ""})
  } 

  add = () => {
    this.setState({ n1: this.state.input });
    this.setState({ input: "" });
    this.setState({ operator: "add" });
  };

  substract = () => {
    this.setState({ n1: this.state.input });
    this.setState({ input: "" });
    this.setState({ operator: "substract" });
  };
  
  multiply = () => {
    this.setState({ n1: this.state.input });
    this.setState({ input: "" });
    this.setState({ operator: "multiply" });
  };

  divide = () => {
    this.setState({ n1: this.state.input });
    this.setState({ input: "" });
    this.setState({ operator: "divide" });
  };

  calculate = () => {
    this.setState({ n2: this.state.input });

    if (this.state.operator === "add") {
      this.setState({ input: parseFloat(this.state.n1) + parseFloat(this.state.n2) });
    } else if (this.state.operator === "substract") {
      this.setState({ input: parseFloat(this.state.n1) - parseFloat(this.state.n2) });
    } else if (this.state.operator === "multiply") {
      this.setState({ input: parseFloat(this.state.n1) * parseFloat(this.state.n2) });
    } else if (this.state.operator === "divide") {
      this.setState({ input: parseFloat(this.state.n1) / parseFloat(this.state.n2) });
    }
  };

  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <div className="row">
          <Input>{this.state.input}</Input>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.divide}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.multiply}>*</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.add}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addDecimal}>,</Button>
            <Button handleClick={this.addZeroToInput}>0</Button>
            <Button handleClick={this.clearInput}>C</Button>
            <Button handleClick={this.substract}>-</Button>
          </div>
          <div className="row">
          <Equal handleClick={this.calculate} />
          </div>
        </div>
      </div>
    );
  }  
}

export default App;
