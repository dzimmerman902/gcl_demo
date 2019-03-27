import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

class AplCircleGradient extends Component {
  static propTypes = {
    bottomText: PropTypes.string,
    className: PropTypes.string,
    color1: PropTypes.string,
    color2: PropTypes.string,
    direction: PropTypes.string,
    topText: PropTypes.string,
  }

  render() {
    const {
      bottomText,
      className,
      color1,
      color2,
      direction,
      topText,
    } = this.props

    return (
      <div className={classnames('apl-circle-gradient', className)}>
        <div className="apl-circle-gradient__text">{topText}</div>
        <div
          className="apl-circle-gradient__shape"
          style={{
            backgroundImage: `linear-gradient(${direction}, ${color1}, ${color2})`,
          }}
        />
        <div className="apl-circle-gradient__text">{bottomText}</div>
      </div>
    )
  }
}

export default AplCircleGradient
