import React, {Component} from 'react';
import HomePackagePageBody from '../small/homepackagepagebody'

const pagePackage = {
  height: "1340px",
  backgroundColor: "#222222",
  paddingTop: "50px"
}

class HomePackagePage extends Component {
  render(){
    return(
    <div style={pagePackage}>
      <HomePackagePageBody/>
    </div>
  )};
}
export default HomePackagePage
