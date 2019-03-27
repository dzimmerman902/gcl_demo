import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export class AplTabsContent extends Component {
  render() {
    const { active, children } = this.props

    const childrenWithProps = React.Children.map(children, child => {
      return React.cloneElement(child, { active })
    })

    return <div className="apl-tabs-content">{childrenWithProps}</div>
  }
}
