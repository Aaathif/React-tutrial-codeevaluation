import React from 'react'
import Person from './Person'

function NameList2() {
    const persons = [
        {
            id: 1,
            name: 'Sahle',
            age: 30,
            skill: 'react'
        },
        {
            id: 2,
            name: 'Asry',
            age: 25,
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Sabeer',
            age: 28,
            skill: 'Vue'
        },
        {
           
            name: 'Mufeel',
            age: 21,
            skill: 'Next'
        }
    ]

    const ArrayList = persons.map((person, index) => <h3 key={index}>{index} {person.name}</h3>) 




  return (
    <div>
      {ArrayList}
    </div>
  )
}

export default NameList2

