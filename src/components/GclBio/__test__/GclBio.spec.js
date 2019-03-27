import React from 'react'
import { mount } from 'enzyme'
import { GclBio, BIO_SIZES } from '../../GclBio'
import { randomArrayItem } from '../../../utils/randomArrayItem'

import Chance from 'chance'

const chance = new Chance()
const randomName = chance.name()
const randomSentence = chance.sentence({ words: 5 })
const randomSize = randomArrayItem(BIO_SIZES)
const randomSrc = `https://avatars.dicebear.com/v2/male/${randomName.replace(
  /\s/g,
  ''
)}.svg`
const randomWord = chance.word()

const setup = propOverrides => {
  const props = Object.assign(
    {
      className: randomWord,
      name: randomName,
      size: randomSize,
      subText: randomSentence,
      src: randomSrc,
    },
    propOverrides
  )

  const wrapper = mount(<GclBio {...props} />)

  return {
    props,
    wrapper,
  }
}

describe('<GclBio />', () => {
  it('renders className prop in good order', () => {
    const { wrapper } = setup()

    expect(wrapper.hasClass(randomWord)).toEqual(true)
  })

  it('renders name prop in good order', () => {
    const { wrapper } = setup()

    expect(wrapper.find('.gcl-bio__name').text()).toEqual(randomName)
  })

  it('renders size prop in good order', () => {
    const { wrapper } = setup()

    expect(wrapper.exists(`.gcl-bio__image--${randomSize}`)).toEqual(true)
  })

  it('renders src prop in good order', () => {
    const { wrapper } = setup()

    expect(wrapper.exists(`[src="${randomSrc}"]`)).toEqual(true)
  })

  it('renders subText prop in good order', () => {
    const { wrapper } = setup()

    expect(wrapper.find('.gcl-bio__sub-text').text()).toEqual(randomSentence)
  })
})
