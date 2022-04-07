function MetricConvert(props){
    if (props.click % 2 == 0){
    return (
      <div>{props.wind_speed} m/s</div>
      )
    }
    else if (props.click % 2 === 1){
      return (
        <div>{Math.round(props.wind_speed * 2.236936)} mph</div>
      )
    };
}
export default MetricConvert;
