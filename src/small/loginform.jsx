import React, {Component} from "react";
import {Link, Redirect} from 'react-router-dom';
import { Button,
         Form,
         FormGroup,
         Label,
         Input } from 'reactstrap';

const container = {
   width: "100%",
   height: "400px",
   paddingLeft: "20px",
   paddingRight: "20px",
   paddingTop: "20px",
   border: "1px solid white",
  }

const inputLogin = {
    background: "transparent",
    width: "100%",
    color: "white"
  }

const chooseLogin = {
    paddingTop: "2px",
    textAlign: "center",
    fontFamily: "cursive"
  }


class LoginForm extends Component {
  constructor(){
    super();
    this.state = {
      email: "",
      password: ""
    };
     this.handleChangeEmail = this.handleChangeEmail.bind(this);
     this.handleChangePassword = this.handleChangePassword.bind(this);
     this.submitForm = this.submitForm.bind(this)
  }

  handleChangeEmail(event){
    let value = event.target.value;
    this.setState(()=>{
      return { email : value}
    })
  }

  handleChangePassword(event){
    let value = event.target.value;
    this.setState(() => {
      return { password : value}
    })
  }

  submitForm(event){
  event.preventDefault();
  const email = this.state.email
  const password = this.state.password
  if( email  === localStorage.getItem("email") && password === localStorage.getItem("password") )
    {
       return <Redirect to="/login" />
    }
    else{
      alert(
         "Your Username and Password Not Match..Please Check Again or Your must REGISTER first if you don't Have Account"
        )
    }
  }
  render(){
    return(
      <div style={container} className="margin-top-60">
       <Form onSubmit={this.submitForm}>
       <h1>LOGIN</h1>
             <FormGroup>
               <Label
                for="exampleEmail">Email</Label>
               <Input
                style={inputLogin}
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="Please Insert Your Email"
                value={this.state.email}
                onChange={this.handleChangeEmail} />
             </FormGroup>
             <FormGroup>
               <Label for="examplePassword">Password</Label>
               <Input
                style={inputLogin}
                type="password"
                name="password"
                id="examplePassword"
                placeholder="Please Insert Your Password"
                value={this.state.password}
                onChange={this.handleChangePassword} />
             </FormGroup>
             <Button color="warning" size="lg" onSubmit={this.submitForm} block>{this.props.buttonLabel}LOGIN</Button>{' '}
             <h4 style={chooseLogin}>OR</h4>
             <Link to="/register">
             <Button color="info" size="lg" block>REGISTER</Button>{' '}
             </Link>
       </Form>
     </div>
  )};
}

export default LoginForm
