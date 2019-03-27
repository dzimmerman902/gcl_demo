import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export const HEADING_SIZES = [1, 2, 3, 4, 5]

class GclHeading extends Component {
  static propTypes = {
    children: PropTypes.string,
    /**
     * Any additional classes added to component
     */
    className: PropTypes.string,
    /**
     * Size of the Heading
     */
    size: PropTypes.oneOf(HEADING_SIZES),
  }

  static defaultProps = {
    children: null,
    className: null,
    size: 1,
  }

  render() {
    const { children, className, size } = this.props

    return (
      <div
        className={classnames(
          'gcl-heading',
          size && `gcl-heading--${size}`,
          className
        )}>
        {children}
      </div>
    )
  }
}

export default GclHeading
