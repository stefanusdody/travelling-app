import React, { Component } from 'react';
import {
  Button,
  Input,
   } from 'reactstrap';

const searchBar = {
 height: "70px",
 width: "100%",
 backgroundColor: "#1abcfe",
 marginTop: "50px",
}

const inputSearch = {
    width: "500px",
    height: "40px",
    textAlign: "center",
  }

const buttonSearch = {
    height: "40px",
    marginLeft: "5px",
    fontSize: "1em",
    textAlign: "center",
  }


class HeadSearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render(){
    return(
       <div className="d-flex justify-content-center" style={searchBar}>
           <Input
            type="text"
            name="text"
            style={inputSearch}
            placeholder="Search Your Favourite Destination"/>
            <Button
            color="danger"
            style={buttonSearch}>
            Search
            </Button>{" "}
        </div>
    )};
}
export default HeadSearchBar
