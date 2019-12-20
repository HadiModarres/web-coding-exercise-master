import React from 'react'
import 'tachyons'
import Header from './Header'
import Search from './Search/Search'
import AirQualityDisplay from './AirQualityDisplay'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state= { locationData: null};
    this.locationDataReceived = this.locationDataReceived.bind(this);
    this.searchInitiated = this.searchInitiated.bind(this);
  }

  locationDataReceived(locationData){
    this.setState({locationData});
  }


  searchInitiated(){
    this.setState({ locationData: null});
  }

  componentDidCatch(error, errorInfo) {
    // todo implement an error boundary here to complement other error handlings
  }


  render() {
   return <div>
      <Header title={'Air Quality Report'}/>
      <div style={{maxWidth: "600px"}} className="container float">
        <Search searchInitiated={this.searchInitiated} locationDataReceived={this.locationDataReceived}/>
        {(this.state.locationData)  && <AirQualityDisplay airQualityData={this.state.locationData}/>}
      </div>
    </div>
  }
}

export default App;
