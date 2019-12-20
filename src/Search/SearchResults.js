import React from 'react'

class SearchResults extends React.Component{
  render() {
    return  <div className="br1 br--bottom flex flex-column w5 bb bl br b--light-gray border-box">
      {searchData ? (
        <div className="pv2">
          {this.props.data.map(({ station: { name } }) => (
            <button
              className="pv2 ph3 flex-grow-0 flex-shrink-0 b-white ba-0 b--white tl w-100 border-box"
              onClick={() =>{console.log(name);}
                // fetch(
                //   `http://api.waqi.info/feed/${name}/?token=8d8e978e647d2b0a8c17c04ba331c0117cd06dc8`
                // )
                //   .then(R.invoker(0, 'json'))
                //   .then(R.prop('data'))
                //   .then(setFeed)
              }
            >
              {name}
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
