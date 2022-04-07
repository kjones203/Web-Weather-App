import './Alerts.css';

function Alerts(props) {
    
    function checkAlerts(){
    if (props.city.alerts) {
        for (let i = 0; i < props.city.alerts.length; i++){
        return <div>
        <h1>WEATHER ALERT!</h1>
         {props.city.alerts[i].description}
        </div>
        console.log(props.city.alerts)
        }
    }
    else{
    return <div>
        <h1>No Weather Alerts</h1>
    </div>
    }
}

    return (
        <div className = "alert-box">
            <div className="alert-open">
            {checkAlerts()}
                {//</div>span className="alert-close" onClick={props.closeWindow}>X</span>
}
                
            </div>
        </div>
    );
}


export default Alerts;
