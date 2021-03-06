import React from 'react'
import SearchInput from './SearchInput'
import SearchResults from './SearchResults'


 // Responsibility: communicating with the API and coordinates SearchInput and SearchResults

 // Note: The acquired data object from the API was used directly in this app, this highly ties the implementation to the API
 //    To decouple it from the API, a standard air quality object should be defined, and this APIs object be converted to it

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.searchSubmitted = this.searchSubmitted.bind(this)
    this.searchResultClicked = this.searchResultClicked.bind(this)
    this.state = { searchResults: [], error:null }
  }

  async searchSubmitted(query) {
    this.props.searchInitiated();
    try {

      let response = await fetch(
        `http://api.waqi.info/search/?keyword=${query}&token=8d8e978e647d2b0a8c17c04ba331c0117cd06dc8`,
      )
      let responses = (await response.json()).data;
      this.setState({ searchResults: responses },
      )
    }catch (e) {
      this.setState({error: e.message});
    }
  }

  async searchResultClicked(searchResult) {
    try {
      let response = await fetch(
        `http://api.waqi.info/feed/${searchResult.station.name}/?token=8d8e978e647d2b0a8c17c04ba331c0117cd06dc8`,
      )
      let locationData = (await response.json()).data
      this.setState({ searchResults: [] });
      this.props.locationDataReceived(locationData);
    }catch (e) {
      this.setState({error: e.message});
    }
  }

  render() {
    return <div className={"mt-5"}>
      <SearchInput searchSubmitted={this.searchSubmitted}/>
      {this.state.error ? <div>this.state.error</div>:
        <SearchResults searchResultClicked={this.searchResultClicked} data={this.state.searchResults}/>
      }
    </div>
  }
}

export default Search
