var React = require('react');
var {Link, IndexLink} = require('react-router'); // {} - ES6 destructuring, creates a variable called Link that equals to whatever is on it's right which is the Link property to react-router.link
//Link is special to react, used instead of a href
//Link enables us to add custom styles and classes to the element/link that is for the current page -- deals with all this logic
//If you're using IndexRoute you don't want to use Link, use IndexLink
//IndexLink is useful for making sure that multiple pages are not active -- e.g. so that the main/index page isn't marked as active.

//class in jsx is the class keyword, so for HTML in jsx you must use className

var Navbar = React.createClass(
{

    render: function()
    {
        return(
        <div className = "top-bar">
                <ul className = "menu">
                    <li className = "menu-text">Weather Forecast</li>
                    <li>
                        <IndexLink to="/" activeClassName = "active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
                    </li>
                    <li>
                        <Link to="/resources" activeClassName = "active" activeStyle={{fontWeight: 'bold'}}>Resources Used</Link>
                    </li>
                </ul>
          </div>


        );
    }
});


module.exports = Navbar;
