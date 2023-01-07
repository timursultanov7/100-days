import React, { useState, useEffect } from "react";
import "../styles/weatherApp.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const WeatherApp = () => {
  const [city, setCity] = useState("");

  // console.log(currWeather);

  // console.log(city);

  const [currWeather, setCurrWeather] = useState({});

  const apiKey = "79cf8c0f1b363f65c6857d0def418885";

  const date = new Date();

  // const numer = date.getDay();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  // console.log(day, month, year);

  const getWeather = async (e) => {
    if (e.key == "Enter") {
      // console.log(e);
      try {
        const res = await fetch(
          `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${apiKey}`
        );
        const data = await res.json();

        setCurrWeather(data);
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleClick = async () => {
    try {
      const res = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${apiKey}`
      );
      const data = await res.json();

      setCurrWeather(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <div className="left-side">
        <main className="main">
          <h2 className="slogan">The Only Weather App You Need !</h2>
          <div className="search-bar">
            <input
              value={city}
              type="text"
              onChange={(e) => setCity(e.target.value)}
              onKeyPress={getWeather}
              className="input-search"
            />
            <div className="zoom-icon-div" onClick={handleClick}>
              <FontAwesomeIcon className="zoom-icon" icon={faMagnifyingGlass} />
            </div>
          </div>
        </main>
      </div>
      <div className="right-side">
        <div className="weather-today">
          {typeof currWeather.main === "undefined" ? (
            <div className="no-data-yet-div">
              <h2 className="no-data-yet-h2">No Data Yet</h2>
              <img
                className="no-data-yet"
                src="https://img.freepik.com/free-vector/no-data-concept-illustration_114360-536.jpg?w=1380&t=st=1668625370~exp=1668625970~hmac=f03eab18910824fd8d9fd3cc1f75052e35f542400c61b04a6146a6b0e4195c0f"
              />
            </div>
          ) : (
            <div className="today">
              <h2 className="city-name">{currWeather.name}</h2>
              <div className="main-stats">
                <p className="temp">
                  {Math.round((currWeather.main.temp - 32) * 0.55)}℃
                </p>
                {/* <p>{currWeather.name}</p> */}
                <p className="clouds">{currWeather.weather[0].main}</p>
                <p className="clouds-desc">
                  {currWeather.weather[0].description}
                </p>
                <p className="date">{`${day}/${month}/${year}`}</p>
              </div>

              <div className="additional-stats">
                <p className="real-feel">
                  Real Feel:{" "}
                  <span className="value">
                    {Math.round((currWeather.main.feels_like - 32) * 0.55)}℃
                  </span>
                </p>
                <p className="humidity">
                  Humidity:{" "}
                  <span className="value">{currWeather.main.humidity}%</span>
                </p>
                <p className="cloud-cover">
                  Cloud cover:{" "}
                  <span className="value">{currWeather.clouds.all}%</span>
                </p>
                <p className="min-temp">
                  Min temp:{" "}
                  <span className="value">
                    {Math.round((currWeather.main.temp_min - 32) * 0.55)}℃
                  </span>
                </p>
                <p className="max-temp">
                  Max temp:{" "}
                  <span className="value">
                    {Math.round((currWeather.main.temp_max - 32) * 0.55)}℃
                  </span>
                </p>
              </div>
            </div>
          )}
        </div>
        {/* <div className="more-in-location">
          <h2>More in this location </h2>
        </div> */}
      </div>
    </div>
  );
};

export default WeatherApp;
