import React from 'react'
const Joi = require('@hapi/joi');

// This component gets an air quality object and renders it
class AirQualityDisplay extends React.Component{
  constructor(props){
    super(props);

    // following fields are required, cancel render and show error if they dont exist
    this.schema = Joi.object({
      city: Joi.object({name: Joi.string(),
                        geo:Joi.array()}),
      aqi: Joi.number()

    })
  }

  getAqiColor(aqi){
    if (aqi>151){
      return "alert-danger";
    }else if(aqi>100){
      return "alert-warning";
    }else
      return "alert-success"
  }

  getIaqis(iaqi){
    let keys = Object.keys(iaqi);
    let out = [];
    for (let key of keys){
     out.push(<div key={out.length} className={"col-sm-6 col-md-3 text-center"}><span className={"font-weight-bold"}>{key.toLocaleUpperCase()}:</span> {iaqi[key]["v"]}</div>);
    }
    return out;
  }

  render(){
    if (!(this.schema.validate(this.props.airQualityData,{allowUnknown:true}).error === undefined)){
      return <div className={"alert alert-warning"}>Could not display data.</div>
    }else {

      let headerClass = "card-body alert "+this.getAqiColor(this.props.airQualityData.aqi);
      return <div className="card-2 fadeIn" style={{ margin: "auto" }}>
        <div className={headerClass}>
          <h4 >
          {this.props.airQualityData.city.name}
          </h4>
          <div className={""}>
            ({this.props.airQualityData.city.geo[0]}, {this.props.airQualityData.city.geo[1]})
          </div>
        </div>
        <div className="h4 pv2 ph3 flex justify-center items-center f1">
          AQI: {this.props.airQualityData.aqi}
        </div>
        <div className={"row my-2 mx-4"}>
          {this.props.airQualityData.iaqi && this.getIaqis(this.props.airQualityData.iaqi)}
        </div>
        <div className="f7 pv2">
          {this.props.airQualityData.attributions.map(({ url, name }, index) => (
            <div key={index} className="flex justify-between pv1 ph3">
              <div>{name}</div>
              <a href={url} className="blue pl3">{url}</a>
            </div>
          ))}
        </div>
      </div>
    }

  }
}

export default AirQualityDisplay;