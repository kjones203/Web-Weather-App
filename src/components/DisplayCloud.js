import React from 'react';
import { useState } from 'react';
import cloud from './weather icons/cloud.png';
import sun from './weather icons/sun.png';
import wind from './weather icons/wind.png';
import snow from './weather icons/snow.png';
import rainclouds from './weather icons/rainclouds.png';
import rain from './weather icons/rain.png';
import thunder from './weather icons/thunder.png';
import './DisplayCloud.css';

function DisplayCloud(props) {
  const [image, setImage] = useState(null);

  function strCompare(str1,str2){
      return str1 === str2 ;
  }

  function getWeatherIcon() {
    if (strCompare(props.cloudiness,'overcast clouds') || strCompare(props.cloudiness,'broken clouds')) {
      return <img src={cloud} height={70} width={70} bottom={0} />;
    } else if (strCompare(props.cloudiness,'few clouds') || strCompare(props.cloudiness,'scattered clouds')) {
      return <img src={cloud} height={70} width={70} bottom={0} />;
    } else if (strCompare(props.cloudiness,'clear sky')) {
      return <img src={sun} height={70} width={70} bottom={0} />;
    } else if (
        strCompare(props.cloudiness,'mist') ||
        strCompare(props.cloudiness,'smoke') ||
        strCompare(props.cloudiness,'haze') ||
        strCompare(props.cloudiness,'dust') ||
        strCompare(props.cloudiness,'fog') ||
        strCompare(props.cloudiness,'sand') ||
        strCompare(props.cloudiness,'dust') ||
        strCompare(props.cloudiness,'ash') ||
        strCompare(props.cloudiness,'squall') ||
        strCompare(props.cloudiness,'tornado'))
     {
      return <img src={wind} height={70} width={70} bottom={0} />;
    } else if (strCompare(props.cloudiness,'clear sky')) {
      return <img src={sun} height={70} width={70} bottom={0} />;
    } else if (
      props.cloudiness?.includes('snow') ||
      props.cloudiness?.includes('sleet') ||
      strCompare(props.cloudiness,'freezing rain')
    ) {
      return <img src={snow} height={70} width={70} bottom={0} />;
    }  else if (
        strCompare(props.cloudiness,'light rain') ||
        strCompare(props.cloudiness,'moderate rain') ||
        strCompare(props.cloudiness, 'heavy intensity rain') ||
        strCompare(props.cloudiness,'very heavy rain') ||
        strCompare(props.cloudiness,'very heavy rain') ||
        strCompare(props.cloudiness,'extreme rain')
    ) {
      return <img src={rainclouds} height={70} width={70} bottom={0} />;
    } else if (
      props.cloudiness?.includes('shower rain') ||
      props.cloudiness?.includes('drizzle')
    ) {
      return <img src={rain} height={70} width={70} bottom={0} />;
    } else if (props.cloudiness?.includes('thunderstorm')) {
      return <img src={thunder} height={70} width={70} bottom={0} />;
    }
    else{
        console.log('no weather');
    }
  }
  return (
    <div className="cloud-box">
      <div className="temp">
        <pre>Cloudiness: {props.cloudiness} {getWeatherIcon()}{' '}
      </pre></div>
    </div>
  );
}

export default DisplayCloud;
