// Conditional Rendering - 16

import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)
      
        this.state = {    //object creation
           isLoggedIn: true                    //state Property 
        }
    }

  render() {
        //------------------------------  method -4 - Short circuit operator - only specific case
    return this.state.isLoggedIn &&  <div>Welcome Aathif<hr/></div>   //welcome Aathif or nothing
     

        //------------------------------  method -3 - tirnery conditional operator
{/*
    return (
        this.state.isLoggedIn ? <div>Welcome Asry<hr/></div> : <div>Welcome Guest<hr/></div>
    )                                    
             */}                   

        //------------------------------  method -2 - using Element Variable
{/*       
    let message
    if(this.state.isLoggedIn){
        message = <div>Welcome Aathif</div>
    }else {
        message = <div>Welcome Guest</div>
    }

    return <div>{message}<hr/></div>                   
                                        */}
 {/*
    //------------------------------  method -1 - id/else
    if(this.state.isLoggedIn){  
        return <div>Welcome Aathif<hr/></div>
    
    }else {
        return (
            <div>Welcome Guest<hr/></div>
        )
    }        
*/}
    

    // return (
    //   <div>
    //     <div>Welcome Aathif</div>
    //     <div>Welcome Guest</div>
        
    //   </div>
    // )
  }
}

export default UserGreeting
