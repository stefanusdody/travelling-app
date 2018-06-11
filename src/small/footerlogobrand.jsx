import React, { Component } from 'react';
import { CardImg } from 'reactstrap';

const imgStyle = {
  height: "40px",
  width: "40px",
  marginLeft: "30px",
  textAlign: "center"
}


class FooterLogoBrand extends Component{
  render(){
    return(
      <div className="col-sm-4">
        <CardImg src={require(`../assets/plane.png`)} style={imgStyle} alt="Card image cap"/>
        <h6>Time To Travelling@2018</h6>
      </div>
  )};
}
export default FooterLogoBrand
