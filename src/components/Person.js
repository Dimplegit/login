import React, { Component } from "react";
import "./person.css";


class person extends Component {
constructor(props){
    super(props);
    this.props=props;
}        

    render () {
        return (
            <div className="personBox">
                <h1>
                   <label> Name</label> :<i> {this.props.name} </i>
                   <br />
                   <label>Age </label> :<i>{this.props.Age}</i>
                </h1>
            </div>
        );
    }
} 

export default person;