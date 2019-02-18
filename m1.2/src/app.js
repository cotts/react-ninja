'use strict'

import React, { Component } from 'react'


class App extends Component{
  constructor(){
    super()
    this.state= {
      text: 'Cotts'
    }
  }
  render () {
    return (
      <div className='container' onClick={()=> this.setState({
        text: 'Thadeu'
      })}>
     { this.state.text }
      </div>
    )
  }
}



export default App
