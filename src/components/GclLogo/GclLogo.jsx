import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

class GclLogo extends Component {
  static propTypes = {
    /**
     * Any additional classes added to component
     */
    className: PropTypes.string,
    /**
     * Image source
     */
    src: PropTypes.string.isRequired,
  }

  static defaultProps = {
    className: null,
  }

  render() {
    const { className, src } = this.props

    return (
      <img
        className={classnames('gcl-logo', className)}
        src={src}
        alt="Logo Component"
      />
    )
  }
}

export default GclLogo
