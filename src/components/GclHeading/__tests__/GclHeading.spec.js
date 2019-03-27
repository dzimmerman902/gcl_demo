import React from 'react'
import { mount } from 'enzyme'
import { GclHeading, HEADING_SIZES } from '../../GclHeading'
import { randomArrayItem } from '../../../utils/randomArrayItem'

import Chance from 'chance'

const chance = new Chance()
const randomSentence = chance.sentence({ words: 5 })
const randomSize = randomArrayItem(HEADING_SIZES);
const randomWord = chance.word()

const setup = propOverrides => {
  const props = Object.assign(
    {
      children: randomSentence,
      className: randomWord,
      size: randomSize
    },
    propOverrides
  )

  const wrapper = mount(<GclHeading {...props} />)

  return {
    props,
    wrapper
  }
}

describe('<GclHeading />', () => {
  it('renders children prop in good order', () => {
    const { wrapper } = setup()

    expect(wrapper.text()).toEqual(randomSentence);
  })

  it('renders className prop in good order', () => {
    const { wrapper } = setup()

    expect(wrapper.hasClass(randomWord)).toEqual(true)
  })

  it('renders size prop in good order', () => {
    const { wrapper } = setup();

    expect(wrapper.exists(`.gcl-heading--${randomSize}`)).toEqual(true)
  })
})