
import React from 'react';
import './Person.css'


const Person = ({name, age, click, changed}) => {
  
  return (
   
    <div className="Person">
      <p onClick={click}>I'm {name} and I am {age} years old!</p>
      <p> </p>
      <input type="text" onChange={changed} value={name}/>
    </div>
  )

}

export default Person;
