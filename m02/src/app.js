'use strict'

import React, { Component } from 'react'
import Title from './title'

class App extends Component{
  render () {
    return (
      <div className='container'>
        <Title name='Thadeu' />
      </div>
    )
  }
}

// const App = React.createClass({
//   render: () => <div className='container'>
//     <Title name='Thadeu'  />
//   </div>
// })

export default App
