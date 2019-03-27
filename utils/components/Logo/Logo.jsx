import React, { Component } from 'react'
import logoWhite from '../../../src/images/logo-white.png'
import './_Logo.scss'

import { GclLogo } from '../../../src/components/GclLogo'

class Logo extends Component {
  render() {
    return (
      <div className="styleguide-logo">
        <GclLogo src={logoWhite} />
      </div>
    )
  }
}

export default Logo
