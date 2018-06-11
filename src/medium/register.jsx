import React, {Component} from "react";

import RegisterForm from '../small/registerform'

const formLogin = {
  backgroundColor: "#222222",
  textAlign: "left",
  height: "600px",
  paddingTop: "70px",
  paddingRight: "20%",
  paddingLeft: "20%",
  color: "white"
}


class Register extends Component {

  render(){
    return(
    <div style={formLogin}>
      <RegisterForm/>
    </div>
  )};
 }
export default Register
