import React, { Component } from 'react';

import FooterLogoBrand from '../small/footerlogobrand';
import FooterTechStack from '../small/footertechstack';
import FooterInfoContact from '../small/footerinfocontact'

const containerBox = {
  backgroundColor: "#1abcfe",
  height: "100%",
  marginRight: "20px",
  marginLeft: "20px",
  textAlign: "center",
  paddingTop: "20px",
}

class FooterBody extends Component{
  render(){
    return(
      <div className="footer" style={containerBox}>
        <div className="row">
          <FooterLogoBrand/>
          <FooterTechStack/>
          <FooterInfoContact/>
      </div>
    </div>
    )};
}

export default FooterBody
