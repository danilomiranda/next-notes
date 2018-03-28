/* eslint-env jest */

import { shallow } from 'enzyme'
import React from 'react'

import Items from '../components/items'

import notes from '../data/notes.json'

describe('Items', () => {
  
  const items = shallow(<Items items={notes} />)

  it('Has h3 with text "Notas" ', () => {
    expect(items.find('h3').text()).toEqual('Notas')
  })

  it('Have 6 divs with classname "item" ', () => {
    expect(items.find('div.item')).toHaveLength(6)
  })

})
