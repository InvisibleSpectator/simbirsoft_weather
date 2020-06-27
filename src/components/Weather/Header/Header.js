import React, { Fragment } from "react";

import "./Header.scss";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.cityInput = React.createRef();
  }

  getServerInfo = async (success, error) => {
    const tmp = this.cityInput.current.value;
    this.cityInput.current.value = "";
    if (tmp.length > 1) {
      try {
        await success(tmp);
      } catch (e) {
        await error();
      }
    } else {
      await error();
    }
  };

  render() {
    return (
      <Fragment>
        <div className="searchbar">
          <input
            className="searchbar-input"
            type="text"
            ref={this.cityInput}
            onKeyDown={(e) => {
              if (e.keyCode === 13) {
                this.cityInput.current.blur();
                this.getServerInfo(
                  this.props.onSearch,
                  this.props.onSearchFailed
                );
              }
            }}
          />
          <button
            className="button  button-search"
            onClick={() => {
              this.getServerInfo(
                this.props.onSearch,
                this.props.onSearchFailed
              );
            }}
          >
            <img
              alt="search"
              className="button-icon"
              src="https://img.icons8.com/material-two-tone/48/000000/search.png"
            />
          </button>
        </div>
        <div className="controls">
          <button
            className="button"
            onClick={this.props.rememberMe}
            title="Установить местоположение"
          >
            <img
              alt="remember me"
              className="button-icon"
              src="https://img.icons8.com/material-two-tone/48/000000/location-update.png"
            />
          </button>
          <button className="button" onClick={this.props.findMe} title="Определить местоположение">
            <img
              alt="find me"
              className="button-icon"
              src="https://img.icons8.com/material-two-tone/48/000000/near-me.png"
            />
          </button>

          <label className="controls-units">
            <input
              className="controls-units--disabled"
              type="checkbox"
              onChange={this.props.onToggleUnits}
              checked={this.props.isFahrenheit}
            />
            <div className="controls-units--control" />
          </label>
        </div>
      </Fragment>
    );
  }
}

export default Header;
