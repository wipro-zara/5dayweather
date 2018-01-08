var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/forecast?&appid=63e9b0e387e2f431aeaec980c4d5b324';

module.exports = {
    getTemp:function(location, arr, arr2, arr3, arr4) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
        return axios.get(requestUrl).then(function (res){
          if (res.data.cod){
            for (var i = 0; i < 40; i++)
            {
              arr.push(res.data.list[i].main.temp);
              arr2.push(res.data.list[i].weather[0].main);
              arr3.push(res.data.list[i].weather[0].icon);
              arr4.push(res.data.list[i].dt);
            }
              return arr, arr2, arr3, arr4;
          }  else {
            throw new Error(res.data.message);
          }
        }, function (err) {
           throw new Error('City not found. Please try another City.');
        });
    },

    getWeather:function(location, arr) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl).then(function (res){
          if (res.data.cod){
            for (var i = 0; i < 5; i++)
            {
              arr.push(res.data.list[i].weather[0].main);
            }
            return arr;
          }
        });
    },

    getWeatherImage:function(location, arr) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl).then(function (res){
          if (res.data.cod){
            for (var i = 0; i < 5; i++)
            {
              arr.push(res.data.list[i].weather[0].icon);
            }
            return arr;
          }
        });
    },



}
