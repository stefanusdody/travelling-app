import React, {Component} from "react";
import {Link } from 'react-router-dom';
import { Button,
         Form,
         FormGroup,
         Label,
         Input } from 'reactstrap';

const container = {
   width: "100%",
   height: "500px",
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


class RegisterForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    };
     this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
     this.handleChangeLastName = this.handleChangeLastName.bind(this);
     this.handleChangeEmail = this.handleChangeEmail.bind(this);
     this.handleChangePassword = this.handleChangePassword.bind(this);
     this.registerForm = this.registerForm.bind(this)
  }
  handleChangeFirstName(event){
    let value = event.target.value;
    this.setState(() =>{
      return { firstname : value }
    });
  }

  handleChangeEmail(event){
    let value = event.target.value;
    this.setState(()=>{
      return { email : value}
    });
  }

  handleChangePassword(event){
    let value = event.target.value;
    this.setState(() => {
      return { password : value}
    });
  }

  handleChangeLastName(event){
    let value = event.target.value;
    this.setState(() =>{
      return { lastname: value }
    })
  }

  registerForm(event){
   event.preventDefault();
   const firstname = this.state.firstname
   const lastname = this.state.lastname
   const email = this.state.email
   const password = this.state.password
   // save in local storage
   localStorage.setItem("firstname" , firstname)
   localStorage.setItem("lastname" , lastname)
   localStorage.setItem("email" , email)
   localStorage.setItem("password" , password)
  }
  render(){
    console.log("state", this.state);
    return(
      <div style={container}>
       <Form onSubmit={this.submitForm}>
       <h1>Register</h1>
             <FormGroup>
             <Label
             for="exampleEmail">First Name</Label>
             <Input
               style={inputLogin}
               type="firstname"
               name="firstname"
               placeholder="Insert Your First Name"
               value={this.state.firstname}
               onChange={this.handleChangeFirstName} />
             </FormGroup>
             <FormGroup>
             <Label
             for="exampleEmail">Last Name</Label>
             <Input
               style={inputLogin}
               type="lastname"
               name="lastname"
               placeholder="Insert Your Last Name"
               value={this.state.lastname}
               onChange={this.handleChangeLastName} />
             </FormGroup>
             <FormGroup>
               <Label
                for="exampleEmail">Email</Label>
               <Input
                style={inputLogin}
                type="email"
                name="email"
                placeholder="with a placeholder"
                value={this.state.email}
                onChange={this.handleChangeEmail} />
             </FormGroup>
             <FormGroup>
               <Label for="examplePassword">Password</Label>
               <Input
                style={inputLogin}
                type="password"
                name="password"
                placeholder="with a placeholder"
                value={this.state.password}
                onChange={this.handleChangePassword} />
             </FormGroup>
             <Link to="/login">
             <Button color="info" size="lg" block>REGISTER</Button>{' '}
             </Link>
       </Form>
     </div>
  )};
}

export default RegisterForm
