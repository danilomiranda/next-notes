/* eslint-env jest */

import { shallow } from 'enzyme'
import React from 'react'

import Header from '../components/header'

describe('With Enzyme', () => {
  it('Header has span with text "Notes" ', () => {
    const app = shallow(<Header />)
    expect(app.find('span.title').text()).toEqual('Notes')
  })
})
