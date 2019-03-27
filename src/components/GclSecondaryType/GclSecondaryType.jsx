import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

class GclSecondaryType extends Component {
  static propTypes = {
    children: PropTypes.string,
    /**
     * Any additional classes added to component
     */
    className: PropTypes.string,
    /**
     * Font style
     */
    italic: PropTypes.bool,
  }

  static defaultProps = {
    children: null,
    className: null,
    italic: false,
  }

  render() {
    const { children, className, italic } = this.props

    return (
      <div
        className={classnames(
          'gcl-secondary-type',
          italic && 'gcl-secondary-type--italic',
          className
        )}>
        {children}
      </div>
    )
  }
}

export default GclSecondaryType
