var React = require('react');

//refactored as it does not maintain state or define custom methods
//stateless functional component
var Resources = (props) =>
{
    return(
        <div>
            <h1 className="text-center page-title">Resources Used</h1>
            <p>
                This is an application built to retrieve weather of any searched city.
            </p>
            <p>
                The following resources were used in this application:
            </p>
            <ul>
                <li>
                    <a href="https://facebook.github.io/react">React</a> - The JavaScript library that was used.
                </li>
                <li>
                  <a href="https://www.npmjs.com/package/karma">Karma</a> - This was a tool used for TDD testing.

                </li>
                <li>
                    <a href="https://openweathermap.org">Open Weather App</a> - This was used to retrieve the 5-day-weather of any valid city(API).
                </li>
                <li>
                    <a href="https://www.npmjs.com/package/react-moment">react-moment</a> - This is a React component that was used to convert the date provided by the API, from unix to a readable format.
                </li>

                <li>
                    <a href="https://foundation.zurb.com/">Foundation</a> - A front-end framework, that was used for some basic styling.
                </li>
            </ul>
        </div>

       )
};

module.exports = Resources;
