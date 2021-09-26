import React from 'react'
import App from './App';

function Box(props) {
    function cancelPress(){
        props.onCancel();
    }

    function confirmPress(){
        props.onConfirm();
    }
    


    const [temp, setTemp] = 'celcius';
    let component

    return ( 
    <div className='box'>
        {/*<p>Which temperature setting? </p>
         <button className='btn' onClick={confirmPress} temp = 'celcius' >C</button>
        <button className='btn' onClick={confirmPress}  temp = 'farenheit' >F</button>
        <button className='btn' onClick={confirmPress}  temp = 'kelvin' >K</button> */}-->
    </div> 
    );    
}

export default Box;