import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

class GclOnboarding extends Component {
  static propTypes = {
    children: PropTypes.string,
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

    return (
      <div className={classnames('gcl-onboarding', className)}>{children}</div>
    )
  }
}

export default GclOnboarding
