import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export const BIO_SIZES = ['small', 'large', 'xlarge']

class GclBio extends Component {
  static propTypes = {
    /**
     * Any additional classes added to component
     */
    className: PropTypes.string,
    /**
     * User profile name
     */
    name: PropTypes.string.isRequired,
    /**
     * Size of the profile image
     */
    size: PropTypes.oneOf(BIO_SIZES),
    /**
     * Source string for the image
     */
    src: PropTypes.string.isRequired,
    /**
     * Additional text below user name
     */
    subText: PropTypes.string,
  }

  static defaultProps = {
    className: null,
    size: 'small',
    subText: null,
  }

  render() {
    const { className, name, size, src, subText } = this.props

    return (
      <div className={classnames('gcl-bio', className)}>
        <div
          className={classnames('gcl-bio__image', `gcl-bio__image--${size}`)}>
          <img src={src} className="gcl-bio__image-src" />
        </div>
        <div className="gcl-bio__name">{name}</div>
        <div className="gcl-bio__sub-text">{subText}</div>
      </div>
    )
  }
}

export default GclBio
