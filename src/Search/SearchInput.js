import React from 'react'

// Shows the search input to the user
class SearchInput extends React.Component {
  constructor(props) {
    super(props)
    this.searchSubmitted = this.searchSubmitted.bind(this)
    this.searchFieldChanged = this.searchFieldChanged.bind(this)
    this.state= {query:""}
  }

  searchSubmitted(event) {
    event.preventDefault()
    this.props.searchSubmitted(this.state.query);
  }

  searchFieldChanged(event) {
    this.setState({ query: event.target.value });
  }

  render() {
    return <form className="flex" onSubmit={this.searchSubmitted}>
      <div className="input-group p-1 bg-light rounded rounded-pill shadow-sm mb-4">
        <input
          type="search"
          placeholder="Search Locations"
          onChange={this.searchFieldChanged}
          className="form-control border-0 bg-light"
        />
        <div className="input-group-append">
          <button id="button-addon1" type="submit" className="btn btn-link text-primary"><i
  className="fa fa-search"/></button>
        </div>
      </div>


    </form>

  }
}

export default SearchInput

