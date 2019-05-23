import React, { Component } from 'react';
import Button from './components/Button';
import Input from './components/Input';
import Equal from './components/Equal';
import * as math from 'mathjs';
import './App.css';

class App extends Component {
   constructor(props) {
     super(props);

     this.state = {
       input: "",
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

  calculate = () => {
    this.setState({ input: math.eval(this.state.input)})
  }

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
            <Button handleClick={this.addToInput}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.addToInput}>*</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.addToInput}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addDecimal}>,</Button>
            <Button handleClick={this.addZeroToInput}>0</Button>
            <Button handleClick={this.clearInput}>C</Button>
            <Button handleClick={this.addToInput}>-</Button>
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
