import React from 'react';
import '../componentCSS/contact.css'
import logo from '../images/user.png'

const Contact = (props) => {

    
    return(
        <div onClick={props.onClick} id={props.id} className="contact">  
            <img src={logo} className="contact-image"></img>
            <div className="contact-name">{props.details == undefined ? "name" : props.details}</div>
        </div>
    );
    
};


export default Contact;