import React from 'react';
import '../componentCSS/popupElement.css'


//<input  placeholder="Name"></input><br></br><br></br>
function Popup(props){  
    
    console.log(props.show)
        return (props.show !== false ) ? (

            <div className="popup" >
                <div className="popup-inner">
                    <div ><b>{props.info === true ? "User Info" : "Add User"}</b></div><br/>
                    {props.info === true ?<label> ID: 1234</label> : ""}
                    <input  placeholder={props.info === true? "User ID": "ID"} ></input><br></br><br></br>
                    
                    <button onClick= {props.info === true?props.infoClose:props.close} className="btn">cancel</button>
                    <button className="addButton">Add</button>
                </div>
            </div>
        ): "";
    
}


export default Popup