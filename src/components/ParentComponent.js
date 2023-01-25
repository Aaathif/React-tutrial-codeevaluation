import ChildComponent from './ChildComponent'

import React, { Component } from 'react'

export class ParentComponent extends Component {

    constructor(props) {
        super(props)
      
        this.state = {
           parentName: 'Parent'
        }
  
        this.greetParent = this.greetParent.bind(this)
      }

    greetParent() {  //without parameter
        alert('Hello_'+ this.state.parentName)
        console.log("Hello parent working without parameter")
    }
    

  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetParent}/>
      </div>
    )
  }
}

export default ParentComponent

