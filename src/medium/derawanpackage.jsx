import React, {Component} from 'react';

import DerawanPackageBody from '../small/derawanpackagebody'

const pagePackage = {
    backgroundColor: "#222222",
    paddingTop: "50px"
  }

class Derawan extends Component{
  render(){
    return(
    <div style={pagePackage} >
      <DerawanPackageBody/>
    </div>
  )};
}
export default Derawan
