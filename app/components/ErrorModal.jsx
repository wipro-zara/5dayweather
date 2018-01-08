var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server')
//data-reveal lets foundation know we are dealing with a modal
//modal is a plugin to create a dialog box/notifications
//data-close = closes the modal

var ErrorModal = React.createClass({
  getDefaultProps: function(){
      return {
          title: 'Error'
      };
  },
    
    propTypes: {
        title: React.PropTypes.string,
        message: React.PropTypes.string.isRequired //IS REQUIRED TO BE A STRING
    },
    
    componentDidMount: function(){
        var {title, message} = this.props;
       
        var modalMarkup =  (
            <div id = "error-modal" className="reveal tiny text-center" data-reveal="">
                <h4>{title}</h4>
                <p>{message}</p>
                <p>
                    <button className="button hollow" data-close="">Okay</button>
                </p>
            </div>
    ); 
        
        var $modal = $(ReactDOMServer.renderToString(modalMarkup));
        
        $(ReactDOM.findDOMNode(this)).html($modal);
        
        var modal = new Foundation.Reveal($('#error-modal'));
        modal.open();      
        
        //foundation makes changes to the DOM with modal.open, and React does not do to well with third party libraries updating the DOM like that.
        
  },
    
    
    render: function(){
    
   
    
    return (
        <div>
        </div>
    )
     
  }
});

module.exports = ErrorModal;