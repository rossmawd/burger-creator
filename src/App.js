import React, { useState } from 'react';
import Person from './Person/Person'

import './App.css';

const app = props => {

  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "ross", age: 35 },
      { name: "Carol", age: 26 }
    ],
    otherState: 12
  })

  // state = {
  //   person: [
  //     {name: "ross", age: 35},
  //     {name: "Carol", age: 26}  
  //   ]
  // }

  const switchNameHandler = () => {
    console.log("I was clicked")
    setPersonsState({

      persons: [
        {name: 'Max', age: 28},
        {name: 'Dave', age: 100},
        {name: 'Sam', age: 100}

      ],
      otherState: personsState.otherState
    })
  }

  console.log(personsState)

  return (
    <div className="App">
      <h1>Let's get started!</h1>
      <button onClick={switchNameHandler}>HELLO</button>
      <Person 
      {...personsState.persons[0]}></Person>
      <Person
       {...personsState.persons[1]}></Person>

    </div>
  );
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'), 'Hi, I\'m a React App')

}

export default app;
