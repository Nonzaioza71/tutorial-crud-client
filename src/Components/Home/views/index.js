import React, { Component } from 'react'
import View from './view'

export default class Main extends Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
      <View {...this.props} />
    )
  }
}
