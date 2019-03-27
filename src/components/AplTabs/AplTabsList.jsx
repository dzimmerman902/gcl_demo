import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export class AplTabsList extends Component {
  render() {
    const { active, children, className, handleActiveClick, title } = this.props

    const chidlrenWithProps = React.Children.map(children, child => {
      return React.cloneElement(child, { active, handleActiveClick })
    })

    return (
      <div className={classnames('apl-tabs-list', className)}>
        {chidlrenWithProps}
      </div>
    )
  }
}
