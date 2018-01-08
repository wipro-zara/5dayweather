var React = require('react');

var WeatherOutput = ({temp, weather, imgIcon, day})=>{

       //var {location, temp} = props; Line has been destructured in the function declaration
       var celciusTemp = Number(temp - 273.15).toFixed(1);

       return(
           <div id = "container">
           <span className="text-center">
             <img src = {"http://openweathermap.org/img/w/"+imgIcon+".png"}/> {day}: {celciusTemp}°C, {weather}
           </span>
         </div>
       );
   };

module.exports = WeatherOutput;
