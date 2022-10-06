import React, { Component } from 'react'

export class Hello extends Component {
  render() {
    return (
        <div>Hello {this.props.name}</div>
    )
  }
}

export default Hello