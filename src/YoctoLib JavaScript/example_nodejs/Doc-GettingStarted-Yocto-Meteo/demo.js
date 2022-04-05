"use strict";
require('yoctolib-es2017/yocto_api.js');
require('yoctolib-es2017/yocto_temperature.js');
require('yoctolib-es2017/yocto_humidity.js');
require('yoctolib-es2017/yocto_pressure.js');
let temp, hum, pres;

const express = require("express");

const app = express();






async function startDemo()
{
await YAPI.LogUnhandledPromiseRejections();
await YAPI.DisableExceptions();
// Setup the API to use the VirtualHub on local machine
let errmsg = new YErrorMsg();
if(await YAPI.RegisterHub('127.0.0.1', errmsg) != YAPI.SUCCESS) {
        console.log('Cannot contact VirtualHub on 127.0.0.1: '+errmsg.msg);
return;
}
// Select specified device, or use first available one
let serial = process.argv[process.argv.length-1];
if(serial[8] != '-') {
// by default use any connected module suitable for the demo
let anysensor = YHumidity.FirstHumidity();
if(anysensor) {
let module = await anysensor.module();
            serial = await module.get_serialNumber();
} else {
            console.log('No matching sensor connected, check cable !');
return;
}
}
    console.log('Using device '+serial);
    temp = YTemperature.FindTemperature(serial+".temperature");
    hum  = YHumidity.FindHumidity(serial+".humidity");
    pres = YPressure.FindPressure(serial+".pressure");
    refresh();
}
async function refresh()
{
if (await hum.isOnline()) {
        console.log('Temperature : '+(await temp.get_currentValue()) + (await temp.get_unit
()));

        console.log('Humidity    : '+(await hum.get_currentValue()) + (await hum.get_unit()
));
        console.log('Pressure    : '+(await pres.get_currentValue()) + (await pres.get_unit
()));
            
            

            
} else {
        console.log('Module not connected');
}
    setTimeout(refresh, 500000);
}

startDemo();




/*app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  }); */

var cors = require('cors')

app.use(cors())

app.get("/", async function(req, res) {
        try{
        res.send(''+ await temp.get_currentValue() +' '+ await hum.get_currentValue() + ' ' + await pres.get_currentValue())

} catch (e) {
                console.log(e);
        
        res.sendStatus(500);
}
 }) ;


let port = process.env.PORT;
if(port == null || port == "") {
 port = 4000;
}
app.listen(port, function() {
 console.log("Server started successfully");
});

