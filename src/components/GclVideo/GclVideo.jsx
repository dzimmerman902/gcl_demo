import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export const VIDEO_SIZES = ['regular', 'large', 'poster', 'xlarge']

class GclVideo extends Component {
  static propTypes = {
    /**
     * Any additional classes added to component
     */
    className: PropTypes.string,
    description: PropTypes.string,
    length: PropTypes.string,
    name: PropTypes.string,
    series: PropTypes.string,
    size: PropTypes.oneOf(VIDEO_SIZES).isRequired,
    src: PropTypes.string,
  }

  static defaultProps = {
    className: null,
    description: null,
    length: null,
    name: null,
    series: null,
    src: null,
  }

  render() {
    const {
      className,
      description,
      length,
      name,
      series,
      size,
      src,
    } = this.props

    return (
      <div className={classnames('gcl-video', className)}>
        <img
          className={classnames('gcl-video__img', `gcl-video__img--${size}`)}
          src={src}
        />
        {series && <div className="gcl-video__series">{series}</div>}
        {name && <div className="gcl-video__name">{name}</div>}
        {length && <div className="gcl-video__length">{length}</div>}
        {description && (
          <div
            className={classnames(
              'gcl-video__description',
              `gcl-video__description--${size}`
            )}>
            {description}
          </div>
        )}
      </div>
    )
  }
}

export default GclVideo
