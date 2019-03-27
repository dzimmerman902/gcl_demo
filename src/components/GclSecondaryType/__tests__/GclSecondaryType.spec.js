import React from 'react'
import { mount } from 'enzyme'
import { GclSecondaryType } from '../../GclSecondaryType'

import Chance from 'chance'

const chance = new Chance()
const randomSentence = chance.sentence({ words: 5 })
const randomWord = chance.word()

const setup = propOverrides => {
  const props = Object.assign(
    {
      children: randomSentence,
      className: randomWord,
    },
    propOverrides
  )

  const wrapper = mount(<GclSecondaryType {...props} />)

  return {
    props,
    wrapper
  }
}

describe('<GclSecondaryType />', () => {
  it('renders children prop in good order', () => {
    const { wrapper } = setup()

    expect(wrapper.text()).toEqual(randomSentence);
  })

  it('renders className prop in good order', () => {
    const { wrapper } = setup()

    expect(wrapper.hasClass(randomWord)).toEqual(true)
  })

  it('renders italic prop in good order', () => {
    const { wrapper } = setup({ italic: true });

    expect(wrapper.exists('.gcl-secondary-type--italic')).toEqual(true)
  })
})