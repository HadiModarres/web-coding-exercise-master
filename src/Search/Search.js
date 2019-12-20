import React from 'react'
import SearchInput from './SearchInput'
import SearchResults from './SearchResults'

class Search extends React.Component {
  constructor(props){
    super(props);
    this.searchSubmitted = this.searchSubmitted.bind(this);
    this.state = {searchResults:[]}
  }

  async searchSubmitted(query){
    let response = await fetch(
      `http://api.waqi.info/search/?keyword=${query}&token=8d8e978e647d2b0a8c17c04ba331c0117cd06dc8`,
    );
    let responses = await response.json().data;
    console.log(responses);


    this.setState({searchResults:responses}
    );
  }

  render() {
    return <div>
      <SearchInput searchSubmitted={this.searchSubmitted}/>
      {/*<SearchResults data={this.state.searchResults}/>*/}
    </div>
  }
}

export default Search
