import React from 'react'


class AirQualityDisplay extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return <div></div>
    // return  {feed && (
    //   <div className="ba b--light-gray br1 ml5" style={{ width: 512 }}>
    //     <div className="pv2 ph3 flex justify-between">
    //       {feed.city.name}
    //       <div>
    //         ({feed.city.geo[0]}, {feed.city.geo[1]})
    //       </div>
    //     </div>
    //     <div className="h4 pv2 ph3 flex justify-center items-center f1">
    //       {feed.aqi}
    //     </div>
    //     <div className="f7 pv2">
    //       {feed.attributions.map(({ url, name }) => (
    //         <div className="flex justify-between pv1 ph3">
    //           <div>{name}</div>
    //           <div className="blue pl3">{url}</div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // )}
  }
}