import '../index.css'

function LocationC(props) {
  return(
  <div className="location">
    {props.weather.name}, {props.weather.sys.country},
    
  </div>
  );
}

export default LocationC;
