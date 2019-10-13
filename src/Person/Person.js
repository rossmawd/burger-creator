
import React from 'react';


const Person = ({name, age, click, changed}) => {
  
  return (
   
    <div>
      <p onClick={click}>I'm {name} and I am {age} years old!</p>
      <p> </p>
      <input type="text" onChange={changed} value={name}/>
    </div>
  )

}

export default Person;
