 
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';

class SideBar extends React.Component {
  logoutUser(e) {
    e.preventDefault();
    this.props.logoutUser(); 
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    const userLinks = (
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><Link to="/historique">Historique</Link></li>
        <li><a href="#" onClick={this.logoutUser.bind(this)}>Logout</a></li>
      </ul>
    );

    const guestLinks = (
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><Link to="/register">Inscription</Link></li>
        <li><Link to="/login">Connexion</Link></li>
      </ul>
    );
    const solde = (
      <nav>
        <div className="nav-wrapper teal white ">
          <Link
            to="/"
            className="navbar-brand" >
            <a href="#!" class="brand-logo "><i class="material-icons">code</i><span class="black-text ">Votre solde est au montant de : </span><button
              style={{
                width: "150px",
                height: "40px",
                borderRadius: "3px",
                letterSpacing: "1.5px"
              }}
              type="submit"
              className="btn btn-large waves-effect waves-light hoverable teal darken-3"
            >
              <b class="teal darken-3">96675</b>
            </button> </a>
          </Link>
        </div> 
      </nav>
    );
    return(
        <nav class="sidebar sidebar-offcanvas" id="sidebar">
        <ul class="nav">
          <li class="nav-item">
            <a class="nav-link" href="/">
              <i class="mdi mdi-home menu-icon"></i>
              <span class="menu-title">Tableau de Bord</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
              <i class="mdi mdi-history menu-icon"></i> 
              <span class="menu-title">Liste des Transactions</span>
               
            </a>
            
          </li>
           
          <li class="nav-item">
            <a class="nav-link" href="pages/icons/mdi.html">
              <i class="mdi mdi-help-circle-outline menu-icon"></i>
              <span class="menu-title">A propos</span>
            </a>
          </li> 
          <li class="nav-item">
            <a class="nav-link" href="documentation/documentation.html">
              <i class="mdi mdi-file-document-box-outline menu-icon"></i>
              <span class="menu-title">Documentation</span>
            </a>
          </li>
        </ul>
      </nav>    
    );
  }
}

SideBar.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps, { logoutUser })(SideBar);