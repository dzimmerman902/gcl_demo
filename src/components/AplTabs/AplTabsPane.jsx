import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export class AplTabsPane extends Component {
  render() {
    const { active, children, className, paneId } = this.props

    return (
      <div
        className={classnames(
          'apl-tabs-pane',
          paneId === active && 'active',
          className
        )}>
        {children}
      </div>
    )
  }
}
