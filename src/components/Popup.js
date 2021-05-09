import React from 'react';
import '../componentCSS/popupElement.css'


//<input  placeholder="Name"></input><br></br><br></br>
function Popup(props){  
    
    console.log(props.show)
        return (props.show !== false) ? (

            <div className="popup" >
                <div className="popup-inner">
                    <div ><b>Add User</b></div><br/>
                    
                    <input  placeholder="ID"></input><br></br><br></br>
                    
                    <button onClick= {props.close} className="btn">cancel</button>
                    <button className="addButton">Add</button>
                </div>
            </div>
        ): "";
    
}


export default Popup