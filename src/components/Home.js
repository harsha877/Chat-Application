import React from 'react';
import '../componentCSS/home.css'
import Right from "./Right"
import Left from "./Left"
import {contacts} from "../constants/constant"
import Popup from "./Popup"

class Home extends React.Component{
    constructor(){
        super();
    }

    state = {id:undefined,
            contacts:contacts};
    contactid = undefined;

    extractID = (event) => {
        event.persist();
        var contactid = event.currentTarget.id;
        this.setState({id:contactid}, () => {
            this.getContactNamefromID(this.state.id);
        })
        
        
    }

    getContactNamefromID = (id) => {
        console.log(id + "getContactNamefromID")
        const name = this.state.contacts.filter(contact => contact.id === id);
        this.setState({focussedContact: name});
        
    }


    render(){
        return(
            <div className="home">
                <div ><Left  onClick={(event) =>{this.extractID(event)}} className="left"/></div>  
                <Right contactID={this.state.focussedContact} className="right"/>
                
            </div>
        )
    }
}


export default Home;