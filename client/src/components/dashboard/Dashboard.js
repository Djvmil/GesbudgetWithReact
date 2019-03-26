import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";  
 import  SideBar from '../layout/SideBar';
import  BarEntete from '../layout/BarEntete';
import  BarEnteteWecome from '../layout/BarEnteteWelcome';
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
    
  return (
    
    <div className="container-fluid page-body-wrapper"> 
    <SideBar/>
     <div className="main-panel">
       <div className="content-wrapper">
 
        <BarEnteteWecome/>
        <BarEntete/>          

       </div> 
       <footer className="footer">
         <div className="d-sm-flex justify-content-center justify-content-sm-between">
           <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">Copyright © 2019 <a href="/" target="_blank">Djamil</a>. All rights reserved.</span>
           <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">Hand-crafted & made with <i className="mdi mdi-heart text-danger"></i></span>
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