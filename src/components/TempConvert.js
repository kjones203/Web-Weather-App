function TempConvert(props){



    if (props.click % 3 == 0){
    
    return (
      <div>{Math.round(props.temp)}°C</div>
      
      );}
    else if (props.click % 2 == 0 && (props.click + 1) % 3 == 0){
   
      return (
        <div>{Math.round(props.temp) + 273.15}K</div>
      );
      }
    else if ((props.click + 1) % 6 == 0) {
  
      return (
<<<<<<< Updated upstream
        <div>{Math.round(props.temp) + 273.15}K</div>
      )
    else
=======
        <div>{Math.round(props.temp) + 273}K</div>
      ) }
    else {
   
>>>>>>> Stashed changes
      return ( 
        <div>{Math.round(props.temp) * 9/5 + 32}°F</div>
      );
    }
}

export default TempConvert;