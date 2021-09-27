import React, { useState, Component, useRef} from 'react';
import location from './assets/location';
import WeeklyTemp from './components/WeeklyTemp';
import Box from './Box';

const api = {
  key: "fb2a7c5be0798b46d45b22b97742cc73",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const temper = 'celcius';
  const [query, setQuery] = useState(''); //init state '' returns query, setQuery
  const [weather, setWeather] = useState({}); //init state {}, returns weather, setWeather
  const [ modalIsOpen, setModalIsOpen ] = useState(false); //React Hook, can only be called in React function
  
  const [click, setClick] = useState(0);
  
  
  

  function deleteHandler(){
    setModalIsOpen(true);
  }

  function closeModalHandler(){
    setModalIsOpen(false);
  }

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result)
          setQuery('');
          console.log(weather);
      });
      /*fetch(`https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}`)*/
    }
  }

  const dateBuilder = (d) => {
      var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
      var day = days[d.getDay()];
      var date = d.getDate();
      var month = months[d.getMonth()];
      var year = d.getFullYear();

      return `${day} ${month} ${date} ${year}`
  }

  
  
  
  var g = new Date();
  var dayCount = new Array(7);
  var dayCount = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
  return (
    <div className={(typeof weather.main != "undefined") 
      ? ((weather.main.temp > 16) 
        ? 'app warm'
        : 'app') 
        : 'app'}>
     <main>
     <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search} 
          />
        </div>
        {(typeof weather.main != "undefined") ? (
        <div>
          <div className="location-box">
            <div className="location">{weather.name}, {weather.sys.country}</div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
          <div className="weather-box">
            <div className="temp">
              <button className = 'btn' onClick={deleteHandler, () => setClick((prev)=> prev +1)}>
                    {render()}
                </button>
              { modalIsOpen && <Box onCancel={closeModalHandler} onConfirm={closeModalHandler}  />
              }
            </div>
            <div class="weeklybox">
              <div>{dayCount[g.getDay()]}
                
              </div>
              <div>{dayCount[g.getDay() + 1]}</div>
              <div>{dayCount[g.getDay() + 2]}</div>
              <div>{dayCount[g.getDay() + 3]}</div>
              <div>{dayCount[g.getDay() + 4]}</div>
              <div>{dayCount[g.getDay() + 5]}</div>
              <div>{dayCount[g.getDay() + 6]}</div>
              <div>

              </div>
            </div>
           <WeeklyTemp />
            <div className="weather">{weather.weather[0].main}</div>
              
          </div>
        </div>
          ) : ('')}
     </main>
     
    </div> //Put weather icon after Sunny
  )


    
  

  function render(){
                    if (click % 3 == 0)
                    return (
                      <div>{Math.round(weather.main.temp)}°C</div>
                      );
                    else if (click % 2 == 0 && (click + 1) % 3 == 0)
                      return (
                        <div>{Math.round(weather.main.temp) + 273.15}K</div>
                      );
                    else if ((click + 1) % 6 == 0)
                      return (
                        <div>{Math.round(weather.main.temp) + 273.15}K</div>
                      )
                    else
                      return ( 
                        <div>{Math.round(weather.main.temp) * 9/5 + 32}°F</div>
                      );
  }
}

export default App;
