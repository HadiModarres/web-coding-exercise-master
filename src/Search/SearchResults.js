import React from 'react'

// Shows the search results
class SearchResults extends React.Component{
  render() {
    return  <div  className="selection-area">
      {(this.props.data && this.props.data.length>0) && (
        <div className={""}>
          {this.props.data.map((searchResultObj,index) => (
            <div key={index}>
            <button  onClick={()=>this.props.searchResultClicked(searchResultObj)} className={"btn btn-link block w-100"}>
                {searchResultObj.station.name}
            </button>
            </div>
          ))}
        </div>
      )}
    </div>
  }
}

export default SearchResults
