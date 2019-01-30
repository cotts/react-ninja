'use strict'

import React, { Component } from 'react'
import Square from './square'
import Button from './button'

class App extends Component{
  render () {
    return (
      <div className='container' onClick={ e => alert('clicou')}>
      <Button>
        Text 
        <span> complete</span>
      </Button>
      </div>
    )
  }
}



export default App
