import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

class AplCircle extends Component {
  static propTypes = {
    children: PropTypes.string,
    /**
     * Any additional classes added to component
     */
    className: PropTypes.string,
    /**
     * Color of the cirls
     */
    color: PropTypes.string,
  }

  static defaultProps = {
    children: null,
    className: null,
    color: 'primary',
  }

  render() {
    const { color, children, className } = this.props

    return (
      <div className={classnames('apl-circle', className)}>
        <div
          className={classnames(
            'apl-circle__shape',
            color && `apl-circle__shape--${color}`
          )}
        />
        <div className={classnames('apl-circle__text')}>{children}</div>
      </div>
    )
  }
}

export default AplCircle
