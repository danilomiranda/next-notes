/* eslint-env jest */

import { shallow } from 'enzyme'
import React from 'react'

import Item from '../components/item'

describe('Item', () => {
  
  const item = shallow(<Item title='Stark' date='22/03/2018' />)

  it('Has a div with class title with text "Stark" ', () => {
    expect(item.find('div.title').text()).toEqual('Stark')
  })

  it('Has a div with class date with text "22/03/2018" ', () => {
    expect(item.find('div.date').text()).toEqual('22/03/2018')
  })
})
