import React from 'react'
import Page from '../components/page'
import Items from '../components/items'
import Search from '../components/search'
import Fuse from 'fuse.js'

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
    var options = {
      shouldSort: true,
      keys: [
        "title"
    ]
    };
    this.setState(currentState => {
      const fuse = new Fuse(currentState.notes, options);
      return {
        notesFiltered: query ? fuse.search(query) : currentState.notes
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
