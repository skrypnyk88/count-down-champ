import React, { Component } from 'react';
import './App.css';

class Clock extends Component {
  constructor(params) {
    super(params);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  }

  componentWillMount() {
    this.calculateDate(this.props.deadline)
  }

  componentDidMount() {
    setInterval(() => this.calculateDate(this.props.deadline), 1000)
  }

  leading0(number) {
    return (number > 9 ? number : ('0' + number))
  }

  calculateDate(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    const seconds = Math.floor((time/1000) % 60);
    const minutes = Math.floor((time/1000/60) % 60);
    const hours = Math.floor(time/(1000*60*60) %24);
    const days = Math.floor(time/(1000*60*60*24));
    this.setState({days, hours, minutes, seconds})
  }

  render() {
    return (
      <div >
        <div className="Clock-days">{this.leading0(this.state.days)} days</div>
        <div className="Clock-hours">{this.leading0(this.state.hours)} hours</div>
        <div className="Clock-minutes">{this.leading0(this.state.minutes)} minutes</div>
        <div className="Clock-seconds">{this.leading0(this.state.seconds)} seconds</div>
      </div>
    )
  }
}

export default Clock;
