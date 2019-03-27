import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export class AplSidebarItem extends Component {
  state = {
    display:
      window.location.pathname.split('/')[1] === this.props.path || false,
  }

  static propTypes = {
    className: PropTypes.string,
  }

  static defaultProps = {
    className: null,
  }

  handleOnClick = () => {
    this.setState(prevState => ({
      display: !prevState.display,
    }))
  }

  render() {
    const { handleOnClick, props, state } = this
    const { children, className, path, text } = props
    const { display } = state

    const childrenWithProps = React.Children.map(children, child => {
      return React.cloneElement(child, { path })
    })

    return (
      <div className={classnames('apl-sidebar__item', className)}>
        <div className="apl-sidebar__item-text" onClick={handleOnClick}>
          {text}
          {children && (
            <i
              className={classnames(
                'apl-sidebar__arrow',
                `apl-sidebar__arrow--${display ? 'down' : 'up'}`
              )}
            />
          )}
        </div>
        {children && display && (
          <div className="apl-sidebar__sub-item">{childrenWithProps}</div>
        )}
      </div>
    )
  }
}
