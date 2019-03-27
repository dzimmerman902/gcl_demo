import React from 'react'
import { mount } from 'enzyme'
import { GclLink } from '../../GclLink'

import Chance from 'chance'

const chance = new Chance()
const randomURL = `/${chance.word()}`
const randomSentence = chance.sentence({ words: 5 })
const randomWord = chance.word()

const setup = propOverrides => {
  const props = Object.assign(
    {
      children: randomSentence,
      className: randomWord,
      href: randomURL
    },
    propOverrides
  )

  const wrapper = mount(<GclLink {...props} />)

  return {
    props,
    wrapper
  }
}

describe('<GclLink />', () => {
  it('renders children prop in good order', () => {
    const { wrapper } = setup()

    expect(wrapper.text()).toEqual(randomSentence)
  })

  it('renders className prop in good order', () => {
    const { wrapper } = setup()
    
    expect(wrapper.hasClass(randomWord)).toEqual(true)
  })

  it('renders href prop in good order', () => {
    const { wrapper } = setup({ to: '#gcllink' })

    expect(wrapper.exists(`a[href="${randomURL}"]`)).toEqual(true)
  })
})
