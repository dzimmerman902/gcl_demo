import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export const BUTTON_COLORS = ['primary', 'secondary', 'tertiary', 'inactive']

class GclButton extends Component {
  static propTypes = {
    /**
     * Determine is button is a block display
     */
    block: PropTypes.bool,
    children: PropTypes.string,
    /**
     * Any additional classes added to component
     */
    className: PropTypes.string,
    /**
     * Color of Button
     */
    color: PropTypes.oneOf(BUTTON_COLORS),
  }

  static defaultProps = {
    block: false,
    children: null,
    className: null,
    color: 'primary',
  }

  render() {
    const { block, children, className, color } = this.props

    return (
      <button
        className={classnames(
          'gcl-button',
          block && `gcl-button--block`,
          color && `gcl-button--${color}`,
          className
        )}>
        {children}
      </button>
    )
  }
}

export default GclButton
