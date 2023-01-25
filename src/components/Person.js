import React from 'react'

function Person({person}) {  //destructuring 
  return (
    <div>
      <h1>My name is {person.name}, My age is {person.age}, i can use {person.skill}</h1>
    </div>
  )
}

export default Person
