import React from 'react'

function ChildComponent(props) {
  return (
    <div>
      <button onClick={props.greetHandler}>Greet Parent - 15</button>
    </div>
  )
}

export default ChildComponent
