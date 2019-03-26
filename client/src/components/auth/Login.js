import React, { Component } from "react"; 
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
import {withRouter } from "react-router-dom";

class Login extends Component {
  constructor() {
    super();
      this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
     if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard"); 
    }
 
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;
 
    return (

      <div className="container-scroller">
      <div className="container-fluid page-body-wrapper full-page-wrapper">
        <div className="content-wrapper d-flex align-items-stretch auth auth-img-bg">
          <div className="row flex-grow">
            <div className="col-lg-6 d-flex align-items-center justify-content-center">
              <div className="auth-form-transparent text-left p-3">
                <div className="brand-logo">
                  <img src="../../images/logo.png" alt="logo"/>
                </div>
                <h4>Bienvenue Boss!</h4>
                <h6 className="font-weight-light">Heureux de vous revoir !</h6>
                <form className="pt-3" noValidate onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <label htmlfor="email">Email </label>
                    <div className="input-group">
                      <div className="input-group-prepend bg-transparent">
                        <span className="input-group-text bg-transparent border-right-0">
                          <i className="mdi mdi-account-outline text-primary"></i>
                        </span>
                      </div>
                      <input 
                       type="email"
                        id="email" 
                        onChange={this.onChange}
                        value={this.state.email}
                        error={errors.email}                      
                        placeholder="Email"                       
                        className={classnames("form-control form-control-lg border-left-0", {
                        invalid: errors.email || errors.emailnotfound
                      })}/>
                    </div>
                      <span className="text-danger">
                        {errors.email}
                        {errors.emailnotfound}
                      </span>
                  </div>
                  <div className="form-group">
                    <label htmlfor="password">Mot de passe</label>
                    <div className="input-group">
                      <div className="input-group-prepend bg-transparent">
                        <span className="input-group-text bg-transparent border-right-0">
                          <i className="mdi mdi-lock-outline text-primary"></i>
                        </span>
                      </div>
                      <input 
                      type="password"  
                      onChange={this.onChange}
                      value={this.state.password}
                      error={errors.password}
                      id="password"
                      placeholder="Password"
                      className={classnames("form-control form-control-lg border-left-0", {
                        invalid: errors.password || errors.passwordincorrect
                      })}
                      />                        
                    </div>
                    <span className="text-danger">
                      {errors.password}
                      {errors.passwordincorrect}
                    </span>
                  </div>
                  <div className="my-2 d-flex justify-content-between align-items-center">
                    <div className="form-check">
                      <label className="form-check-label text-muted">
                        <input type="checkbox" className="form-check-input"/>
                        Se souvenir de moi
                      </label>
                    </div>
                    <a href="/" className="auth-link text-black">Mot de passe oublie?</a>
                  </div>
                  
                  <div className="my-3">
                    <button
                        style={{ 
                          borderRadius: "3px",
                          letterSpacing: "1.5px",
                          marginTop: "1rem"
                        }}
                        type="submit"
                        className="btn btn-large waves-effect waves-light hoverable teal darken-3btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                      >
                      Connexion
                    </button>
                   </div> 
                  <div className="text-center mt-4 font-weight-light">
                    Vous n'etes pas membre? <a href="register" className="text-primary">Creer un compte</a>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6 login-half-bg d-flex flex-row">
              <p className="text-white font-weight-medium text-center flex-grow align-self-end">Copyright &copy; 2019  Tout droit reserver.</p>
            </div>
          </div>
        </div> 
      </div> 
      </div>

 
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(withRouter(Login));
 