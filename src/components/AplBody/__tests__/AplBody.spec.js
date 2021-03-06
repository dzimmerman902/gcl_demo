import React from 'react'
import { mount } from 'enzyme'
import { AplBody } from '../../AplBody'

import Chance from 'chance'

const chance = new Chance()
const randomSentence = chance.sentence({ words: 5 })
const randomWord = chance.word()

const setup = propOverrides => {
  const props = Object.assign(
    {
      children: randomSentence,
      className: randomWord
    },
    propOverrides
  )

  const wrapper = mount(<AplBody {...props} />)

  return {
    props,
    wrapper
  }
}

describe('<AplBody />', () => {
  it('renders children prop in good order', () => {
    const { wrapper } = setup()

    expect(wrapper.text()).toEqual(randomSentence)
  })

  it('renders className prop in good order', () => {
    const { wrapper } = setup()
    
    expect(wrapper.hasClass(randomWord)).toEqual(true)
  })
})
