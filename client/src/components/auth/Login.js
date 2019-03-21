import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";

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

      <div class="container-scroller">
      <div class="container-fluid page-body-wrapper full-page-wrapper">
        <div class="content-wrapper d-flex align-items-stretch auth auth-img-bg">
          <div class="row flex-grow">
            <div class="col-lg-6 d-flex align-items-center justify-content-center">
              <div class="auth-form-transparent text-left p-3">
                <div class="brand-logo">
                  <img src="../../images/logo.png" alt="logo"/>
                </div>
                <h4>Bienvenue Boss!</h4>
                <h6 class="font-weight-light">Heureux de vous revoir !</h6>
                <form class="pt-3" noValidate onSubmit={this.onSubmit}>
                  <div class="form-group">
                    <label htmlfor="email">Email </label>
                    <div class="input-group">
                      <div class="input-group-prepend bg-transparent">
                        <span class="input-group-text bg-transparent border-right-0">
                          <i class="mdi mdi-account-outline text-primary"></i>
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
                  <div class="form-group">
                    <label htmlfor="password">Mot de passe</label>
                    <div class="input-group">
                      <div class="input-group-prepend bg-transparent">
                        <span class="input-group-text bg-transparent border-right-0">
                          <i class="mdi mdi-lock-outline text-primary"></i>
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
                  <div class="my-2 d-flex justify-content-between align-items-center">
                    <div class="form-check">
                      <label class="form-check-label text-muted">
                        <input type="checkbox" class="form-check-input"/>
                        Se souvenir de moi
                      </label>
                    </div>
                    <a href="#" class="auth-link text-black">Mot de passe oublie?</a>
                  </div>
                  
                  <div class="my-3">
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
                  <div class="mb-2 d-flex">
                    <button type="button" class="btn btn-facebook auth-form-btn flex-grow mr-1">
                      <i class="mdi mdi-facebook mr-2"></i>Facebook
                    </button>
                    <button type="button" class="btn btn-google auth-form-btn flex-grow ml-1">
                      <i class="mdi mdi-google mr-2"></i>Google
                    </button>
                  </div>
                  <div class="text-center mt-4 font-weight-light">
                    Vous n'etes pas membre? <a href="register" class="text-primary">Creer un compte</a>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-lg-6 login-half-bg d-flex flex-row">
              <p class="text-white font-weight-medium text-center flex-grow align-self-end">Copyright &copy; 2019  Tout droit reserver.</p>
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
)(Login);
 