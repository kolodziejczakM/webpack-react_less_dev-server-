import React from 'react';
import ReactDOM from 'react-dom';
import ContactsList from './ContactsList.js';
import Contact from './Contact.js';
import './style.less';
 
let contacts = [{
	id: 1,
	name: "Marcin",
	phone: '723 916 700'
},
	{
	id:2,	
	name: "Beata",
	phone: '522 216 430'
},
{	id:3,
	name: "Mateusz",
	phone: '798 878 223'
}
];

class App extends React.Component {
  render() {

    return (
    	  <div>	
    		<h1>Contacts List </h1>
    		<ContactsList info = {this.props.info} />
    	  </div>	
    	)
  }
}
 
ReactDOM.render(<App info = {contacts}/>, document.getElementById('render'));
