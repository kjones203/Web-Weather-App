
import './WeatherData.css';
import newmoon from './moon icons/new moon.png';
import waxingcrescent from './moon icons/waxing crescent.png';
import firstquarter from './moon icons/firstquarter.png';
import waxinggibous from './moon icons/waxinggibous.png';
import fullmoon from './moon icons/full moon.png';
import waninggibous from './moon icons/waninggibous.png';
import thirdquarter from './moon icons/thirdquarter.png';
import waningcrescent from './moon icons/waning crescent.png';
import React from 'react';
import {useState} from 'react';
import MetricConvert
 from './MetricConvert';
function WeatherData(props) {

  const [click, setClick] = useState(0);
  
  let humidity;
  let moonphase;
  let uvIndex;
  let wind_speed;

  function intCompare(str1,str2){
    return str1 === str2 ;
}

  function displayMoon(phase){
    return <img src={phase} height={70} width={70} bottom={0} />
  }

  function getMoonPhase(phase){
      if(intCompare(phase,0) || intCompare(phase,1)){
          return <div>New Moon {displayMoon(newmoon)} </div>
      }
      else if(0 <  phase && phase < 0.25){
          return <div>Waxing Crescent {displayMoon(waxingcrescent)}</div>
      }
      else if(phase === 0.25){
          return <div>First Quarter Moon {displayMoon(firstquarter)}</div>
      }
      else if( 0.25 < phase && phase < 0.5){
        return <div>Waxing Gibbous {displayMoon(waxinggibous)}</div>
      }
      else if (intCompare(phase,0.5)) {
          return <div>Full Moon {displayMoon(fullmoon)}</div>
      }
      else if ( 0.5 < phase && phase < 0.75){
          return <div>Waning Gibbous {displayMoon(waninggibous)}</div>
      }
      else if (intCompare(phase,0.75)) {
        return <div>Third Quarter Moon {displayMoon(thirdquarter)}</div>
    }
      else if (0.75 < phase && phase < 1) {
          return <div>Waning Crescent {displayMoon(waningcrescent)}</div>
      }
      else {
          return 'Error';
      }
  }

  return (
    <div>
      <div className="data-box">
        <div className="temp">
          <pre>Humidity: {props.humidity} %</pre>
        </div>
        <div className="data-box">  <button
                  className="temp"
                  onClick={( () => setClick((prev) => prev + 1))}
                >
                  {//<TempConvert click={click} temp={currentTemp} />
                  } 
                  Wind Speed: <MetricConvert click={click} wind_speed={props.wind_speed} />
                </button>
</div>
        <div className="data-box">
          <div className="moon">
            <pre>Moon Phase: {getMoonPhase(props.moon)}</pre>
          </div>
        </div>
        <div className="data-box">
          <div className="temp">
            <pre>UV Index: {props.uvi}</pre>
          </div>
        </div>
        <div className="data-box">
          <div className="temp">
            <pre>Air Pressure: {props.pressure} hPa</pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherData;
