import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
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
      budget: "",
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

      <div class="container-scroller">
      <div class="container-fluid page-body-wrapper full-page-wrapper">
        <div class="content-wrapper d-flex align-items-stretch auth auth-img-bg">
          <div class="row flex-grow">
            <div class="col-lg-6 d-flex align-items-center justify-content-center">
              <div class="auth-form-transparent text-left p-3">
                <div class="brand-logo">
                  <img src="../../images/logo.png" alt="logo"/>
                </div>
                <h4>Vous etes nouveau ici?</h4>
                <h6 class="font-weight-light">Join us today! It takes only few steps</h6>
                <form class="pt-3" noValidate onSubmit={this.onSubmit}>
                
                <div class="form-group" >
                <label htmlFor="name">Prenom</label>
                    <div class="input-group">
                      <div class="input-group-prepend bg-transparent">
                        <span class="input-group-text bg-transparent border-right-0">
                          <i class="mdi mdi-account-outline text-primary"></i>
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

                  <div class="form-group">
                  <label htmlFor="name">Nom</label>
                    <div class="input-group">
                      <div class="input-group-prepend bg-transparent">
                        <span class="input-group-text bg-transparent border-right-0">
                          <i class="mdi mdi-account-outline text-primary"></i>
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

                  <div class="form-group">
                  <label htmlFor="budget">Votre budget</label>
                    <div class="input-group">
                      <div class="input-group-prepend bg-transparent">
                        <span class="input-group-text bg-transparent border-right-0">
                          <i class="mdi mdi-account-outline text-primary"></i>
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
                  <div class="form-group">
                   <label htmlFor="username">Username</label>
                    <div class="input-group">
                      <div class="input-group-prepend bg-transparent">
                        <span class="input-group-text bg-transparent border-right-0">
                          <i class="mdi mdi-account-outline text-primary"></i>
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

                  <div class="form-group">
                  <label htmlFor="email">Email</label>
                    <div class="input-group">
                      <div class="input-group-prepend bg-transparent">
                        <span class="input-group-text bg-transparent border-right-0">
                          <i class="mdi mdi-email-outline text-primary"></i>
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
                  <div class="form-group">
                  <label htmlFor="password">Mot de passe</label>
                    <div class="input-group">
                      <div class="input-group-prepend bg-transparent">
                        <span class="input-group-text bg-transparent border-right-0">
                          <i class="mdi mdi-lock-outline text-primary"></i>
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

                  <div class="form-group">
                  <label htmlFor="password2">Confirmer votre Mot de passe</label>
                    <div class="input-group">
                      <div class="input-group-prepend bg-transparent">
                        <span class="input-group-text bg-transparent border-right-0">
                          <i class="mdi mdi-lock-outline text-primary"></i>
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
                  
                  <div class="mb-4">
                    <div class="form-check">
                      <label class="form-check-label text-muted">
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
                  <div class="text-center mt-4 font-weight-light">
                    Vous etes deja membre? <a href="login" class="text-primary">Connectez-vous</a>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-lg-6 register-half-bg d-flex flex-row">
              <p class="text-white font-weight-medium text-center flex-grow align-self-end">Copyright &copy; 2019  Tout droit reserver.</p>
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
