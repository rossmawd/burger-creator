import React, { useState } from 'react';
import Person from './Person/Person'
import './App.css';

class App extends React.Component {
  state = {
    persons: [
      { name: "Ross", age: 35 },
      { name: "Carol", age: 26 }
    ]
  }

  switchNameHandler = (newName) => {
    console.log("I was clicked YO")
    this.setState({
      persons: [{ name: newName, age: 28 },
      { name: 'Dave', age: 100 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 100 },
        { name: 'Carol', age: 26 }]
    })
  }

  render() {
    return (
      <div className="App">
        <button onClick={() => this.switchNameHandler("SpoonFace")}>HELLO</button>
        <Person
          {...this.state.persons[0]}
          changed={this.nameChangedHandler} />
        <Person
          {...this.state.persons[1]}
          click={this.switchNameHandler.bind(this, "rimmer")}
        />
      </div>
    );

  }
}

export default App;
