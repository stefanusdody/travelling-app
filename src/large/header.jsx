import React, { Component } from 'react';
import HeadNavbar from '../medium/headnavbar';
import HeadSearchBar from '../small/headsearchbar';
import HeadCarousel from "../medium/headcarousel"

const appStyle = {
  textAlign: "center"
}


class Header extends Component {
  render() {
    return (
      <div style={appStyle}>
          <HeadNavbar/>
          <HeadSearchBar/>
          <HeadCarousel/>
      </div>
    )};
}
export default Header;
