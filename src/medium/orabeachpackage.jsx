import React, {Component} from 'react';

import OraBeachPackageBody from '../small/orabeachpackagebody'

const pagePackage = {
    backgroundColor: "#222222",
    paddingTop: "50px"
  }

class OraBeach extends Component{
  render(){
    return(
      <div style={pagePackage} >
          <OraBeachPackageBody/>
      </div>
  )};
}
export default OraBeach
