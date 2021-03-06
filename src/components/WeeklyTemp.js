import { useState, useEffect } from 'react';
import { Component } from 'react';
import React from 'react';
import '../index.css';
import TempConvert from './TempConvert';
let currentDate = new Date();
let day = currentDate.getDay();
var dayCount = new Array(7);
var dayCount = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let weekOrder = [];
const weeklyApi = {
  key: 'fb2a7c5be0798b46d45b22b97742cc73',
  base: 'https://api.openweathermap.org/data/2.5/',
 
};

for (let i = 0, len = dayCount.length; i < len; i++){
    for (let j = 0; j < 8; j++){
        weekOrder[j - 1] = (dayCount[(i+j)% len])
    }
} 
function WeeklyTemp(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [randomPerson, setRandomPerson] = useState(null);
  const [title, setTitle] = useState('name');
  const [value, setValue] = useState('random person');

  const fetchRandomPerson = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.lon}&units=metric&appid=${weeklyApi.key}`
    );
    const data = await response.json();
    const person = data;
    //setRandomPerson(data);
    console.log(data);

<<<<<<< Updated upstream
    const {
      lat,
      lon,
      current: { humidity, wind_speed, uvi },
      current: {
        weather: [{ description }],
      },
      daily: [
        {
          temp: { day },
        },
      ],
    } = person;

    const newPerson = {
      lat,
      lon,
      uvi,
      humidity,
      description,
      wind_speed,
      temp: `${day}`,
    };
=======

    for (let i = 0, len = dayCount.length; i < len; i++){
      for (let j = day; weekOrder.length < 7; j++){
          weekOrder.push(dayCount[(i+j)% len]);
      }
      break;
  } 
    setMin1(data.daily[0].temp.min);
    setMin2(data.daily[1].temp.min);
    setMin3(data.daily[2].temp.min);
    setMin4(data.daily[3].temp.min);
    setMin5(data.daily[4].temp.min);
    setMin6(data.daily[5].temp.min);
    setMin7(data.daily[6].temp.min);

    setMax1(data.daily[0].temp.max);
    setMax2(data.daily[1].temp.max);
    setMax3(data.daily[2].temp.max);
    setMax4(data.daily[3].temp.max);
    setMax5(data.daily[4].temp.max);
    setMax6(data.daily[5].temp.max);
    setMax7(data.daily[6].temp.max);

>>>>>>> Stashed changes
  };
  useEffect(() => {
    fetchRandomPerson();
  }, [props.lat, props.lon]);

  return (
    <div>
        <div className="weeklybox">
              <div>{weekOrder[0]}</div>
              <div>{weekOrder[1]}</div>
              <div>{weekOrder[2]}</div>
              <div>{weekOrder[3]}</div>
              <div>{weekOrder[4]}</div>
              <div>{weekOrder[5]}</div>
              <div>{weekOrder[6]}</div>
            </div>
<<<<<<< Updated upstream
      <div class="weeklybox :first-child">
        <div><TempConvert temp = {dailyT1} click = {props.click} /></div>
        <div><TempConvert temp = {dailyT2} click = {props.click} /></div>
        <div><TempConvert temp = {dailyT3} click = {props.click} /></div>
        <div><TempConvert temp = {dailyT3} click = {props.click} /></div>
        <div><TempConvert temp = {dailyT4} click = {props.click} /></div>
        <div><TempConvert temp = {dailyT5} click = {props.click} /></div>
        <div><TempConvert temp = {dailyT6} click = {props.click} /></div>
=======
      <div className="weeklybox :first-child">
        <div>H: <TempConvert temp = {max1} click = {props.click} /></div>
        <div>H: <TempConvert temp = {max2} click = {props.click} /></div>
        <div>H: <TempConvert temp = {max3} click = {props.click} /></div>
        <div>H: <TempConvert temp = {max3} click = {props.click} /></div>
        <div>H: <TempConvert temp = {max4} click = {props.click} /></div>
        <div>H: <TempConvert temp = {max5} click = {props.click} /></div>
        <div>H: <TempConvert temp = {max6} click = {props.click} /></div>
      </div>
      <div className="weeklybox :first-child">
        <div>L: <TempConvert temp = {min1} click = {props.click} /></div>
        <div>L: <TempConvert temp = {min2} click = {props.click} /></div>
        <div>L: <TempConvert temp = {min3} click = {props.click} /></div>
        <div>L: <TempConvert temp = {min3} click = {props.click} /></div>
        <div>L: <TempConvert temp = {min4} click = {props.click} /></div>
        <div>L: <TempConvert temp = {min5} click = {props.click} /></div>
        <div>L: <TempConvert temp = {min6} click = {props.click} /></div>
>>>>>>> Stashed changes
      </div>
    </div>
  );
}
export default WeeklyTemp;
