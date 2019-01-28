'use strict'

import React from 'react'

const Title = React.createClass({
  getDefaultProps () {
    return {
      name: 'Desconhecido',
      lastName: {
        first: 'Sem ',
        last: 'Sobrenome'
      }
    }
  },
  render () {
    return <h1> Olá {`${this.props.name} ${this.props.lastName.first}${this.props.lastName.last}`}!</h1>
  }
})

export default Title
