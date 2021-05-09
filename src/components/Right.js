import React from 'react';
import '../componentCSS/right.css'
import RightHead from './RightHead'
import {Usermessages} from '../constants/constant';

class Right extends React.Component{
    constructor(){
        super();
    }
    state = {Usermessages : Usermessages}

    parseLongMessages = (message) => {
        if (message.length <= 120) return message;
        return( message.substring(0,120)+ " \n " + 
            this.parseLongMessages(message.substring(120,message.length)));
    }

    onChangeHandler =(event) => {
        event.persist();
        const userTypedMessage = event.target.value;
        this.setState({userTypedMessage : userTypedMessage})
    }

    onClickHandler = (event) => {
        
        const userTypedMessage = this.state.userTypedMessage;
        var newMessages = [... this.state.Usermessages];
        if (userTypedMessage === undefined || userTypedMessage.length === 0) return
        this.setState({userTypedMessage : ""})
        newMessages.unshift({message: userTypedMessage,direction :"1"});
        this.setState({Usermessages:newMessages})
        console.log(newMessages);

    }

    onKeyPressed = (event) =>{
        if(event.key === "Enter") {
            this.onClickHandler(event);
        }
    }

    render(){
        return(
            <div className="rightParent">
                <RightHead contactID={this.props.contactID} />
                <div className="rightChild-body">
                    {this.state.Usermessages.map(message => 
                        <div className = {message.direction === "1" ? "rightChild-body-right" : "rightChild-body-left" }>
                            {this.parseLongMessages(message.message)}
                        </div>)}
                </div>
                <div className="right-text">
                    <input onChange = {this.onChangeHandler} onKeyPress={this.onKeyPressed} alt="Type your message" value={this.state.userTypedMessage}></input>
                    <button onClick = {this.onClickHandler} >Send</button>
                </div>
            </div>
        )
    }
}


export default Right;