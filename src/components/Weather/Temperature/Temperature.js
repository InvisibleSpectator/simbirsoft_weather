import React from "react";
import "./Temperature.scss";

const Temperature = (props) => {
  return (
    <div className="temperature">
      <p className="temperature-value">
        {props.isFahrenheit
          ? `${Math.round(props.temperatureConverter(props.value))} °F`
          : `${Math.round(props.value)} °C`}
      </p>
    </div>
  );
};

export default Temperature;
