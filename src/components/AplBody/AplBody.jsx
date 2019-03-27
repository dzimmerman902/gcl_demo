import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

class AplBody extends Component {
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

    return <div className={classnames('apl-body', className)}>{children}</div>
  }
}

export default AplBody
