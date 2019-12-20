import React from 'react'

class SearchInput extends React.Component {
  constructor(props) {
    super(props)
    this.searchSubmitted = this.searchSubmitted.bind(this)
    this.searchFieldChanged = this.searchFieldChanged.bind(this)
    this.state= {query:""}
  }

  searchSubmitted(event) {
    event.preventDefault()
    // fetch(
    //   `http://api.waqi.info/search/?keyword=${search}&token=8d8e978e647d2b0a8c17c04ba331c0117cd06dc8`,
    // )
    //   .then(R.invoker(0, 'json'))
    //   .then(R.prop('data'))
    //   .then(setSearchData)
    this.props.searchSubmitted(this.state.query);
  }

  searchFieldChanged(event) {
    // R.compose(
    //   setSearch,
    //   R.prop('value'),
    //   R.prop('target'),
    // )
    console.log(event.target.value);
    this.setState({ query: event.target.value });
  }

  render() {
    return <form className="flex" onSubmit={this.searchSubmitted}>
      <div className="w5 flex items-center">
        <input
          type="text"
          // value={search}
          placeholder="Melbourne"
          onChange={this.searchFieldChanged}
          className="br1 br--top br--left ba b--light-gray ph3 pv2 flex-grow-1 flex-shrink-1"
        />
        <button
          type="submit"
          className="br1 bl-0 br--top br--right b--light-gray white pa2 right-0 flex-grow-0 flex-shrink-0"
        >
              <span role="img" aria-label="search">
                🕵️
              </span>
        </button>
      </div>
    </form>
  }
}

export default SearchInput

