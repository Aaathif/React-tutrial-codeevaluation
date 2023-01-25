import React from 'react'
import './myStyles.css'

function Stylesheet(props) {
    let colorName = props.color ? 'primary' : ''

    const heading = {
        fontSize: '30px',
        color: 'blue',
        fontWeight: 900
    }

  return (
    <div>
      <h1 className={`${colorName} size`}>Hello World</h1>
      <p style={heading}>My name is Aathif</p>
    </div>
  )
}

export default Stylesheet
