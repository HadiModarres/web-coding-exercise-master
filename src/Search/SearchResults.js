import React from 'react'

class SearchResults extends React.Component{
  render() {
    return  <div className="br1 br--bottom flex flex-column w5 bb bl br b--light-gray border-box">
      {(this.props.data && this.props.data.length>0) ? (
        <div className="pv2">
          {this.props.data.map((searchResultObj,index) => (
            <button
              key={index}
              className="pv2 ph3 flex-grow-0 flex-shrink-0 b-white ba-0 b--white tl w-100 border-box"
              onClick={()=>this.props.searchResultClicked(searchResultObj)
              }
            >
              {searchResultObj.station.name}
            </button>
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
