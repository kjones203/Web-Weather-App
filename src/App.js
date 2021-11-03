import React, { useState, Component, useRef } from 'react';
import location from './assets/location';
import WeeklyTemp from './components/WeeklyTemp';
import Box from './Box';
import TempConvert from './components/TempConvert';
import LocationC from './components/LocationC';
<<<<<<< Updated upstream
=======
import DisplayCloud from './components/DisplayCloud';
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import { useEffect } from 'react/cjs/react.development';
import WeatherData from './components/WeatherData';
import PopUp from './components/Hourly/PopUp.js';
import Hourly from './components/Hourly/Hourly.js';


Vue.use(VueAxios, axios);
>>>>>>> Stashed changes

const api = {
  key: 'fb2a7c5be0798b46d45b22b97742cc73',
  base: 'https://api.openweathermap.org/data/2.5/',
};
function App() {
  const[units, setUnits] = useState('');

  const temper = 'celcius';
  const [query, setQuery] = useState(''); //init state '' returns query, setQuery
  const [weather, setWeather] = useState({}); //init state {}, returns weather, setWeather
  const [currentTemp, setCurrentTemp] = useState('');
  const [cloudiness, setCloudiness] = useState(null);
  const [city, setCity] = useState({});
  const [cloud, setCloud] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false); //React Hook, can only be called in React function
  const [windowOpen, setWindowOpen] = useState(false);
  const [lat, setLat] = useState(null);
  const [longt, setLongt] = useState(null);
  const [status, setStatus] = useState(null);
  const [click, setClick] = useState(0);
  function deleteHandler() {
    setModalIsOpen(true);
  }
  function closeModalHandler() {
    setModalIsOpen(false);
  }

<<<<<<< Updated upstream
=======
  function fetchCityData(lat, lon) {
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${api.key}`
    )
      .then((res) => res.json())
      .then((result) => {
        setCity(result);
      });
  }

  function clickWindow(){
    setWindowOpen(!windowOpen);
  }

 

>>>>>>> Stashed changes
  const search = (evt) => {
    if (evt.key === 'Enter') {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setCurrentTemp(result.main.temp);
          setCloudiness(result.weather[0].description);
<<<<<<< Updated upstream
         
=======
          setLat(result.coord.lat);
          setLongt(result.coord.lon);

          fetchCityData(result.coord.lat, result.coord.lon);

>>>>>>> Stashed changes
          setQuery('');
          console.log(weather);
        });

      /*axios.get("/getWeathertoronto").then(function(response) {
            console.log('backend:');
            console.log(response.data.temp_c);
          })*/

      //let cityLon = weather.coord.lon;
      /* fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${cityLat}&lon=${cityLon}&appid=${api.key}`
      )
        .then((res) => res.json())
        .then((result) => {
          setCity(result);
          setQuery('');
          console.log(result);
        });
      /*fetch(`https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}`)
      https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&appid={API key}*/
    }
  };
  function getGPS() {
    if (!navigator.geolocation) {
      setStatus('Please allow geolocation services');
    } else {
      setStatus('Searching for location');
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setStatus(null);
          setLat(position.coords.latitude);
          setLongt(position.coords.longitude);
        },
        () => {
          setStatus('Error: Cannot find location');
        }
      );
    }
    if (lat == null && longt == null) {
      console.log('No latitude or longitude found. Try again');
    } else {
      fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${longt}&units=metric&appid=${api.key}`
      )
        .then((res) => res.json())
        .then((result) => {
          setCity(result);
          //setQuery('');
          console.log(city);
          getCloudAPI();
        });
    }
<<<<<<< Updated upstream
  } 
=======
  }

  async function getCloudAPI() {
    const response = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${longt}&localityLanguage=en`
    );
    const result = await response.json();

    setCloud(result);
    setQuery(result.localityInfo.administrative[3].name);
    console.log('Cloud API: ' + cloud);

    getOpenWeatherAPI(result.localityInfo.administrative[3].name);
  }

  async function getOpenWeatherAPI(q) {
    const response = await fetch(
      `${api.base}weather?q=${q}&units=metric&APPID=${api.key}`
    );
    const result = await response.json();

    setWeather(result);
    console.log('Weather API' + weather.weather);
    setCurrentTemp(result.main.temp);
    setCloudiness(result.weather[0].description);

    setQuery('');
    console.log('Weather name' + weather.name);
  }

  /*useEffect(() => {
    if (query !== '') {
      getOpenWeatherAPI();
    }
  }, []);*/
