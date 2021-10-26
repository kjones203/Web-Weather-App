import './WeatherData.css';
function WeatherData(props) {
  let humidity;
  let moonphase;
  let uvIndex;
  let wind_speed;

  function intCompare(str1,str2){
    return str1 === str2 ;
}

  function getMoonPhase(phase){
      if(intCompare(phase,0) || intCompare(phase,1)){
          return 'New Moon';
      }
      else if(0 <  phase && phase < 0.25){
          return 'Waxing Crescent';
      }
      else if(phase === 0.25){
          return 'First Quarter Moon';
      }
      else if( 0.25 < phase && phase < 0.5){
        return 'Waxing Gibous';
      }
      else if (intCompare(phase,0.5)) {
          return 'Full Moon';
      }
      else if ( 0.5 < phase && phase < 0.75){
          return 'Waning Gibous';
      }
      else if (0.75 < phase && phase < 1) {
          return 'Waning Crescent';
      }
      else {
          return 'No phase';
      }
  }

  return (
    <div>
      <div className="data-box">
        <div className="temp">
          <pre>Humidity: {props.humidity} %</pre>
        </div>
        <div className="data-box">
          <div className="temp">
            <pre>Moon Phase: {getMoonPhase(props.moon)}</pre>
          </div>
        </div>
        <div className="data-box">
          <div className="temp">
            <pre>UV Index: {props.uvi}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherData;
