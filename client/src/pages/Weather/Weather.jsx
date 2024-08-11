import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import axios from "axios";
import "./Weather.css";
import { Input } from "@/components/ui/input"


const Weather = () => {
  const [inputData, setInputdata] = useState();
  const [weatherdata, setWeatherdata] = useState();
  const [forecastweatherdata, setForecastWeatherdata] = useState();
  


  console.log(weatherdata);

  const fetchWeather = async (place) => {
    const options = {
      method: "GET",
      url: "https://ai-weather-by-meteosource.p.rapidapi.com/current",
      params: {
        place_id: place,
        timezone: "auto",
        language: "en",
        units: "metric",
      },
      headers: {
        "X-RapidAPI-Key": "487da8424bmsh927b3c5b40bb07cp16fa97jsn645356862872",
        "X-RapidAPI-Host": "ai-weather-by-meteosource.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      setWeatherdata(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const forecastWeather = async () => {
    const options = {
      method: "GET",
      url: "https://ai-weather-by-meteosource.p.rapidapi.com/daily",
      params: {
        lat: "37.81021",
        lon: "-122.42282",
        language: "en",
        units: "metric",
      },
      headers: {
        "X-RapidAPI-Key": "487da8424bmsh927b3c5b40bb07cp16fa97jsn645356862872",
        "X-RapidAPI-Host": "ai-weather-by-meteosource.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      setForecastWeatherdata(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const displayWeather = async () => {
    const options = {
      method: "GET",
      url: "https://ai-weather-by-meteosource.p.rapidapi.com/find_places",
      params: {
        text: inputData,
        language: "en",
      },
      headers: {
        "X-RapidAPI-Key": "487da8424bmsh927b3c5b40bb07cp16fa97jsn645356862872",
        "X-RapidAPI-Host": "ai-weather-by-meteosource.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      fetchWeather(response.data[0].name);
      forecastWeather(response.data[0].name);
    } catch (error) {
      console.error(error);
    }
  };

  const date = new Date(Date.now());
  const formattedDate = format(date, "dd MMM yyyy");

  return (
    <>
      <div className="container weather_container">
        <h3> ForeCast Weather </h3>
        <div class="input-group mb-3 " data-bs-theme="dark">
        <Input 
          className = "form-control"
           type="text"
            placeholder=" Search City, Place or Country"
             value = {inputData} onChange={(e) => { setInputdata(e.target.value);
             }}
          />

          <div class="input-group-append">
            <Button
              type="button"
              onClick={() => {
                displayWeather();
              }}
              variant="secondary"
            >
              Search
            </Button>
            {() => {
              displayWeather();
            }}
          </div>
        </div>
        {weatherdata && forecastweatherdata && (
          <div class="container-1">
            <div class="weather-side">
              <div class="weather-gradient"></div>
              <div class="date-container">
                <h2 class="date-dayname">{format(date, "EEEE")}</h2>
                <span class="date-day">{formattedDate}</span>
                <i class="location-icon" data-feather="map-pin"></i>
                <span class="location">{inputData}</span>
              </div>
              <div class="weather-container">
                <i class="weather-icon" data-feather="sun"></i>
                <h1 class="weather-temp">
                  {weatherdata.current.temperature}°C
                </h1>
                <h3 class="weather-desc">{weatherdata.current.summary}</h3>
              </div>
            </div>
            <div class="info-side">
              <div class="today-info-container">
                <div class="today-info">
                  <div class="precipitation">
                    <span class="title">PRECIPITATION</span>
                    <span class="value">
                      {weatherdata.current.precipitation.total} %
                    </span>
                    <div class="clear"></div>
                  </div>
                  <div class="humidity">
                    <span class="title">HUMIDITY</span>
                    <span class="value">{weatherdata.current.humidity} %</span>
                    <div class="clear"></div>
                  </div>
                  <div class="wind">
                    <span class="title">WIND</span>
                    <span class="value">
                      {weatherdata.current.wind.speed} km/h
                    </span>
                    <div class="clear"></div>
                  </div>
                </div>
              </div>
              <div class="week-container">
                <ul class="week-list">
                  <li class="active">
                    <i class="day-icon" data-feather="sun"></i>
                    <span class="day-name">
                      {format(forecastweatherdata.daily.data[1].day, "EEEE")}
                    </span>
                    <span class="day-temp">
                      {forecastweatherdata.daily.data[1].temperature}°C
                    </span>
                  </li>
                  <li>
                    <i class="day-icon" data-feather="cloud"></i>
                    <span class="day-name">
                      {format(forecastweatherdata.daily.data[2].day, "EEEE")}
                    </span>
                    <span class="day-temp">
                      {forecastweatherdata.daily.data[2].temperature}°C
                    </span>
                  </li>
                  <li>
                    <i class="day-icon" data-feather="cloud-snow"></i>
                    <span class="day-name">
                      {format(forecastweatherdata.daily.data[3].day, "EEEE")}
                    </span>
                    <span class="day-temp">
                      {forecastweatherdata.daily.data[3].temperature}°C
                    </span>
                  </li>
                  <li>
                    <i class="day-icon" data-feather="cloud-rain"></i>
                    <span class="day-name">
                      {format(forecastweatherdata.daily.data[4].day, "EEEE")}
                    </span>
                    <span class="day-temp">
                      {forecastweatherdata.daily.data[4].temperature}°C
                    </span>
                  </li>
                  <div class="clear"></div>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Weather;
