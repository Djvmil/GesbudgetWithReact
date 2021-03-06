import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import Icons from "./components/layout/Icons";  
import store from "./store";
import Navbar from "./components/layout/Navbar";   
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import SaveTrans from "./components/dashboard/SaveTrans";
import Historique from "./components/dashboard/Historique";  

import Crediteur from "./components/layout/Crediteur";
import Debiteur from "./components/layout/Debiteur"; 
//import Test from "c:/Users/Moustapha S. Dieme/Desktop/Volkeno/React/gesbudget/server/client/public/test";
// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}
class App extends Component {
  
  render() { 
    return (
      

      <Provider store={store}>
        <Router>
          <div className="App"> 
            {}
            <Navbar/> 
            <Route exact path="/landing" component={Navbar} />
            <Route exact path="/" component={Dashboard} />            
            <Route exact path="/icon" component={Icons} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/saveTrans" component={SaveTrans} />
            <Route exact path="/historique" component={Historique} />            
            <Route exact path="/crediteur" component={Crediteur} />            
            <Route exact path="/debiteur" component={Debiteur} />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;


 