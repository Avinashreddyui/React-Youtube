/**
 * Created by avvinash on 8/18/2017.
 */
import React from "react";

export default class searchBar extends React.Component{
    constructor(){
        super();
        this.state={term:""};
    }
    onInputChange(term){
        this.setState({term});
        this.props.onSerachTerm(term);
    }
    render() {
        return (
            <div className="search-term">
                <input className="search-bar" onChange={(event)=>this.onInputChange(event.target.value)}/>
            </div>
        )
    }
}