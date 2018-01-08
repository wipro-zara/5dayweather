var React = require('react');
var Navbar = require('Navbar');

var Main = (props)=>{
    
       return (
           <div>
               <Navbar/>
               <div className="row">
                   <div className="small-centered medium-4 large-6 columns">
                       {props.children}
                   </div>
               </div>
               
           </div>
       )
};
    

module.exports = Main;