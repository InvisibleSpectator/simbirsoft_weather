import React from "react";

const weekday = {
  weekday: "long",
};

//

const Day = (props) => {
  return (
    <div className="day">
      <span className="day-weekday">
        {new Date(props.day.dt * 1000).toLocaleString("ru", weekday)}
      </span>
      <span className="day-temperature--night">
        {props.isFahrenheit
          ? `${Math.round(props.temperatureConverter(props.day.temp.night))} °F`
          : `${Math.round(props.day.temp.night)} °C`}
      </span>
      <span className="day-temperature--day">
        {props.isFahrenheit
          ? `${Math.round(props.temperatureConverter(props.day.temp.day))} °F`
          : `${Math.round(props.day.temp.day)} °C`}
      </span>
      <img
        alt="weather icon"
        className="day-icon"
        src={`http://openweathermap.org/img/wn/${props.day.weather[0].icon}@2x.png`}
      ></img>
    </div>
  );
};

export default Day;
