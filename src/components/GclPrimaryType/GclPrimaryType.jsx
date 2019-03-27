import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export const PRIMARY_TYPE_WEIGHT = ['heavy', 'medium', 'book', 'light']

class GclPrimaryType extends Component {
  static propTypes = {
    children: PropTypes.string,
    /**
     * Any additional classes added to component
     */
    className: PropTypes.string,
    /**
     * Font weight
     */
    weight: PropTypes.oneOf(PRIMARY_TYPE_WEIGHT),
  }

  static defaultProps = {
    children: null,
    className: null,
    weight: 'medium',
  }

  render() {
    const { children, className, weight } = this.props

    return (
      <div
        className={classnames(
          'gcl-primary-type',
          weight && `gcl-primary-type--${weight}`,
          className
        )}>
        {children}
      </div>
    )
  }
}

export default GclPrimaryType
