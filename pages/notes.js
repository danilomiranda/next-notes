import React from 'react'
import Page from '../components/page'
import Items from '../components/items'



export default class extends React.Component {

  static async getInitialProps () {
    const items = await import('../data/notes.json')
    console.log('DADOS', items)
    return { items }
  }

  render () {
    const { items } = this.props
    return <Page>
      <Items items={items} />
    </Page>
  }

}
