import React, { Component } from 'react';
import './Equal.css';

class Equal extends Component {
    render() {
        return (
            <div className="equal"
            onClick={() => this.props.handleClick(this.props.children)}
            > calculate
            </div>
          );
        }
    }
 
export default Equal;
