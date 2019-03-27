import React, { Component } from 'react'
import classnames from 'classnames'

class CompareHtml extends Component {
  render() {
    const { children, className } = this.props

    return (
      <div>
        <div className="compare-box__html">HTML / CSS</div>
        <div className={classnames(className)}>{children}</div>
      </div>
    )
  }
}

export default CompareHtml
