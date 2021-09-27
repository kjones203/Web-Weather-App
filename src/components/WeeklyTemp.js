import { useState, useEffect } from 'react';
import { Component } from 'react';
import React from 'react';

var g = new Date();
var dayCount = new Array(7);
var dayCount = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const weeklyApi = {
    key: "fb2a7c5be0798b46d45b22b97742cc73",
    base: "https://api.openweathermap.org/data/2.5/",
    lat: 34,
    lon: -118 
  }

function WeeklyTemp(props){
    const[isLoading, setIsLoading] = useState(true)
    const [randomPerson, setRandomPerson] = useState(null)
    const [title, setTitle] = useState('name')
    const [value, setValue] = useState('random person')
    const [dailyT1, setdailyT1] = useState(null)
    const [dailyT2, setdailyT2] = useState(null)
    const [dailyT3, setdailyT3] = useState(null)
    const [dailyT4, setdailyT4] = useState(null)
    const [dailyT5, setdailyT5] = useState(null)
    const [dailyT6, setdailyT6] = useState(null)
    const [dailyT7, setdailyT7] = useState(null)

    

    const fetchRandomPerson = async () => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${weeklyApi.lat}&lon=${weeklyApi.lon}&units=metric&appid=${weeklyApi.key}`);
        const data = await response.json();
        const person = data;
        //setRandomPerson(data);
        console.log(data);  
        
        const {
            lat,
            lon,
            current: { humidity, wind_speed, uvi },
            current: {
                weather: [{ description }],
            },
            daily: [{
                temp: {day},
            }],
        } = person
    
        const newPerson = {
            lat,
            lon,
            uvi,
            humidity,
            description,
            wind_speed,
            temp: `${day}`,   
        }

        setdailyT1(data.daily[0].temp.day)
        setdailyT2(data.daily[1].temp.day)
        setdailyT3(data.daily[2].temp.day)
        setdailyT4(data.daily[3].temp.day)
        setdailyT5(data.daily[4].temp.day)
        setdailyT6(data.daily[5].temp.day)
        setdailyT7(data.daily[6].temp.day)  
        
        
    }


    


    useEffect(() => {
    fetchRandomPerson();
    }, []);

    

    return (
        <div>
        <div class="weeklybox">
              <div>{dailyT1}</div>
              <div>{dailyT2}</div>
              <div>{dailyT3}</div>
              <div>{dailyT4}</div>
              <div>{dailyT5}</div>
              <div>{dailyT6}</div>
              <div>{dailyT7}</div>
            </div>
        </div>
    );

}

            



    


export default WeeklyTemp;