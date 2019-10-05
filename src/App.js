import React, { Component } from 'react';
import Person from './Person/Person'

import './App.css';

class App extends Component {

  state = {
    person: [
      {name: "ross", age: 35},
      {name: "Carol", age: 26}
    
    ]
  }
  render() {
      return (
        <div className="App">
    <h1>Let's get started!</h1> 
    <Person {...this.state.person[0]}></Person>
    <Person {...this.state.person[1]}></Person>
   
        </div>
      );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'), 'Hi, I\'m a React App')
  }
}

export default App;
