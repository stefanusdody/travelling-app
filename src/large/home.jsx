import React, {Component} from "react";
import Header from "./header"

import HomePackagePage from "../medium/homepackagepage"
import Login from "./login"
import Footer from "./footer"


class Home extends Component {
  render(){
    return(
      <div>
          <div>
            <Header/>
          </div>
          <div>
             <HomePackagePage/>
          </div>
          <div>
            <Login/>
          </div>
          <div>
            <Footer/>
          </div>
      </div>
      )};
    }
export default Home
