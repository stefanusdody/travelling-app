import React, { Component } from 'react';

import HeadLogoBrand from '../small/headlogobrand';
import HeadToggle from '../small/headtoggle'

import {
  Navbar,
  } from 'reactstrap';

  const appHeader = {
    backgroundColor: "#1abcfe",
    height: "50px",
  }

  class HeaderNavbar extends Component {

   render(){
     return(
     <Navbar style={appHeader} light expand="md" className="fixed-top">
       <HeadLogoBrand/>
       <HeadToggle/>
     </Navbar>
   )};
  }
  export default HeaderNavbar