>>>>>>> Stashed changes

  const dateBuilder = (d) => {
    var months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    var days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    var day = days[d.getDay()];
    var date = d.getDate();
    var month = months[d.getMonth()];
    var year = d.getFullYear();
    return `${day} ${month} ${date} ${year}`;
  };
  var g = new Date();
  var dayCount = new Array(7);
  var dayCount = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  function print(dayC, n, index) {
    for (var i = index; i < n + index; i++) return dayC[parseInt(i % n)];
  }
  return (
    <div
      className={
        typeof city.current != 'undefined'
          ? currentTemp > 16
            ? 'app warm'
            : 'app'
          : 'app'
      }
    >
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        <div>
          <input
            type="button"
            className="btn"
<<<<<<< Updated upstream
=======
            className="findlocation"
>>>>>>> Stashed changes
            onClick={getGPS}
            value="Get Location"
            //onChange={(e) => setQuery(e.target.value)}
          />
        </div>
<<<<<<< Updated upstream
        {(typeof (weather.main || city.current) != 'undefined' ? (
          <div>
            
            <div className="location-box">
              <LocationC weather = {weather} />
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">
                <button
                  className="btn"
                  onClick={(deleteHandler, () => setClick((prev) => prev + 1))}
                >
                  <TempConvert click={click} temp={currentTemp} />
                </button>
                {modalIsOpen && (
=======
        {
          //{typeof ((weather.main && weather.name ) || (city.current && weather.name)) != 'undefined' ? (
          typeof (
            weather.main &&
            weather.name &&
            city.current &&
            weather.name
          ) != 'undefined' ? (
            <div>
              <div className="location-box">
                <LocationC weather={weather} />

                <div className="date">{dateBuilder(new Date())}</div>
              </div>
              <div className="weather-box">
                <div className="temp">
                  <button
                    className="btn"
                    onClick={
                      (deleteHandler, () => setClick((prev) => prev + 1))
                    }
                  >
                    {
                      //<TempConvert click={click} temp={currentTemp} />
                    }
                    <TempConvert click={click} temp={currentTemp} city={city} />
                    
                  </button>
                  {/*{modalIsOpen && (
>>>>>>> Stashed changes
                  <Box
                    onCancel={closeModalHandler}
                    onConfirm={closeModalHandler}
                  />
<<<<<<< Updated upstream
                )}
              </div>

              <WeeklyTemp click={click} />
              <div className="weather">Cloudiness: {cloudiness}</div>

              <div className="App">
                <h1>Coordinates</h1>
                <p>{status}</p>
                {lat && <p>Latitude: {lat}</p>}
                {longt && <p>Longitude: {longt}</p>}
=======
                )}*/}
                </div>

                <WeeklyTemp click={click} lat={lat} lon={longt} />
                <DisplayCloud cloudiness={cloudiness} />
                <WeatherData
                  wind_speed={city.daily[0].wind_speed}
                  humidity={city.daily[0].humidity}
                  moon={city.daily[0].moon_phase}
                  uvi={city.daily[0].uvi}
                  pressure={city.daily[0].pressure}
                />
                
                <input type="button" 
                value="Hourly"
                onClick={clickWindow}
                />
              
                {windowOpen && <PopUp content={<> <b>Hourly Forecast</b>
                <Hourly click = {click} dt = {city.current.dt} timezone = {city.timezone} temp0 = {city.hourly[0].temp} temp1 = {city.hourly[1].temp} temp2 = {city.hourly[2].temp} temp3 = {city.hourly[3].temp} temp4 = {city.hourly[4].temp}
                temp5 = {city.hourly[5].temp}
                temp6 = {city.hourly[6].temp}
                temp7 = {city.hourly[7].temp}
                temp8 = {city.hourly[8].temp}
                temp9 = {city.hourly[9].temp}
                temp10 = {city.hourly[10].temp}
                temp11 = {city.hourly[11].temp}/>
                <button>Test button</button>
                </>}
                closeWindow={clickWindow}
              />}
                  
>>>>>>> Stashed changes
              </div>
            </div>
          ) : (
            ''
          )
        }
      </main>
    </div> //Put weather icon after Sunny
  );
}
export default App;
