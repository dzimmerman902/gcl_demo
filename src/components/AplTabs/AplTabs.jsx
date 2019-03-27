import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

class AplTabs extends Component {
  state = {
    active: '' || this.props.default,
  }

  static propTypes = {
    className: PropTypes.string,
  }

  static defaultProps = {
    className: null,
  }

  handleActiveClick = e => {
    this.setState({
      active: e.target.dataset.id,
    })
  }

  render() {
    const { handleActiveClick, props, state } = this
    const { children, className } = props
    const { active } = state

    const childrenWithProps = React.Children.map(children, child => {
      return React.cloneElement(child, { active, handleActiveClick })
    })

    return (
      <div className={classnames('apl-tabs', className)}>
        {childrenWithProps}
      </div>
    )
  }
}

export default AplTabs
