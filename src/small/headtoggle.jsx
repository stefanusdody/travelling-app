import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
  } from 'reactstrap';


const appTitleBar = {
  marginTop: "20px",
  color: "white",

}

class HeadToggle extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
    this.submitForm = this.submitForm.bind(this)
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  submitForm(event){
    event.preventDefault();
  }

  render(){
    return(
    <div className="d-flex ml-auto p-2" onSubmit={this.submitForm}>
      <NavbarToggler onClick={this.toggle}/>
       <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar >
             <NavItem>
                <NavLink style={appTitleBar} href="/" >Home</NavLink>
             </NavItem>
             <NavItem>
                <NavLink  style={appTitleBar} href="/package">Package</NavLink>
             </NavItem>
             <UncontrolledDropdown nav inNavbar>
               <DropdownToggle nav caret style={appTitleBar}>
                 Options
               </DropdownToggle>
               <DropdownMenu right>
               <Link to="/login">
                 <DropdownItem>
                   Login
                 </DropdownItem>
               </Link>
               <Link to="/register">
                 <DropdownItem>
                   Register
                 </DropdownItem>
               </Link>
                 <DropdownItem divider />
                 <Link to="/">
                 <DropdownItem>
                    Log Out
                 </DropdownItem>
                 </Link>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
      </Collapse>
   </div>
  )};
}
export default HeadToggle
