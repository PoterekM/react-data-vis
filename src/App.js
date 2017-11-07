import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/react-vis/dist/style.css';
import {XYPlot, VerticalGridLines, HorizontalGridLines, XAxis, YAxis, VerticalBarSeries, LineMarkSeries} from 'react-vis';
import Legend from './components/Legend';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const data = [
      {x: 1, y: 56},
      {x: 2, y: 85},
      {x: 3, y: 69},
      {x: 4, y: 73},
      {x: 5, y: 97},
      {x: 6, y: 90},
    ];
    const avg = [
      {x: 1, y: 85},
      {x: 2, y: 82},
      {x: 3, y: 94},
      {x: 4, y: 88},
      {x: 5, y: 91},
      {x: 6, y: 83}
    ];
    const second = [
      {x: 1, y: 72},
      {x: 2, y: 90},
      {x: 3, y: 100},
      {x: 4, y: 94},
      {x: 5, y: 98},
      {x: 6, y: 91}
    ];



    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="Chart">
          <XYPlot height={400} width={500}>
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis tickTotal={6} tickFormat={x => `Quiz  ${x}`} tickLabelAngle={-38} />
            <YAxis tickTotal={10} tickFormat={y => `${y}%`} />
            <VerticalBarSeries data={data} color="#007A7C"   onSeriesClick={(event)=>{
              console.log("henlo1")
              }}/>
            <VerticalBarSeries ref="quizBar" data={second}  color="#00FFFF"
              onNearestX={(datapoint, event)=>{
                  console.log("whoa, data", datapoint);
              }}
              onValueClick={(datapoint, event)=>{
                console.log("i'm going to route you");
              }}
              // onSeriesClick={(datapoint, event)=>{
              //     console.log("whoa, data", datapoint);
              // }}
              // onSeriesClick={(event)=>{
              //   // var quizBar;
              //   // var val = this.refs.quizBar;
              //   // console.log(quizBar);
              //   // console.log(val);
              //   let x;
              //   let y;
              //   let sec;
              //   for (sec of second) {
              //     console.log(sec);
              //     console.log(second);
              //     console.log(second.length);
              //     console.log(sec);
              //     console.log(sec.x);
              //     console.log(this.sec.x);
              //     console.log(sec.y);
              //   }
              //   // let i;
              //   // const individual = second.map(x => x.y);
              //   // for (i = 0; i < individual.length; i++) {
              //   //   // console.log(individual);
              //   //   console.log(i, individual);
              //   }
                // // console.log(individual);
                // // console.log(second[0].y);
              // }
              />
            <LineMarkSeries data={avg} color="orange" />
          </XYPlot>
        </div>
        <Legend />
      </div>
    );
  }
}

export default App;
