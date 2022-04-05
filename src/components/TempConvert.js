function TempConvert(props){



    if (props.click % 3 == 0){
    
    return (
      <div>{(props.temp)}°C</div>
      
      );}
    else if (props.click % 2 == 0 && (props.click + 1) % 3 == 0){
   
      return (
<<<<<<< Updated upstream
        <div>{Math.round(props.temp) + 273.15}K</div>
=======
        <div>{(props.temp + 273)}K</div>
>>>>>>> Stashed changes
      );
      }
    else if ((props.click + 1) % 6 == 0) {
  
      return (
<<<<<<< Updated upstream
        <div>{Math.round(props.temp) + 273.15}K</div>
      )
    else
=======
        <div>{(props.temp + 273)}K</div>
      ) }
    else {
   
>>>>>>> Stashed changes
      return ( 
        <div>{(props.temp * 9/5 + 32).toFixed(1)}°F</div>
      );
    }
}

export default TempConvert;