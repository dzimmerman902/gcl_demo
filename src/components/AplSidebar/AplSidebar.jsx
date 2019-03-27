import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export class AplSidebar extends Component {
  static propTypes = {
    className: PropTypes.string,
  }

  static defaultProps = {
    className: null,
  }

  render() {
    const { children, className } = this.props

    return (
      <div className={classnames('apl-sidebar', className)}>{children}</div>
    )
  }
}
