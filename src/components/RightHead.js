import React from 'react';
import '../componentCSS/rightHead.css'
import logo from '../images/user.png'


function RightHead(props){  
    console.log("right head"); 
    const name = (props.contactID === undefined ? "default" : props.contactID[0].name); 
        return(
            <div className="rightHead" >
                <div><img className="right-image" src={logo}></img></div>
                <div className="right-name">{name}</div>
            </div>
        )
    
}


export default RightHead;