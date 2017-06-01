import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      deadline: 'October 13, 2017',
      newDedline: ''
    }
  }

  changeDedline() {
    this.setState({ deadline: this.state.newDedline })
  }

  render() {
    return (
      <div className="App">
        <div className="App-title">Count to {this.state.deadline}</div>
          <Clock deadline={this.state.deadline}/>
          <Form inline>
            <FormControl type="text"
                         className="Deadline-input"
                         placeholder="Enter date"
                         onChange={event => {this.setState({newDedline: event.target.value})}}/>
            <Button onClick={() => this.changeDedline()}>Submit</Button>
          </Form>
      </div>
    )
  }
}

export default App;
