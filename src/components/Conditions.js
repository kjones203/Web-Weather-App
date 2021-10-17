const Conditions = (props) => {
    return(
        <div>
    <h1> Latitude  {Math.round(props.lat)}</h1> 
    <h1> Longitude  {Math.round(props.longt)}),</h1> 
    <h1> UV Index  {props.city.daily[0].uvi}),</h1> 
    <h1> Humidity  {props.city.current.humidity}),</h1> 
    <h1>  Wind Speed  {props.city.current.wind_speed}</h1> 
    <h1> Moon Phase  {props.city.daily[0].moon_phase})</h1> 
    </div>
    )
}

export default Conditions;