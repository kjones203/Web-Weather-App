import { useState, useEffect, useCallback } from 'react';
import { Component } from 'react';
import React from 'react';
import '../index.css';
import TempConvert from './TempConvert';
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)



let currentDate = new Date();
let day = currentDate.getDay();
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
let weekOrder = [];

const weeklyApi = {
  key: 'fb2a7c5be0798b46d45b22b97742cc73',
  base: 'https://api.openweathermap.org/data/2.5/',
};

for (let i = 0, len = dayCount.length; i < len; i++) {
  for (let j = 0; j < 8; j++) {
    weekOrder[j - 1] = dayCount[(i + j) % len];
  }
}

function WeeklyTemp(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [randomPerson, setRandomPerson] = useState({});
  const [title, setTitle] = useState('name');
  const [value, setValue] = useState('random person');
  const [dailyT1, setdailyT1] = useState(null);
  const [dailyT2, setdailyT2] = useState(null);
  const [dailyT3, setdailyT3] = useState(null);
  const [dailyT4, setdailyT4] = useState(null);
  const [dailyT5, setdailyT5] = useState(null);
  const [dailyT6, setdailyT6] = useState(null);
  const [dailyT7, setdailyT7] = useState(null);

  const fetchRandomPerson = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.longt}&units=metric&appid=${weeklyApi.key}`
    )
      .then((res) => res.json())
      .then((result) => {
        setRandomPerson(result);
      
        //const data = await response.json()

        //return randomPerson;
        //return randomPerson;
        //const person = data.results;

        

        //console.log('WeeklyTemp');
        //console.log(props.weekly);
        
          
        //console.log(randomPerson.daily[0].temp.day);
        //console.log(randomPerson.daily[0]);
        //if (randomPerson !== null) {
        
        setdailyT1(result.daily[0].temp.day);
        //}
        setdailyT2(result.daily[1].temp.day);
        setdailyT3(result.daily[2].temp.day);
        setdailyT4(result.daily[3].temp.day);
        setdailyT5(result.daily[4].temp.day);
        setdailyT6(result.daily[5].temp.day);
        setdailyT7(result.daily[6].temp.day); 
        
        /* const {
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
*/
        /*const newPerson = {
      lat,
      lon,
      uvi,
      humidity,
      description,
      wind_speed,
      temp: `${day}`,
    };*/
  })
  };

  useEffect(() => {
    if (typeof (props.lat && props.longt !== null)) {
      fetchRandomPerson();
    }
  }, [props.lat, props.longt]);

  //setdailyT1(randomPerson.daily[0].temp.day);

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
      <div className="weeklybox :first-child">
        <div>
          <TempConvert temp={dailyT1} click={props.click} />
        </div>
        <div>
          <TempConvert temp={dailyT2} click={props.click} />
        </div>
        <div>
          <TempConvert temp={dailyT3} click={props.click} />
        </div>
        <div>
          <TempConvert temp={dailyT3} click={props.click} />
        </div>
        <div>
          <TempConvert temp={dailyT4} click={props.click} />
        </div>
        <div>
          <TempConvert temp={dailyT5} click={props.click} />
        </div>
        <div>
          <TempConvert temp={dailyT6} click={props.click} />
        </div>
      </div>
    </div>
  );
}

export default WeeklyTemp;
