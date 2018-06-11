import React from "react";
import { Switch, Route} from "react-router-dom";
import Home from "../large/home";
import Login from "../large/login";
import HomePackagePage from "../medium/homepackagepage";
import Register from "../medium/register";
import RajaAmpat from "../medium/rajaampatpackage";
import Derawan from "../medium/derawanpackage";
import OraBeach from "../medium/orabeachpackage"



const Main = () => (
   <main>
     <Switch>

       <Route exact path='/' component={Home}/>
       <Route exact path='/login' component={Login}/>
       <Route exact path='/package' component={HomePackagePage}/>
       <Route exact path='/register' component={Register}/>
       <Route exact path='/rajaampatpackage' component={RajaAmpat}/>
       <Route exact path='/derawanpackage' component={Derawan}/>
       <Route exact path='/orabeachpackage' component={OraBeach}/>
     </Switch>
   </main>
)
export default Main
