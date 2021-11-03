import TempConvert from "../TempConvert";
import { useState } from "react";


function DisplayHourly(props){

    function calculate(){
    if (props.units == 'C'){
        return (
          <div>{Math.round(props.temp)}°C</div>
          
          );}
        else if (props.units == 'K'){
          return (
            <div>{(props.temp) + 273}K</div>
          );
          }
        else if (props.units == 'F'){
          return ( 
            <div>{(props.temp) * 9/5 + 32}°F</div>
          );
          }
    }
    

    return(
    <div>
        <span>{props.twelve} </span>
        <div> <div><TempConvert temp = {props.temp} click = {props.click} /></div></div>
           
    </div>)
}

export default DisplayHourly;
