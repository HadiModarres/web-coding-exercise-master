import React from 'react'
import SearchInput from './SearchInput'
import SearchResults from './SearchResults'

class Search extends React.Component {
  render() {
    return <div>
      <SearchInput/>
      <SearchResults/>
    </div>
  }
}

export default Search
