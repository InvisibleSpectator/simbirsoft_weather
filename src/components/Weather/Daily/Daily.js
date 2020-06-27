import React from "react";
import "./Daily.scss";
import { Day } from "./Day";

const Daily = (props) => {
  return (
    <div className="daily">
      {props.days.map((day, index) => {
        return (
          <Day
            key={index}
            day={day}
            isFahrenheit={props.isFahrenheit}
            temperatureConverter={props.temperatureConverter}
          />
        );
      })}
    </div>
  );
};

export default Daily;
