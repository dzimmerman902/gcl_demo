import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

class AplTitle extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
    /**
     * Any additional classes added to component
     */
    className: PropTypes.string,
  }

  static defaultProps = {
    children: null,
    className: null,
  }

  render() {
    const { children, className } = this.props

    return <div className={classnames('apl-title', className)}>{children}</div>
  }
}

export default AplTitle
