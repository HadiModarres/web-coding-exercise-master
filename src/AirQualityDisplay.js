import React from 'react'
const Joi = require('@hapi/joi');


class AirQualityDisplay extends React.Component{
  constructor(props){
    super(props);
    this.schema = Joi.object({
      city: Joi.object({name: Joi.string(),
                        geo:Joi.array()}),
      aqi: Joi.number()

    })
  }

  render(){
    if (!(this.schema.validate(this.props.airQualityData,{allowUnknown:true}).error === undefined)){
      return <div className={"alert alert-warning"}>Could not display data.</div>
    }else {
      return <div className="card-2 fadeIn" style={{ margin: "auto" }}>
        <div className="card-body">
          <h4>
          {this.props.airQualityData.city.name}
          </h4>
          <div className={""}>
            ({this.props.airQualityData.city.geo[0]}, {this.props.airQualityData.city.geo[1]})
          </div>
        </div>
        <div className="h4 pv2 ph3 flex justify-center items-center f1">
          AQI: {this.props.airQualityData.aqi}
        </div>
        <div className="f7 pv2">
          {this.props.airQualityData.attributions.map(({ url, name }, index) => (
            <div key={index} className="flex justify-between pv1 ph3">
              <div>{name}</div>
              <div className="blue pl3">{url}</div>
            </div>
          ))}
        </div>
      </div>
    }

  }
}

export default AirQualityDisplay;