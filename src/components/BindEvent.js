import React, { Component } from 'react'


// 4 step,
   /// 1 - render() -> bind keyword  
   /// 2 - render() -> arrow function
   /// 3 - construction 
   /// 4 - arrow function

class BindEvent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {   //state creation
         message: "good moring"        //proporties assigning 
      }

    //   this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler() {
    //     this.setState({
    //         message: "good night"
    //     })
    //     console.log(this)
    // }
    
    clickHandler = () => {
        this.setState({
            message: 'good night'
        }) 
    }

  render() {
    return (
      <div>
        <h3>{this.state.message}</h3>
        {/* <button onClick={this.clickHandler.bind(this)}>Change to night</button> */}
        {/* <button onClick={() => this.clickHandler()}>Change to night</button> */}

        
        <button onClick={this.clickHandler}>Change to night</button>


      </div>
    )
  }
}

export default BindEvent
