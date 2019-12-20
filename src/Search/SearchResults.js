import React from 'react'

class SearchResults extends React.Component{
  render() {
    return  <div className="card">
      {(this.props.data && this.props.data.length>0) ? (
        <div className={"card-body"}>
          {this.props.data.map((searchResultObj,index) => (
            <div>
              <span className="card-body">
                {searchResultObj.station.name}
              </span>
              <button id="button-addon1" type="submit" className="btn"><i
                className="fa fa-cloud"/></button>
            </div>
          ))}
        </div>
      ) : (
        <div className="ph3 pv2 silver h4 flex items-center justify-center">
          Search for a city
        </div>
      )}
    </div>

  }
}

export default SearchResults
