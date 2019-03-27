import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export class AplSidebarSubItem extends Component {
  static propTypes = {
    className: PropTypes.string,
  }

  static defaultProps = {
    className: null,
  }

  getActiveClass = () => {
    const { subPath } = this.props
    const windowPath = window.location.pathname.split('/')[2]

    if (subPath === windowPath) {
      return 'active'
    }

    return null
  }

  render() {
    const { getActiveClass, props } = this
    const { className, path, subPath, text } = props

    return (
      <a
        href={`/${path}/${subPath}`}
        className={classnames(
          'apl-sidebar__sub-item-text',
          getActiveClass(),
          className
        )}>
        {text}
      </a>
    )
  }
}
