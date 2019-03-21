import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";  
import Icons from "../layout/Icons";  

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import  SideBar from '../layout/SideBar';
import  BarEntete from '../layout/BarEntete';
import  BarEnteteWecome from '../layout/BarEnteteWelcome';
import  TransactionGraph from '../layout/TransactionGraph';
import  TransactionList from '../layout/TransactionList';
class Dashboard extends Component {
  logoutUser(e) {
    e.preventDefault();
    this.props.logoutUser(); 
  }
  onLoginClick = e => {
   this.props.history.push('/login');
  };

  onTransClick = e => {
    this.props.history.push('/saveTrans');
  }; 

  onRegisterClick = e => {
    this.props.history.push('/register');
  };  

  componentDidUpdate() {
    if (!this.props.auth.isAuthenticated) {
      window.location.href = "./login";
    } 
   } 
 
render() {
  const { isAuthenticated } = this.props.auth;

  const userLinks = (
    <div className="col s12 center-align">
    <h4>
      <b>Hey bonjour,</b> {} 
      <p className="flow-text grey-text text-darken-1">
        Vous etes connecter{" "}
        <span style={{ fontFamily: "monospace" }}>GB</span> app 👏
      </p>


    </h4>
    <button
      style={{
        width: "300px",
        borderRadius: "3px",
        letterSpacing: "1.5px",
        marginTop: "1rem"
      }}
      onClick={this.onTransClick}
      className="btn btn-large waves-effect waves-light hoverable teal darken-3"
    >
      Faire une transaction
    </button>
    
  </div>
  );

  const guestLinks = (
    <div className="col s12 center-align">
    <h4>
      <b>Hey bonjour,</b> {} 
      <p className="flow-text grey-text text-darken-1">
        Vous n'etes pas connecter{" "}
        <span style={{ fontFamily: "monospace" }}> a GB</span> app 👏
      </p>


    </h4>
    <button
      style={{
        width: "300px",
        borderRadius: "3px",
        letterSpacing: "1.5px",
        marginTop: "1rem"
      }}
      onClick={this.onLoginClick}
      className="btn btn-large waves-effect waves-light hoverable teal darken-3"
    >
      Me connecter
    </button>   "  "  
    <button
      style={{
        width: "300px",
        borderRadius: "3px",
        letterSpacing: "1.5px",
        marginTop: "1rem"
      }}
      onClick={this.onRegisterClick}
      className="btn btn-large waves-effect waves-light hoverable teal darken-3"
    >
      M'inscrire
    </button>
  </div>
  ); 
  return (
    
    <div class="container-fluid page-body-wrapper"> 
    <SideBar/>
     <div class="main-panel">
       <div class="content-wrapper">
 
        <BarEnteteWecome/>
        <BarEntete/>         
        <TransactionGraph/>
        <TransactionList/> 

       </div> 
       <footer class="footer">
         <div class="d-sm-flex justify-content-center justify-content-sm-between">
           <span class="text-muted text-center text-sm-left d-block d-sm-inline-block">Copyright © 2019 <a href="https://www.urbanui.com/" target="_blank">Urbanui</a>. All rights reserved.</span>
           <span class="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">Hand-crafted & made with <i class="mdi mdi-heart text-danger"></i></span>
         </div>
       </footer> 
     </div> 
   </div>  
    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);