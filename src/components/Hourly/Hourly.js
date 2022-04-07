import { DateTime } from 'luxon';
import DisplayHourly from './DisplayHourly';
import './Hourly.css';
import sunhourly from '../weather icons/sunhourly.png';
import moon from '../weather icons/moon.png';

function Hourly(props) {
  function displayWeather(value) {
    if (value > 5 && value < 18) {
      return <img src={sunhourly} height={70} width={70} bottom={0} />;
    } else {
      return <img src={moon} height={70} width={70} bottom={0} />;
    }
  }

  function strCompare(str1, str2, str3) {
    return str1 < str2 < str2;
  }

  const d = new Date(props.dt / 1000);
  let dt = DateTime.local();

  let rezone = dt.setZone(props.timezone);
  console.log('Zone hours:' + rezone.hour);

  let hour = rezone.hour;

  let hourList = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23,
  ];

  let weatherTimes = [];
  let twelveTimes = [];

  function greaterThan(int1, int2) {
    return int1 > int2;
  }

  function intCompare(str1, str2) {
    return str1 === str2;
  }

  function toTwelve(hour) {
    if (0 <= hour < 12) {
      return hour;
    } else if (hour === 12) {
      return '12';
    } else if (hour > 12) {
      return hour - 12;
    }
  }

  for (let i = 0, len = 24; i < len; i++) {
    for (let j = hour; weatherTimes.length < 12; j++) {
      //console.log(dayCount[(i+j)% len]);
      weatherTimes.push(hourList[(i + j) % len]);
      //console.log(toTwelve(hourList[(i+j)% len]));
      console.log(weatherTimes);
    }
  }

  for (let i = 0; i < 12; i++) {
    if (greaterThan(weatherTimes[i], 12)) {
      twelveTimes.push(weatherTimes[i] - 12 + ' pm');
    } else if (weatherTimes[i] === 0) {
      twelveTimes.push(12 + ' am');
    } else {
      twelveTimes.push(weatherTimes[i] + ' am');
    }
  }

  console.log(twelveTimes);

  return (
    <div>
      <div className="hourly-box">
        <div className="temperature">
          <div>
            <DisplayHourly
              twelve={twelveTimes[0]}
              temp={props.temp0}
              click={props.click}
            />
          </div>
          <div className="image">{displayWeather(weatherTimes[0])}</div>
        </div>
        <div className="temperature">
          <DisplayHourly
            twelve={twelveTimes[1]}
            temp={props.temp1}
            click={props.click}
          />
          <div className="image"> {displayWeather(weatherTimes[1])} </div>
        </div>
        <div className="temperature">
          <DisplayHourly
            twelve={twelveTimes[2]}
            temp={props.temp2}
            click={props.click}
          />
          <div className="image">{displayWeather(weatherTimes[2])} </div>
        </div>
        <div className="temperature">
          <DisplayHourly
            twelve={twelveTimes[3]}
            temp={props.temp3}
            click={props.click}
          />
          <div className="image"> {displayWeather(weatherTimes[3])} </div>{' '}
        </div>
        <div className="temperature">
          <DisplayHourly
            twelve={twelveTimes[4]}
            temp={props.temp4}
            click={props.click}
          />
          <div className="image">{displayWeather(weatherTimes[4])} </div>{' '}
        </div>
        <div className="temperature">
          <DisplayHourly
            twelve={twelveTimes[5]}
            temp={props.temp5}
            click={props.click}
          />
          <div className="image">{displayWeather(weatherTimes[5])} </div>{' '}
        </div>
        <div className="temperature">
          <DisplayHourly
            twelve={twelveTimes[6]}
            temp={props.temp6}
            click={props.click}
          />
          <div className="image">{displayWeather(weatherTimes[6])} </div>{' '}
        </div>
        <div className="temperature">
          <DisplayHourly
            twelve={twelveTimes[7]}
            temp={props.temp7}
            click={props.click}
          />{' '}
          <div className="image"> 
          {displayWeather(weatherTimes[7])}
        </div>{' '}
      </div>
      <div className="temperature">
        <DisplayHourly
          twelve={twelveTimes[8]}
          temp={props.temp8}
          click={props.click}
        />{' '}
        <div className="image">{displayWeather(weatherTimes[8])} </div>{' '}
      </div>
      <div className="temperature">
        <DisplayHourly
          twelve={twelveTimes[9]}
          temp={props.temp9}
          click={props.click}
        />
        <div className="image">{displayWeather(weatherTimes[9])} </div>{' '}
      </div>
      <div className="temperature">
        <DisplayHourly
          twelve={twelveTimes[10]}
          temp={props.temp10}
          click={props.click}
        />
        <div className="image">{displayWeather(weatherTimes[10])}</div>{' '}
      </div>
      <div className="temperature">
        <DisplayHourly
          twelve={twelveTimes[11]}
          temp={props.temp11}
          click={props.click}
        />
        <div className="image"> {displayWeather(weatherTimes[11])}</div>{' '}
      </div>
    </div> </div>
  );
}

export default Hourly;
