import React, { Component, useState } from 'react'
import '../styles/App.css';
// const App = () => {

//   return (
//     <div id="main">
//       <div className="date-time"></div>
//     </div>
//   )
// }

class App extends Component {
  constructor() {
    super();
    this.state = { time: new Date() };
  }
  currentTime() {
    this.setState({ time: new Date() });
  }
  componentDidMount() {
    this.interval = setInterval(() => this.currentTime(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <div id="main">
        <div className="date-time">
          <h3 id="time">{this.state.time.toLocaleTimeString()}</h3>
        </div>
      </>
    );
  }
}
export default App;
