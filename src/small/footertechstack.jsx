import React, { Component } from 'react';
import { CardImg } from 'reactstrap';

const imgStyle = {
  height: "40px",
  width: "40px",
  marginLeft: "30px",
  textAlign: "center"
}

class FooterTechStack extends Component {
  render(){
    return(
      <div className="col-sm-4">
        <h6>Tech Stack :</h6>
        <CardImg src={require(`../assets/html.png`)} style={imgStyle} alt="Card image cap"/>
        <CardImg src={require(`../assets/css.png`)} style={imgStyle} alt="Card image cap"/>
        <CardImg src={require(`../assets/bootstrap.png`)} style={imgStyle} alt="Card image cap"/>
        <CardImg src={require(`../assets/react.png`)} style={imgStyle} alt="Card image cap"/>
      </div>
  )};
}
export default FooterTechStack
