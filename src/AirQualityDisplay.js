import React from 'react'


class AirQualityDisplay extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return <div className="ba b--light-gray br1 ml5" style={{ width: 512 }}>
        <div className="pv2 ph3 flex justify-between">
          {this.props.airQualityData.city.name}
          <div>
            ({this.props.airQualityData.city.geo[0]}, {this.props.airQualityData.city.geo[1]})
          </div>
        </div>
        <div className="h4 pv2 ph3 flex justify-center items-center f1">
          {this.props.airQualityData.aqi}
        </div>
        <div className="f7 pv2">
          {this.props.airQualityData.attributions.map(({ url, name },index) => (
            <div key={index} className="flex justify-between pv1 ph3">
              <div>{name}</div>
              <div className="blue pl3">{url}</div>
            </div>
          ))}
        </div>
      </div>

  }
}

export default AirQualityDisplay;