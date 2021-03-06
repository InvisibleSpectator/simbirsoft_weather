import React from "react";
import "./Description.scss";

const Description = (props) => {
  return (
    <div className="description">
      <svg
        className="description-icon"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g class="layer">
          <title>background</title>
          <rect
            x="-0.05078"
            y="-1"
            width="514"
            height="514"
            id="canvas_background"
            fill="none"
          />
          <text
            stroke="#000000"
            text-anchor="middle"
            font-family="Monospace"
            font-size="84"
            id="svg_7"
            y="84.31423"
            x="250.40105"
            stroke-width="0"
            fill="#000000"
          >
            N
          </text>
          <text
            fill="#000000"
            stroke="#000000"
            stroke-width="0"
            stroke-dasharray="null"
            stroke-linejoin="null"
            stroke-linecap="null"
            x="249.48435"
            y="478.3281"
            id="svg_9"
            font-size="84"
            font-family="Monospace"
            text-anchor="middle"
          >
            S
          </text>
          <text
            text-anchor="middle"
            font-family="Monospace"
            font-size="84"
            id="svg_10"
            y="279.38281"
            x="46.69531"
            stroke-linecap="null"
            stroke-linejoin="null"
            stroke-dasharray="null"
            stroke-width="0"
            stroke="#000000"
            fill="#000000"
          >
            W
          </text>
          <text
            fill="#000000"
            stroke="#000000"
            stroke-width="0"
            stroke-dasharray="null"
            stroke-linejoin="null"
            stroke-linecap="null"
            x="448.99998"
            y="276.50778"
            id="svg_11"
            font-size="84"
            font-family="Monospace"
            text-anchor="middle"
          >
            E
          </text>
        </g>
        <g display="inline" class="layer">
          <title>Layer 1</title>
          <g id="svg_8">
            <g id="svg_1">
              <g id="svg_2">
                <path
                  d="m250.38281,100.71877c-82.41495,0 -149.63281,67.21787 -149.63281,149.6328s67.21787,149.6328 149.63281,149.6328s149.63281,-67.21787 149.63281,-149.6328s-67.21787,-149.6328 -149.63281,-149.6328zm19.87311,287.57555l-15.78158,-25.71814c-1.75351,-2.92252 -6.42953,-2.92252 -8.18305,0l-15.78158,25.71814c-61.37283,-8.76755 -109.3021,-56.6968 -118.06965,-118.06964l25.71814,-15.78158c1.75351,-0.5845 2.33802,-2.33802 2.33802,-4.09152c0,-1.75351 -0.5845,-3.50702 -2.33802,-4.09152l-25.71814,-15.78158c8.76755,-61.37283 56.69681,-109.30209 118.06965,-118.06964l15.78158,16.95059c1.75351,2.92252 6.42953,2.92252 8.18305,0l15.78158,-16.95059c61.37283,8.76755 109.3021,56.6968 118.06965,118.06964l-25.71814,15.78158c-1.75351,0.5845 -2.33802,2.33802 -2.33802,4.09152c0,1.75351 0.5845,3.50702 2.33802,4.09152l25.71814,15.78158c-8.76755,61.37283 -56.69681,109.30209 -118.06965,118.06964z"
                  id="svg_3"
                />
              </g>
            </g>
            <g id="svg_4">
              <g id="svg_5">
                <path
                  transform={`rotate(${props.angle} 250,250)`}
                  id="svg_6"
                  d="m311.81235,245.61827l-42.52553,-14.17537l-13.12268,-39.36862c3.13236,-2.47887 6.29451,-3.73089 9.42219,-3.69581c6.23957,0.17944 10.93313,5.36691 10.96294,5.39671c0.97261,1.12225 2.36432,1.71085 3.76596,1.71085c0.93287,0 1.87041,-0.25952 2.70332,-0.79784c2.08493,-1.35196 2.85822,-4.02489 1.82073,-6.27932l-29.92656,-64.84068c-0.81772,-1.76579 -2.58351,-2.89797 -4.52873,-2.89797s-3.71101,1.13218 -4.52873,2.89797l-29.92656,64.84068c-1.0375,2.25442 -0.2642,4.92795 1.82073,6.27932c2.08493,1.35196 4.85313,0.95274 6.46928,-0.91767c0.04968,-0.04968 4.67837,-5.17753 10.89339,-5.39204c3.14755,-0.05962 6.33952,1.1918 9.49175,3.69581l-13.12268,39.36862l-42.52553,14.17537c-2.03992,0.68328 -3.41175,2.58351 -3.41175,4.73331s1.37183,4.05528 3.41175,4.73331l42.1117,14.03568l5.17753,27.61719l-18.01556,9.00777c-1.69097,0.84285 -2.75828,2.56889 -2.75828,4.45918l0,34.91412c0,1.79559 0.96268,3.45675 2.52856,4.33935c0.76336,0.4337 1.61089,0.64821 2.45901,0.64821c0.88786,0 1.77572,-0.23438 2.56889,-0.7131l20.75395,-12.45459l1.70558,9.09253c0.4337,2.36432 2.49875,4.07515 4.89813,4.07515s4.46385,-1.71085 4.89813,-4.06989l1.70558,-9.09253l20.75395,12.45459c0.79317,0.47403 1.68103,0.70842 2.56889,0.70842c0.84812,0 1.69564,-0.21452 2.45901,-0.64821c1.56646,-0.8826 2.52856,-2.54376 2.52856,-4.33935l0,-34.91472c0,-1.89028 -1.0673,-3.61632 -2.75828,-4.46385l-18.01088,-9.0031l5.17753,-27.61719l42.1117,-14.03568c2.03524,-0.67861 3.40649,-2.58351 3.40649,-4.73331s-1.37358,-4.05002 -3.4135,-4.73331l-0.00003,0.00001zm-61.42953,19.69659c-8.24968,0 -14.96328,-6.7136 -14.96328,-14.96328s6.7136,-14.96328 14.96328,-14.96328s14.96328,6.7136 14.96328,14.96328s-6.7136,14.96328 -14.96328,14.96328z"
                />
              </g>
            </g>
          </g>
        </g>
      </svg>
      <div className="description-digits">
        <p className="description-digits-row">
          <span>Влажность</span>
          <span>{props.humidity}%</span>
        </p>
        <p className="description-digits-row">
          <span>Ощущается</span>
          <span>
            {props.isFahrenheit
              ? `${Math.round(props.temperatureConverter(props.feels_like))} °F`
              : `${Math.round(props.feels_like)} °C`}
          </span>
        </p>
        <p className="description-digits-row">
          <span>Ветер</span>
          <span>{props.wind_speed} м/с</span>
        </p>
        <span> {props.description}</span>
      </div>
      <img
        alt="weather-icon"
        className="description-icon"
        src={`http://openweathermap.org/img/wn/${props.icon}@4x.png`}
      ></img>
    </div>
  );
};

export default Description;
