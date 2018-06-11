import React, { Component } from 'react';
import {
  CardImg,
  NavbarBrand
  } from 'reactstrap';


const appTitle = {
  fontSize: "1.5em",
  color: "white"
}

const imgStyle = {
  height: "40px",
  width: "40px",
  color: "white",
  marginRight: "10px"
}

class HeadLogoBrand extends Component {
  render(){
    return(
      <div>
        <CardImg src={require(`../assets/plane.png`)} style={imgStyle} alt="Card image cap"/>
        <NavbarBrand style={appTitle} href="/"> Time To Travelling </NavbarBrand>
      </div>
    )};
}
export default HeadLogoBrand
