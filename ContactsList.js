import React from 'react';
import ReactDOM from 'react-dom';
import Contact from './Contact.js';
 
class ContactsList extends React.Component {
  render() {
    return (
    	<ul>
    	{this.props.info.map(function(info){
    		return <Contact info={info} key={info.id}/>
    	})}
    	</ul>
    	)
  }
}
 
export default ContactsList;