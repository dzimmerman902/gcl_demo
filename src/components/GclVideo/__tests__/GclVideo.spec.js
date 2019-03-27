import React from 'react'
import { mount } from 'enzyme'
import { GclVideo, VIDEO_SIZES } from '../../GclVideo'
import { randomArrayItem } from '../../../utils/randomArrayItem'

import Chance from 'chance'

const chance = new Chance()
const randomSentence = chance.sentence({ words: 5 })
const randomSize = randomArrayItem(VIDEO_SIZES)
const randomSrc = 'https://via.placeholder.com/310x175'
const randomWord = chance.word()

const setup = propOverrides => {
  const props = Object.assign(
    {
      className: randomWord,
      size: randomSize
    },
    propOverrides
  )

  const wrapper = mount(<GclVideo {...props} />)

  return {
    props,
    wrapper
  }
}

describe('<GclVideo />', () => {
  it('renders className prop in good order', () => {
    const { wrapper } = setup()

    expect(wrapper.hasClass(randomWord)).toEqual(true)
  })

  it('renders description prop in good order', () => {
    const { wrapper } = setup({ description: randomSentence })

    expect(wrapper.exists('.gcl-video__description')).toEqual(true)
  })

  it('renders length prop in good order', () => {
    const { wrapper } = setup({ length: randomSentence })

    expect(wrapper.exists('.gcl-video__length')).toEqual(true)
  })

  it('renders name prop in good order', () => {
    const { wrapper } = setup({ name: randomSentence })

    expect(wrapper.exists('.gcl-video__name')).toEqual(true)
  })

  it('renders series prop in good order', () => {
    const { wrapper } = setup({ series: randomSentence })

    expect(wrapper.exists('.gcl-video__series')).toEqual(true)
  })

  it('renders size prop in good order', () => {
    const { wrapper } = setup()

    expect(wrapper.exists(`.gcl-video__img--${randomSize}`)).toEqual(true)
  })

  it('renders src prop in good order', () => {
    const { wrapper } = setup({ src: randomSrc })
    
    expect(wrapper.exists(`img[src="${randomSrc}"]`)).toEqual(true)
  })
})