import React from 'react'

function NameList() {
    const names = ['Bruce', 'Clark', 'Diana']
    const arrayList = names.map(name=><h1>My name is {name}</h1>)
    
  return (
    <div>
        {arrayList}
    </div>
  )
}

export default NameList
