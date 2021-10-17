import React, { useState, Component, useRef, useEffect } from 'react';
import location from './assets/location';
import WeeklyTemp from './components/WeeklyTemp';
import Box from './Box';
import TempConvert from './components/TempConvert';
import LocationC from './components/LocationC';
import reactDom from 'react-dom';
import Conditions from './components/Conditions';
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

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
  const [loading, isLoading] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  const search = (evt) => {
    if (evt.key === 'Enter') {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setCurrentTemp(result.main.temp); //change first weather to result if this doesnt work
          setCloudiness(result.weather[0].description); //same with this one

          console.log(weather);
          setLat(result.coord.lat);
          setLongt(result.coord.lon);
          console.log('Weather' + lat + longt);
          setQuery('');
        });
    }

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
  };

<<<<<<< Updated upstream
=======
  const loadLocation = async () => {
    const response = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${longt}&localityLanguage=en`
    );
    const cloudData = await response.json();
    setCloud(cloudData);
    setQuery(cloudData.localityInfo.administrative[3].name);
    console.log(
      'CloudAPI city' + cloudData.localityInfo.administrative[3].name
    );
    typeof cloud !== 'undefined' &&
      getOpenWeatherAPI(cloudData.localityInfo.administrative[3].name);

    /* setQuery((state) => {
      console.log(state);
      getOpenWeatherAPI(state);
      return state;
    }); */

    //old method

    //console.log(await getQuery());
    //getOpenWeatherAPI();
  };

  const getOpenWeatherAPI = async (input) => {
    const response = await fetch(
      `${api.base}weather?q=${input}&units=metric&APPID=${api.key}`
    )
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
        console.log('weather' + result.weather.id);
        setCurrentTemp(result.main.temp);
        setCloudiness(result.weather[0].description);

        //console.log('Weather API' + weather.sys.country); //randomnly reading updated state
      });
    //setQuery('');
  };

  useEffect(() => {
    if (lat !== null && longt !== null) {
      LoadGPS();
    } else {
      console.log('error 404: GPS API NOT FOUND');
    }
    console.log('city');
    console.log(city);
  }, []);

  const LoadGPS = async () => {
    console.log('Lat/Lon' + lat + longt);
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${longt}&units=metric&appid=${api.key}`
    );

    const gpsData = await response.json();

    const locationDetails = gpsData;
    setCity(locationDetails);
    //console.log('City' + city);

    //React.useEffect(() => {

    //  f(locationDetails);
    //}, []);
  };

  /* function fillCity(cityInfo){
      return cityInfo;
  }*/

  function getCloudAPI() {
    loadLocation();
  }

>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
      fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${longt}&appid=${api.key}`
      )
        .then((res) => res.json())
        .then((result) => {
          setCity(result);
          //setQuery('');
          console.log(city);
        });
=======
      LoadGPS();

      //fix this
      if (city.current != 'undefined') {
        getCloudAPI();
      }
      // if (typeof(cloud !== 'undefined')){
      //getOpenWeatherAPI();
      //}
>>>>>>> Stashed changes
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
        {typeof (weather.main || city.current) != 'undefined' ? (
          <div>
            <div className="location-box">
              {typeof weather.main !== 'undefined' && (
                <div>
                  <LocationC weather={weather} />
                  <div className="date">{dateBuilder(new Date())}</div>{' '}
                </div>
              )}
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
              
              <WeeklyTemp click={click} weekly={city} lat={lat} longt={longt} /> 
              <div className="weather">Cloudiness: {cloudiness}</div>
              <Conditions lat={lat} longt={longt} city = {city} />
              <div className="App"></div>
            </div>
          </div>
        ) : (
          ''
        )}
      </main>
    </div> //Put weather icon after Sunny
  );
<<<<<<< Updated upstream

}

=======
}
>>>>>>> Stashed changes
export default App;
