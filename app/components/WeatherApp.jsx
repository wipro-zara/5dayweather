var React = require('react');
var Moment = require('moment');

var WeatherOutput = require('WeatherOutput');
var WeatherForm = require('WeatherForm');
var ErrorModal = require('ErrorModal');
var openWeatherMap = require('openWeatherMap');


var Weather = React.createClass({

    getInitialState: function()
    {
        return {
            isLoading: false,
        }
    },


    handleSearch: function(location){

        var that = this; //"this" gets lost inside the openWeatherMap function - this is a solution

        this.setState({
            isLoading: true,
            errorMessage: undefined,
            location: undefined,

            tempDay1: undefined,
            tempDay2: undefined,
            tempDay3: undefined,
            tempDay4: undefined,
            tempDay5: undefined,

            weatherDay1: undefined,
            weatherDay2: undefined,
            weatherDay3: undefined,
            weatherDay4: undefined,
            weatherDay5: undefined,

            imgIconDay1: undefined,
            imgIconDay2: undefined,
            imgIconDay3: undefined,
            imgIconDay4: undefined,
            imgIconDay5: undefined,

            day1: undefined,
            day2: undefined,
            day3: undefined,
            day4: undefined,
            day5: undefined

        });


        var tempratures = [];
        var weather = [];
        var images = [];
        var days = [];


        openWeatherMap.getTemp(location, tempratures, weather, images, days).then(function (tempDay1) {
         that.setState({
             location: location,

             //40 items over 5 days
             //8 items per 1 day
             //0,7,15,23, 31 - today (now), tomorrow noon, day 3 noon, day 4 noon, day 5 noon.
             tempDay1: tempratures[0],
             tempDay2: tempratures[7],
             tempDay3: tempratures[15],
             tempDay4: tempratures[23],
             tempDay5: tempratures[31],

             weatherDay1: weather[0],
             weatherDay2: weather[7],
             weatherDay3: weather[15],
             weatherDay4: weather[23],
             weatherDay5: weather[31],

             imgIconDay1: images[0],
             imgIconDay2: images[7],
             imgIconDay3: images[15],
             imgIconDay4: images[23],
             imgIconDay5: images[31],

             day3: Moment.unix(days[15]).format('dddd'),
             day4: Moment.unix(days[23]).format('dddd'),
             day5: Moment.unix(days[31]).format('dddd'),

             isLoading: false
         });


        }, function(e){
            that.setState({
                isLoading: false,
                errorMessage: e.message
            });
        });


    },

    componentDidMount: function(){

        var location = this.props.location.query.location; //the last "location" will depend on which property we want to pull out, it could be "name" etc.

        if(location && location.length>0){
            this.handleSearch(location);
            window.location.hash='#/'; //the location query string will be removed/changed after it has found the location succesfuly
        }
    },


    //capturing changes in props
    //parent can always update a child's props
    //built in react function
    componentWillReceiveProps: function(newProps){

        var location = newProps.location.query.location;

        if(location && location.length>0){
            this.handleSearch(location);
            window.location.hash='#/';
        }
    },


    render:function(){
        var {isLoading, location, weather, errorMessage, imgIcon} = this.state; //ES6 destructuring
        var {tempDay1, tempDay2, tempDay3, tempDay4, tempDay5} = this.state;
        var {weatherDay1, weatherDay2, weatherDay3, weatherDay4, weatherDay5} = this.state;
        var {imgIconDay1, imgIconDay2, imgIconDay3, imgIconDay4, imgIconDay5} = this.state;
        var {day1, day2, day3, day4, day5} = this.state;

        function renderMessage(){
          if (isLoading){
             return <h3 className="text-center">searching...</h3>
          }  else if (location){
            return(
            <div id = "container">
            <h3>{location}</h3>
            <WeatherOutput day = {"Today"} temp = {tempDay1} weather = {weatherDay1} imgIcon = {imgIconDay1}/>
            <WeatherOutput day = {"Tomorrow"} temp = {tempDay2} weather = {weatherDay2} imgIcon = {imgIconDay2}/>
            <WeatherOutput day = {day3} temp = {tempDay3} weather = {weatherDay3} imgIcon = {imgIconDay3}/>
            <WeatherOutput day = {day4} temp = {tempDay4} weather = {weatherDay4} imgIcon = {imgIconDay4}/>
            <WeatherOutput day = {day5} temp = {tempDay5} weather = {weatherDay5} imgIcon = {imgIconDay5}/>
            </div>)

          }
        }

        function renderError(){
            if (typeof errorMessage === 'string'){
                return(
                    <ErrorModal message={errorMessage}/>
                )
            }
        }

        return(
           <div>
               <h1 className="text-center page-title">5-Day Weather Forecast</h1>
               <WeatherForm onSearch = {this.handleSearch}/>
               {renderMessage()}
                {renderError()}
           </div>

        );
   }
});

module.exports = Weather;
