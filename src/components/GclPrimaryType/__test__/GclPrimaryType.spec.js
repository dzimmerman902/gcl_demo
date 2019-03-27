import React from 'react'
import { mount } from 'enzyme'
import { GclPrimaryType, PRIMARY_TYPE_WEIGHT } from '../../GclPrimaryType'
import { randomArrayItem } from '../../../utils/randomArrayItem'
import Chance from 'chance'

const chance = new Chance()
const randomSentence = chance.sentence({ words: 5 })
const randomWeight = randomArrayItem(PRIMARY_TYPE_WEIGHT)
const randomWord = chance.word()

const setup = propOverrides => {
  const props = Object.assign(
    {
      children: randomSentence,
      className: randomWord,
      weight: randomWeight,
    },
    propOverrides
  )

  const wrapper = mount(<GclPrimaryType {...props} />)

  return {
    props,
    wrapper,
  }
}

describe('<GclPrimaryType />', () => {
  it('renders children prop in good order', () => {
    const { wrapper } = setup()

    expect(wrapper.text()).toEqual(randomSentence)
  })

  it('renders className prop in good order', () => {
    const { wrapper } = setup()

    expect(wrapper.hasClass(randomWord)).toEqual(true)
  })

  it('renders weight prop in good order', () => {
    const { wrapper } = setup()

    expect(wrapper.exists(`.gcl-primary-type--${randomWeight}`)).toEqual(true)
  })
})
