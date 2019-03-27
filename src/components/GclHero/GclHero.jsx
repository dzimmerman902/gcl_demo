import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

class GclHero extends Component {
  static propTypes = {
    children: PropTypes.string,
    /**
     * Any additional classes added to component
     */
    className: PropTypes.string,
    /**
     * Medium subtitle text
     */
    subTitle: PropTypes.string,
    /**
     * Large title text
     */
    title: PropTypes.string,
  }

  static propTypes = {
    children: null,
    className: null,
    title: null,
    subTitle: null,
  }

  render() {
    const { backgroundImage, className, subTitle, title } = this.props

    const backgroundStyle = {
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
    }

    return (
      <div
        className={classnames('gcl-hero', className)}
        style={backgroundStyle}>
        <div className="gcl-hero__title">{title}</div>
        <div className="gcl-hero__sub-title">{subTitle}</div>
      </div>
    )
  }
}

export default GclHero
