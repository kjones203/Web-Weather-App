import React, { useState, Component, useRef } from 'react';
import location from './assets/location';
import WeeklyTemp from './components/WeeklyTemp';
import Box from './Box';
import TempConvert from './components/TempConvert';
import LocationC from './components/LocationC';

const api = {
  key: 'fb2a7c5be0798b46d45b22b97742cc73',
  base: 'https://api.openweathermap.org/data/2.5/',
};

function App() {
  const temper = 'celcius';
  const [query, setQuery] = useState(''); //init state '' returns query, setQuery
  const [weather, setWeather] = useState({}); //init state {}, returns weather, setWeather
  const [currentTemp, setCurrentTemp] = useState('');
  const [cloudiness, setCloudiness] = useState(null);
  const [city, setCity] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false); //React Hook, can only be called in React function
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

  const search = (evt) => {
    if (evt.key === 'Enter') {
        fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setCurrentTemp(result.main.temp);
          setCloudiness(result.weather[0].description);
         
          setQuery('');
          console.log(weather);
          });

      
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

    if (lat == null || longt == null) {
      console.log('No latitude or longitude found. Try again');
    } else {
      fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${longt}&appid=${api.key}`
      )
        .then((res) => res.json())
        .then((result) => {
          setCity(result);
          //setQuery('');
          console.log(city);
        });
    }
  } 

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
            onClick={getGPS}
            value="Get Location"
            //onChange={(e) => setQuery(e.target.value)}
          />
        </div>
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
                  <Box
                    onCancel={closeModalHandler}
                    onConfirm={closeModalHandler}
                  />
                )}
              </div>

              <WeeklyTemp click={click} />
              <div className="weather">Cloudiness: {cloudiness}</div>

              <div className="App">
                <h1>Coordinates</h1>
                <p>{status}</p>
                {lat && <p>Latitude: {lat}</p>}
                {longt && <p>Longitude: {longt}</p>}
              </div>
            </div>
            
          </div>
        ) : (
          ''
        ))}
      </main>
    </div> //Put weather icon after Sunny
  );

}

export default App;
