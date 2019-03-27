import React, { Component } from 'react'
import classnames from 'classnames'

class CompareReact extends Component {
  render() {
    const { children, className } = this.props

    return (
      <div>
        <div className="compare-box__react">React</div>
        <div className={classnames(className)}>{children}</div>
      </div>
    )
  }
}

export default CompareReact
