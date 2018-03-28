import React from 'react'
import Page from '../components/page'
import Items from '../components/items'
import Search from '../components/search'

export default class extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      notes: props.items,
      notesFiltered: props.items,
      searchQuery: ''
    }
  }

  static async getInitialProps () {
    const items = await import('../data/notes.json')
    console.log('DADOS', items)
    return { items }
  }

  search = query => {
    this.setState({ searchQuery: query })
    console.log(query)
    this.setState(currentState => {
      return {
        notesFiltered: currentState.notes.filter(item => query ? item.title === query : true)
      }
    })
  }

  render () {
    return <Page>
      <Search searchQuery={this.state.searchQuery} onSearch={this.search} />
      <Items items={this.state.notesFiltered} />
    </Page>
  }

}
