import React, {Component} from "react";

import LoginForm from '../small/loginform'

const formLogin = {
  backgroundColor: "#222222",
  textAlign: "left",
  height: "600px",
  paddingTop: "100px",
  paddingRight: "20%",
  paddingLeft: "20%",
  color: "white"
}


class Login extends Component {

  render(){
    return(
    <div style={formLogin}>
      <LoginForm/>
    </div>
  )};
 }
export default Login
