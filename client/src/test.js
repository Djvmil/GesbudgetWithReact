import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { logoutUser } from './actions/authActions';

import  SideBar from './components/layout/SideBar';
import  BarEntete from './components/layout/BarEntete';
import  BarEnteteWecome from './components/layout/BarEnteteWelcome';
import  TransactionGraph from './components/layout/TransactionGraph';
import  TransactionList from './components/layout/TransactionList';

class Test extends React.Component {
  logoutUser(e) {
    e.preventDefault();
    this.props.logoutUser(); 
  }

  render() {
    const { isAuthenticated } = this.props.auth;

  
    return(      

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

Test.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps, { logoutUser })(Test);