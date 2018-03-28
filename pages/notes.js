import React from 'react'
import Page from '../components/page'
import Items from '../components/items'



export default class extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      notes: props.items
    }
  }

  static async getInitialProps () {
    const items = await import('../data/notes.json')
    console.log('DADOS', items)
    return { items }
  }

  render () {
    return <Page>
      <Items items={this.state.notes} />
    </Page>
  }

}
