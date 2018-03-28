/* eslint-env jest */

import React from 'react';
import Notes from '../pages/notes'
import renderer from 'react-test-renderer';

test('Snapshow of Notes', () => {
  const notes = renderer.create(
    <Notes items={[
      {
        "_id": 0,
        "title": "Stark",
        "date": "22/03/2018"
      },
      {
        "_id": 1,
        "title": "Lannister",
        "date": "01/04/2017"
      },
      {
        "_id": 2,
        "title": "Targaryen",
        "date": "22/04/2017"
      },
      {
        "_id": 3,
        "title": "Karstark",
        "date": "22/04/2017"
      },
      {
        "_id": 4,
        "title": "Bolton",
        "date": "02/07/2017"
      },
      {
        "_id": 5,
        "title": "Martell",
        "date": "02/10/2017"
      }
    ]}/>
  )

  let tree = notes.toJSON()
  expect(tree).toMatchSnapshot()
});