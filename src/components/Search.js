import React from 'react';
import '../componentCSS/search.css'


class Search extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div className="search">
                <button onClick={this.props.info} className="addButton">O</button>
                <input onChange ={this.props.onChange} placeholder='Search' className="searchText"></input>
                <button onClick={this.props.onAddNewContact} className="addButton">+</button>
            </div>
        )
    }
}


export default Search;