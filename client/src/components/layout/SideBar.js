 
import React from 'react'; 
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';

class SideBar extends React.Component {
  logoutUser(e) {
    e.preventDefault();
    this.props.logoutUser(); 
  }

  render() { 
 
    return(
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link" href="/">
              <i className="mdi mdi-home menu-icon"></i>
              <span className="menu-title">Tableau de Bord</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link"  href="/historique" >
              <i className="mdi mdi-history menu-icon"></i> 
              <span className="menu-title">Liste des Transactions</span>
               
            </a>
            
          </li>
           
          <li className="nav-item">
            <a className="nav-link" href="pages/icons/mdi.html">
              <i className="mdi mdi-help-circle-outline menu-icon"></i>
              <span className="menu-title">A propos</span>
            </a>
          </li> 
          <li className="nav-item">
            <a className="nav-link" href="documentation/documentation.html">
              <i className="mdi mdi-file-document-box-outline menu-icon"></i>
              <span className="menu-title">Documentation</span>
            </a>
          </li>
        </ul>
      </nav>    
    );
  }
}

SideBar.propTypes = {
  auth: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps, { logoutUser })(SideBar);