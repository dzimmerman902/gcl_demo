import React, { Component } from 'react'
import './_CompareBox.scss'

class CompareBox extends Component {
  render() {
    const { children } = this.props

    return <div className="compare-box">{children}</div>
  }
}

export default CompareBox
