import React from 'react';
import ReactDOM from 'react-dom';
 
class Contact extends React.Component {
  render() {
    return (
    	<li>{this.props.info.name} {this.props.info.phone}</li>
    	)
  }
}
 
export default Contact;