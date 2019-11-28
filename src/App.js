import React, { useState } from 'react';
import Person from './Person/Person'
import './App.css';

class App extends React.Component {
  state = {
    persons: [
      { name: "Ross", age: 35 },
      { name: "Carol", age: 26 },
      { name: "Dave", age: 15 }
    ],
    showPersons: false
  }

  deletePersonHandler = (i) => {
    const persons = [...this.state.persons]
    let dave = persons.splice(i, 1)
    this.setState({persons: persons})
    alert(dave[0].name)
  }

  // switchNameHandler = (newName) => {
  //   console.log("I was clicked YO")
  //   this.setState({
  //     persons: [{ name: newName, age: 28 },
  //     { name: 'Dave', age: 100 }
  //     ]
  //   })
  // }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 100 },
        { name: 'Carol', age: 26 }]
    })
  }

  togglePersonHandler = () => {
    this.setState({ showPersons: !this.state.showPersons })
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
{this.state.persons.map((person, i) => {
  return <Person 
  {...person} 
  // changed={this.nameChangedHandler}
  click={() => this.deletePersonHandler(i)}
  />

})}

      </div>
      );
    }
   

    return (
      //test change
      <div className="App">
        <button
          style={style}
          onClick={this.togglePersonHandler}>Toggle Persons</button>
      
        {persons}
        

      </div>
    );

  }
}

export default App;
