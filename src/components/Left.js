import React from 'react';
import '../componentCSS/left.css'
import Contact from "./Contact"
import Search from "./Search"
import { contacts } from '../constants/constant.js';
import Popup from './Popup'

class Left extends React.Component{
    constructor(){
        super();
    }
    state = {contacts: contacts,AddNewContact: false, Info: false}

    onChangeHandler = (event) => {
        const searchKey = event.target.value;
        const contacts = this.state.contacts;
        const filteredResults = contacts.filter((contact => contact.name.includes(searchKey)));
        this.setState({filteredContacts:filteredResults});
    }

    onAddNewContact = (event)=>{
        this.setState({AddNewContact:!this.state.AddNewContact});
        this.setState({info:false});
    }

    onAddInfo = (event)=>{
        console.log("called addinfo");
        this.setState({AddNewContact:!this.state.AddNewContact});
        this.setState({Info:!this.state.Info});
    }
//
    render(){
        const left_contacts = this.state.filteredContacts === undefined ? this.state.contacts : this.state.filteredContacts ;
        const ZeroResultsJSX = left_contacts.length === 0 ? "No matching contacts" :  "" ;
        return(
            <div className="leftParent">
                <Popup  close={this.onAddNewContact} infoClose={this.onAddInfo} show={this.state.AddNewContact} info={this.state.Info} />
                <div><Search  onAddNewContact={this.onAddNewContact} onChange={this.onChangeHandler} info={this.onAddInfo} /></div>
                <div className="left">
                {left_contacts.map((element)=> <Contact onClick={this.props.onClick} details={element.name} id={element.id} />)}
                <div className="zeroResults">{ZeroResultsJSX}
                </div>
            </div>
            
            </div>
        )
    }
}


export default Left;