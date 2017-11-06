import React, {Component} from 'react';
import './Legend.css';

class Legend extends Component {
  render() {
    return (
      <div>
        <div className='orange'></div>
        <p>Average Score</p>
        <div className='first'></div>
        <p>First Attempt</p>
        <div className='second'></div>
        <p>Second Attempt</p>
      </div>
    );
  }
}

export default Legend;
