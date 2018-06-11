import React, { Component } from 'react';
import FooterBody from '../medium/footerbody'

const footerBox = {
  height: "100px",
  backgroundColor: "#222222",
  color: "black",
}

class Footer extends Component{
  render(){
    return(
    <div style={footerBox}>
       <FooterBody/>
   </div>
 )};
  }
export default Footer
