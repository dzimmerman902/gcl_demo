import React from 'react'
import { mount } from 'enzyme'
import{ GclLogo } from '../../GclLogo'

import Chance from 'chance'

const chance = new Chance()
const randomWord = chance.word()

const setup = propOverrides => {
  const props = Object.assign(
    {
      className: randomWord,
      src: randomWord
    },
    propOverrides
  )

  const wrapper = mount(<GclLogo {...props} />)

  return {
    props,
    wrapper
  }
}

describe('<GclLogo />', () => {
  it('render className prop in good order', () => {
    const { wrapper } = setup()

    expect(wrapper.hasClass(randomWord)).toEqual(true)
  })

  it('render src prop in good order', () => {
    const { wrapper } = setup()

    expect(wrapper.exists(`[src="${randomWord}"]`)).toEqual(true)
  })
})