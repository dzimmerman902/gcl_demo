import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

class GclLink extends Component {
  static propTypes = {
    children: PropTypes.string,
    /**
     * Any additional classes added to component
     */
    className: PropTypes.string,
    /**
     * URL to next page
     */
    href: PropTypes.string,
  }

  static defaultProps = {
    children: null,
    className: null,
    href: '#',
  }

  render() {
    const { children, className, href } = this.props

    return (
      <a className={classnames('gcl-link', className)} href={href}>
        {children}
      </a>
    )
  }
}

export default GclLink
