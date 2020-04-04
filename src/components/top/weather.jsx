import React from "react";

export default class Weather extends React.Component {
   constructor(props) {
      super(props);
}

render() {
  const { location, temp_c, isDay, iconURL } = this.props;

  return
    <div className="weather-container">
      <div className="header">{location}</div>
      <div className="inner-container"></div>
      <div className="image">
        <img src={iconURL} />
       </div>
        <div className="current-weather" >{temp_c}</div>
        </div>
        <div className="footer">{text}
        </div>
     ):
    
    }
