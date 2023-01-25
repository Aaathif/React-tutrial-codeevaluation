import React from 'react'

function FunctionClick() {

    function clickHandler(){
        console.log("that is work!")
    }

  return (
    <div>
      <button onClick={clickHandler}>Click Me</button>
    </div>
  )
}

export default FunctionClick
