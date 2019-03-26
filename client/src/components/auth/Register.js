import React, { Component } from "react";
import {withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";


class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      name: "",
      name1: "",
      budget: Number,
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  componentWillReceiveProps(nextProps) {
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

    const newUser = {
      name: this.state.name,
      name1: this.state.name1,
      email: this.state.email,
      budget: this.state.budget,
      username: this.state.username,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser, this.props.history);
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
                <h4>Vous etes nouveau ici?</h4>
                <h6 className="font-weight-light">
Rejoignez-nous aujourd'hui! Cela ne vous prendra que quelques minutes</h6>
                <form className="pt-3" noValidate onSubmit={this.onSubmit}>
                
                <div className="form-group" >
                <label htmlFor="name">Prenom</label>
                    <div className="input-group">
                      <div className="input-group-prepend bg-transparent">
                        <span className="input-group-text bg-transparent border-right-0">
                          <i className="mdi mdi-account-outline text-primary"></i>
                        </span>
                      </div>
                      <input 
                      onChange={this.onChange}
                      value={this.state.name}
                      error={errors.name}
                      id="name"
                      type="text"
                      className={classnames("form-control form-control-lg border-left-0", {
                        invalid: errors.name
                      })} 
                      placeholder="Prenom"/>
                      <span className="text-danger">{errors.name}</span>
                    </div>
                  </div>

                  <div className="form-group">
                  <label htmlFor="name">Nom</label>
                    <div className="input-group">
                      <div className="input-group-prepend bg-transparent">
                        <span className="input-group-text bg-transparent border-right-0">
                          <i className="mdi mdi-account-outline text-primary"></i>
                        </span>
                      </div>
                      <input 
                       onChange={this.onChange}
                      value={this.state.name1}
                      error={errors.name1}
                      id="name1"
                      type="text"
                      className={classnames("form-control form-control-lg border-left-0", {
                        invalid: errors.name1
                      })} 
                      placeholder="Nom"/>
                      <span className="text-danger">{errors.name1}</span>
                    </div>
                  </div>

                  <div className="form-group">
                  <label htmlFor="budget">Votre budget</label>
                    <div className="input-group">
                      <div className="input-group-prepend bg-transparent">
                        <span className="input-group-text bg-transparent border-right-0">
                          <i className="mdi mdi-currency-usd text-primary"></i>
                        </span>
                      </div>
                      <input
                       onChange={this.onChange}
                       value={this.state.budget}
                       error={errors.budget}
                       id="budget"
                       type="number"
                       className={classnames("form-control form-control-lg border-left-0", {
                         invalid: errors.budget
                       })} 
                       placeholder="Budget"/>
                       <span className="text-danger">{errors.budget}</span>
                     </div>
                   </div>  
                  <div className="form-group">
                   <label htmlFor="username">Username</label>
                    <div className="input-group">
                      <div className="input-group-prepend bg-transparent">
                        <span className="input-group-text bg-transparent border-right-0">
                          <i className="mdi mdi-account-outline text-primary"></i>
                        </span>
                      </div>
                      <input 
                          onChange={this.onChange}
                          value={this.state.username}
                          error={errors.username}
                          id="username"
                          type="text"
                          className={classnames("form-control form-control-lg border-left-0", {
                            invalid: errors.username
                          })} 
                         placeholder="Username"
                      />
                    </div>
                   <span className="text-danger">{errors.username}</span>      
                  </div>

                  <div className="form-group">
                  <label htmlFor="email">Email</label>
                    <div className="input-group">
                      <div className="input-group-prepend bg-transparent">
                        <span className="input-group-text bg-transparent border-right-0">
                          <i className="mdi mdi-email-outline text-primary"></i>
                        </span>
                      </div>
                      <input 
                         onChange={this.onChange}
                         value={this.state.email}
                         error={errors.email}
                         id="email"
                         type="email"
                         className={classnames("form-control form-control-lg border-left-0", {
                           invalid: errors.email
                         })} 
                        placeholder="Email"
                      />
                    </div> 
                   <span className="text-danger">{errors.email}</span>
      
                    
       
                  </div> 
                  <div className="form-group">
                  <label htmlFor="password">Mot de passe</label>
                    <div className="input-group">
                      <div className="input-group-prepend bg-transparent">
                        <span className="input-group-text bg-transparent border-right-0">
                          <i className="mdi mdi-lock-outline text-primary"></i>
                        </span>
                      </div>
                      <input 
                         onChange={this.onChange}
                         value={this.state.password}
                         error={errors.password}
                         id="password"
                         type="password"
                         className={classnames("form-control form-control-lg border-left-0", {
                           invalid: errors.password
                         })}
                                       
                      placeholder="Mot de passe"
                      />                        
                    </div>                    
                     <span className="text-danger">{errors.password}</span>        
                  </div>

                  <div className="form-group">
                  <label htmlFor="password2">Confirmer votre Mot de passe</label>
                    <div className="input-group">
                      <div className="input-group-prepend bg-transparent">
                        <span className="input-group-text bg-transparent border-right-0">
                          <i className="mdi mdi-lock-outline text-primary"></i>
                        </span>
                      </div>
                      <input 
                         onChange={this.onChange}
                         value={this.state.password2}
                         error={errors.password2}
                         id="password2"
                         type="password"
                         className={classnames("form-control form-control-lg border-left-0", {
                           invalid: errors.password2
                         })}
                                       
                      placeholder="Confirmer votre Mot de passe"
                      />                        
                    </div>                    
                     <span className="text-danger">{errors.password2}</span>        
                  </div>
                  
                  <div className="mb-4">
                    <div className="form-check">
                      <label className="form-check-label text-muted">
                        <input 
                        onChange={this.onChange}
                        value={this.state.condition}
                        error={errors.condition}
                        id="condition" 
                        className={classnames("form-check-input", {
                          invalid: errors.condition
                        })}
                        type="checkbox" />
                      
                        I agree to all Terms & Conditions
                      </label>
                    </div>
                  </div>
                  <div class="mt-3">
                    <button
                      style={{ 
                        borderRadius: "3px",
                        letterSpacing: "1.5px",
                        marginTop: "1rem"
                      }}
                      type="submit"
                      className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                      >
                      S'inscrire
                    </button> 
                   </div>
                  <div className="text-center mt-4 font-weight-light">
                    Vous etes deja membre? <a href="login" className="text-primary">Connectez-vous</a>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6 register-half-bg d-flex flex-row">
              <p className="text-white font-weight-medium text-center flex-grow align-self-end">Copyright &copy; 2019  Tout droit reserver.</p>
            </div>
          </div>
        </div> 
      </div> 
    </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
