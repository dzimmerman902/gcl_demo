import React from 'react'
import { mount } from 'enzyme'
import { GclButton, BUTTON_COLORS } from '../../GclButton'
import { randomArrayItem } from '../../../utils/randomArrayItem'

import Chance from 'chance'

const chance = new Chance()
const randomColor = randomArrayItem(BUTTON_COLORS)
const randomSentence = chance.sentence({ words: 5 })
const randomWord = chance.word()

const setup = propOverrides => {
  const props = Object.assign(
    {
      children: randomSentence,
      className: randomWord,
      color: randomColor,
    },
    propOverrides
  )

  const wrapper = mount(<GclButton {...props} />)

  return {
    props,
    wrapper,
  }
}

describe('<GclButton />', () => {
  it('render block prop in good order', () => {
    const { wrapper } = setup({ block: true })

    expect(wrapper.exists('.gcl-button--block')).toEqual(true)
  })

  it('render children prop in good order', () => {
    const { wrapper } = setup()

    expect(wrapper.text()).toEqual(randomSentence)
  })

  it('renders className prop in good order', () => {
    const { wrapper } = setup()

    expect(wrapper.hasClass(randomWord)).toEqual(true)
  })

  it('renders color prop in good order', () => {
    const { wrapper } = setup()
    
    expect(wrapper.exists(`.gcl-button--${randomColor}`)).toEqual(true)
  })
})
