var React = require('react');
var ReactDOM = require('react-dom');

//hasHistory tells react router that we want to use the # sign followed by path in order to maintain the routes for our app
//Route matches everything and renders the component -- main, about or examples
//if it matches no route, it simply renders the Weather component

//If you're using IndexRoute you don't want to use Link, use IndexLink
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var WeatherApp = require('WeatherApp');
var Resources = require('Resources');

//Load Foundation
require('style-loader!css-loader!foundation-sites/dist/foundation.min.css');
$(document).foundation();

//app.css
require('style-loader!css-loader!applicationStyles');


ReactDOM.render(
<Router history={hashHistory}>
    <Route path = "/" component={Main}>
        <Route path = "resources" component={Resources}/>
        <IndexRoute component = {WeatherApp}/>
    </Route>

</Router>,
document.getElementById('app')
);
