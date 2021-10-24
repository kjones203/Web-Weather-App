import '../index.css'
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios' 

Vue.use(VueAxios, axios)

function LocationC(props) {
  if (props.weather !== '{}') {
  return(
  <div className="location">
    {props.weather.name}, ,
    
  </div>
  );
  }
}

export default LocationC;

//{props.weather.sys.country}
