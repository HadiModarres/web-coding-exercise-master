import React from 'react'
import SearchInput from './SearchInput'
import SearchResults from './SearchResults'

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.searchSubmitted = this.searchSubmitted.bind(this)
    this.searchResultClicked = this.searchResultClicked.bind(this)
    this.state = { searchResults: [] }
  }

  searchResultClicked(searchResult) {

  }

  async searchSubmitted(query) {
    let response = await fetch(
      `http://api.waqi.info/search/?keyword=${query}&token=8d8e978e647d2b0a8c17c04ba331c0117cd06dc8`,
    )
    let responses = await response.json()
    responses = responses.data
    console.log(responses)
    this.setState({ searchResults: responses },
    )
  }

  async searchResultClicked(searchResult) {

    let response = await fetch(
      `http://api.waqi.info/feed/${searchResult.station.name}/?token=8d8e978e647d2b0a8c17c04ba331c0117cd06dc8`,
    )
    let locationData = (await response.json()).data
    console.log(locationData)
    // this.props.locationDataReceived(searchResult);
  }

  render() {
    return <div>
      <SearchInput searchSubmitted={this.searchSubmitted}/>
      <SearchResults searchResultClicked={this.searchResultClicked} data={this.state.searchResults}/>
    </div>
  }
}

export default Search
