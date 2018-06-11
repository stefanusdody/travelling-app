import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Button, CardImg } from 'reactstrap';

const imgStyle = {
  height: "400px",
  width: "100%",

}
const containerBody = {
  width: "100%",
  paddingLeft: "20px",
  paddingRight: "20px",
  paddingTop: "20px"
}

const fontImage = {
  color: "white",
  paddingTop: "50px",
  paddingBottom: "10px",
  textAlign: "center",
  fontSize: "60px",
  fontFamily: "cursive"
}


class HomePackagePageBody extends Component {
  render(){
    return(
    <div>
      <div style={containerBody}>
       <div className="row">
          <div className="col-sm-8">
             <CardImg src={require(`../assets/raja-ampat-islands.jpg`)} style={imgStyle} alt="Card image cap"/>
          </div>
          <div className="col-sm-4">
           <h1 style={fontImage}>Raja Ampat Islands (Papua)</h1>
           <br/>
           <Link to="/rajaampatpackage">
           <Button outline color="info" block>info</Button>{' '}
           </Link>
         </div>
       </div>
     </div>
     <div style={containerBody}>
      <div className="row">
         <div className="col-sm-4">
         <h1 style={fontImage}>Ora Beach (Maluku)</h1>
         <br/>
         <Link to="/orabeachpackage">
         <Button outline color="info" block>info</Button>{' '}
         </Link>
         </div>
         <div className="col-sm-8">
          <CardImg src={require(`../assets/Pantai-Ora.jpg`)} style={imgStyle} alt="Card image cap"/>
        </div>
      </div>
    </div>
    <div style={containerBody}>
     <div className="row">
        <div className="col-sm-8">
           <CardImg  src={require(`../assets/derawan.jpg`)} style={imgStyle} alt="Card image cap"/>
        </div>
        <div className="col-sm-4">
          <h1 style={fontImage}>Derawan (Maluku)</h1>
         <br/>
         <Link to="/derawanpackage">
         <Button outline color="info" block>info</Button>{' '}
         </Link>
       </div>
     </div>
   </div>
  </div>
 )};
}
export default HomePackagePageBody
