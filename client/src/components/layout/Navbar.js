import React from 'react'; 
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';

class Navbar extends React.Component {
  logoutUser(e) {
    e.preventDefault();
    this.props.logoutUser(); 
  }

  
  render() {
    const { user, isAuthenticated } = this.props.auth;

    const navb =(
      <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
      <div className="navbar-brand-wrapper d-flex justify-content-center">
            <div className="navbar-brand-inner-wrapper d-flex justify-content-between align-items-center w-100">  
              <a className="navbar-brand brand-logo" href="/"><img src="images/logo.png" alt="logo"/></a>
              <a className="navbar-brand brand-logo-mini" href="/"><img src="images/logo-mini.png" alt="logo"/></a>
              <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
                <span className="mdi mdi-sort-variant"></span>
              </button>
            </div>  
          </div>
          <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">  
            
          <ul class="navbar-nav mr-lg-4 w-100">
            <div className="mr-md-3 mr-xl-5" >  
                  <h2 fontFamily="Algerian"> Sama Poche </h2>
                  <p className="mb-md-0">Avec sama poche, fini les depenses inutile.</p>
                </div>  
            </ul>
            
            <ul className="navbar-nav navbar-nav-right">
              <li className="nav-item dropdown mr-1">
                <a className="nav-link count-indicator dropdown-toggle d-flex justify-content-center align-items-center" id="messageDropdown" href="/" data-toggle="dropdown">
                  <i className="mdi mdi-message-text mx-0"></i>
                  <span className="count"></span>
                </a> 
                <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="messageDropdown">
                  <p className="mb-0 font-weight-normal float-left dropdown-header">Messages</p>
                  <a className="dropdown-item"  href="/" >
                    <div className="item-thumbnail"  href="/" >
                        <img src="images/faces/face4.jpg" alt="image0" className="profile-pic"/>
                    </div>
                    <div className="item-content flex-grow">
                      <h6 className="ellipsis font-weight-normal">David Grey
                      </h6>
                      <p className="font-weight-light small-text text-muted mb-0">
                        The meeting is cancelled
                      </p>
                    </div>
                  </a>
                  <a className="dropdown-item"  href="/" >
                    <div className="item-thumbnail">
                        <img src="images/faces/face2.jpg" alt="image1" className="profile-pic"/>
                    </div>
                    <div className="item-content flex-grow">
                      <h6 className="ellipsis font-weight-normal">Tim Cook
                      </h6>
                      <p className="font-weight-light small-text text-muted mb-0">
                        New product launch
                      </p>
                    </div>
                  </a>
                  <a className="dropdown-item"  href="/" >
                    <div className="item-thumbnail">
                        <img src="images/faces/face3.jpg" alt="image2" className="profile-pic"/>
                    </div>
                    <div className="item-content flex-grow">
                      <h6 className="ellipsis font-weight-normal"> Johnson
                      </h6>
                      <p className="font-weight-light small-text text-muted mb-0">
                        Upcoming board meeting
                      </p>
                    </div>
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown mr-4">
                <a className="nav-link count-indicator dropdown-toggle d-flex align-items-center justify-content-center notification-dropdown" id="notificationDropdown"  href="/"  data-toggle="dropdown">
                  <i className="mdi mdi-bell mx-0"></i>
                  <span className="count"></span>
                </a>
                <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="notificationDropdown">
                  <p className="mb-0 font-weight-normal float-left dropdown-header">Notifications</p>
                  <a className="dropdown-item"  href="/" >
                    <div className="item-thumbnail">
                      <div className="item-icon bg-success">
                        <i className="mdi mdi-information mx-0"></i>
                      </div>
                    </div>
                    <div className="item-content" >
                      <h6 className="font-weight-normal">Application Error</h6>
                      <p className="font-weight-light small-text mb-0 text-muted">
                        Just now
                      </p>
                    </div>
                  </a>
                  <a className="dropdown-item"  href="/" >
                    <div className="item-thumbnail">
                      <div className="item-icon bg-warning">
                        <i className="mdi mdi-settings mx-0"></i>
                      </div>
                    </div>
                    <div className="item-content">
                      <h6 className="font-weight-normal">Parametres</h6>
                      <p className="font-weight-light small-text mb-0 text-muted">
                        Private message
                      </p>
                    </div>
                  </a>
                  <a className="dropdown-item"  href="/" >
                    <div className="item-thumbnail">
                      <div className="item-icon bg-info">
                        <i className="mdi mdi-account-box mx-0"></i>
                      </div>
                    </      div>
                    <div className="item-content">
                      <h6 className="font-weight-normal">New user registration</h6>
                      <p className="font-weight-light small-text mb-0 text-muted">
                        2 days ago
                      </p>
                    </div>
                  </a>
                </div>
              </li>
              <li className="nav-item nav-profile dropdown">
                <a className="nav-link dropdown-toggle"  href="/"  data-toggle="dropdown" id="profileDropdown">
                  <img src="images/faces/face5.jpg" alt="profile"/>
                  <span className="nav-profile-name"> {user.name }</span>
                </a>
                <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
                  <a className="dropdown-item"  href="/" >
                    <i className="mdi mdi-settings text-primary"></i>
                    Parametres
                  </a>
                  <a className="dropdown-item" href="/" onClick={this.logoutUser.bind(this)}>
                    <i className="mdi mdi-logout text-primary"></i>
                    Deconnexion
                  </a>
                </div>
              </li>
            </ul>
            <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
              <span className="mdi mdi-menu"></span>
            </button>
          </div>
          </nav> 
    ) 
 
    return(
 
         <div>
            { isAuthenticated ? navb : null }
         </div>
    );
  }
}

Navbar.propTypes = {
  auth: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps, { logoutUser })(Navbar);