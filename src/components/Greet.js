import React, { Children } from 'react'

function Greet(props) {

  const {name, heroname, children} = props

  return (
    <div>
      <h1>Welcome {name} a.k.a {heroname} </h1>
      {children}
    </div>
  )
  
}

export default Greet
