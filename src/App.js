import React from 'react'
import * as R from 'ramda'
import 'tachyons'
import Header from './Header'
import Search from './Search/Search'
import AirQualityDisplay from './AirQualityDisplay'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state= { locationData: null};
    this.locationDataReceived = this.locationDataReceived.bind(this);
  }

  locationDataReceived(locationData){
    this.setState({locationData});
  }

  render() {
   return <div className="flex flex-column">
      <Header title={'Air Quality'}/>
      <div className="pa5 flex-grow-1 flex-shrink-0 flex items-start">
        <Search locationDataReceived={this.locationDataReceived}/>
        {this.state.locationData && <AirQualityDisplay airQualityData={this.state.locationData}/>}
      </div>
    </div>
  }
}

export default App;
