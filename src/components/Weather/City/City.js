import React from "react";
import "./City.scss";

const City = (props) => {
  return (
    <div className="city">
      <p className="city-value">{props.value}</p>
    </div>
  );
};

export default City;

