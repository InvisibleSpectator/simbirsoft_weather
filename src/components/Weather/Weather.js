import React, { Fragment } from "react";
import "./Weather.scss";
import { Temperature } from "./Temperature";
import { City } from "./City";
import { Description } from "./Description";
import { Daily } from "./Daily";
import { Header } from "./Header";

import api from "../../utils/apiConnections";
import tokens from "../../utils/tokens";

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coords: JSON.parse(localStorage.getItem("coords")),
      city: "",
      isFahrenheit: +localStorage.getItem("isFahrenheit") || 0,
      weather: null,
    };
  }

  async componentDidMount() {
    if (!this.state.coords) await this.getCoords();
    await this.searchByWrittenCoords();
  }

  getPosition = () => {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };

  getCoords = async () => {
    const success = (position) => {
      const coords = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      };
      localStorage.setItem("coords", JSON.stringify(coords));
      this.state.coords = coords;
    };

    const error = async () => {
      const parseString = (str) => {
        const tempArray = str.split(",");
        const obj = {};
        obj.latitude = +tempArray[0];
        obj.longitude = +tempArray[1];
        return obj;
      };
      const coords = await api.ipinfoConnent(tokens.IPINFO);
      const tmp = parseString(coords.loc);
      localStorage.setItem("coords", JSON.stringify(tmp));
      this.state.coords = tmp;
    };

    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
    } else {
      try {
        success(await this.getPosition());
      } catch {
        await error();
      }
    }
  };

  searchByCity = async (city) => {
    const geocodeInfo = await api.opencageConnect(tokens.OPENCAGE, city, "ru");
    const coords = {
      latitude: geocodeInfo.results[0].geometry.lat,
      longitude: geocodeInfo.results[0].geometry.lng,
    };
    const weather = await this.getWeather(coords);
    this.setState((state) => {
      return {
        ...state,
        weather: weather,
        city:
          geocodeInfo.results[0].components.city ||
          geocodeInfo.results[0].components.town ||
          geocodeInfo.results[0].components.village ||
          geocodeInfo.results[0].components.hamlet ||
          geocodeInfo.results[0].components.state,
      };
    });
  };

  searchByWrittenCoords = async () => {
    const weather = await this.getWeather(this.state.coords);
    const city = await this.getCity();
    this.setState((state) => {
      return {
        ...state,
        weather: weather,
        city: city,
      };
    });
  };

  getWeather = async (coords) => {
    const weatherResponse = await api.openweatherConnect(
      tokens.OPENWEATHER,
      coords
    );
    return weatherResponse;
  };

  getCity = async () => {
    const geocodeInfo = await api.opencageConnect(
      tokens.OPENCAGE,
      +this.state.coords.latitude + "," + this.state.coords.longitude,
      "ru"
    );
    return (
      geocodeInfo.results[0].components.city ||
      geocodeInfo.results[0].components.town ||
      geocodeInfo.results[0].components.village ||
      geocodeInfo.results[0].components.hamlet ||
      geocodeInfo.results[0].components.state
    );
  };

  toggleFahrenheit = () => {
    this.setState((state) => {
      const newState = {
        ...state,
        isFahrenheit: Number(!state.isFahrenheit),
      };
      localStorage.setItem("isFahrenheit", newState.isFahrenheit);
      return newState;
    });
  };

  rememberMe = () => {
    this.setState((state) => {
      const newState = {
        ...state,
        coords: {
          latitude: state.weather.lat,
          longitude: state.weather.lon,
        },
      };
      localStorage.setItem("coords", JSON.stringify(newState.coords));
      return newState;
    });
  };

  findMe = async () => {
    await this.getCoords();
    await this.searchByWrittenCoords();
  };

  celsiusToFahrenheit = (celsius) => {
    return celsius * 1.8 + 32;
  };

  render() {
    if (!this.state.weather) {
      return (
        <div className="spinner-contaner">
          <div class="spinner spinner-4" />
        </div>
      );
    } else {
      return (
        <Fragment>
          <div className="wrapper">
            <Header
              isFahrenheit={this.state.isFahrenheit}
              onSearch={this.searchByCity}
              onSearchFailed={this.searchByWrittenCoords}
              onToggleUnits={this.toggleFahrenheit}
              rememberMe={this.rememberMe}
              findMe={this.findMe}
            />
            <City value={this.state.city} />
            <Temperature
              value={this.state.weather.current.temp}
              isFahrenheit={this.state.isFahrenheit}
              temperatureConverter={this.celsiusToFahrenheit}
            />
            <Description
              isFahrenheit={this.state.isFahrenheit}
              angle={this.state.weather.current.wind_deg}
              feels_like={this.state.weather.current.feels_like}
              description={this.state.weather.current.weather[0].description}
              icon={this.state.weather.current.weather[0].icon}
              humidity={this.state.weather.current.humidity}
              wind_speed={this.state.weather.current.wind_speed}
              temperatureConverter={this.celsiusToFahrenheit}
            />
            <Daily
              days={this.state.weather.daily.slice(1, 5)}
              isFahrenheit={this.state.isFahrenheit}
              temperatureConverter={this.celsiusToFahrenheit}
            />
          </div>
          <div
            className="background"
            style={{
              backgroundImage:
                'url("https://krot.info/uploads/posts/2020-01/1579540320_14-37.png")',
            }}
          ></div>
        </Fragment>
      );
    }
  }
}

export default Weather;
