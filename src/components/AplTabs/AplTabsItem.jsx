import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export class AplTabsItem extends Component {
  render() {
    const { active, children, className, handleActiveClick, tabId } = this.props

    return (
      <div
        className={classnames(
          'apl-tabs-item',
          tabId === active && 'active',
          className
        )}
        onClick={handleActiveClick}
        data-id={tabId}>
        {children}
      </div>
    )
  }
}
