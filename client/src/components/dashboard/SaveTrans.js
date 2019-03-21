import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { saveTrans } from "../../actions/authActions";
import classnames from "classnames";

class SaveTrans extends Component {
  constructor() {
    super();
    this.state = {
      revenu: "revenu",
      depense: "depense",
      type: "",
      montant:"",
      description: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to SaveTrans page, should redirect them to dashboard
    if (!this.props.auth.isAuthenticated) {
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

  componentDidUpdate() {
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  onChange = e => {
    this.setState({[e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
      const newUser = {
      type: this.state.type,
      montant: this.state.montant,
      description: this.state.description
    };

    this.props.saveTrans(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="container">
        <div className="row">
          <div className="col s8 offset-s2">
            <Link to="/" className="btn-flat waves-effect">
              <i className="material-icons left">keyboard_backspace</i>
            </Link>
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Enregistrement d'une transaction</b>
              </h4>

            </div>
            <form noValidate onSubmit={this.onSubmit}>
            <div className="input-field col s12">
              <input
                onChange={this.onChange}
                value={this.state.montant}
                error={errors.montant}
                id="montant"
                type="number"
                className={classnames("", {
                  invalid: errors.montant
                })}
              />
              <label htmlFor="name">Montant</label>
              <span className="red-text">{errors.montant}</span>
            </div>
              <div className="input-field col s12">
              Type de la transaction
                <p>
                  <label>
                      <input
                        name="type" 
                        id="type" 
                        onChange={this.onChange}
                        value={this.state.depense}
                        type="radio" 
                        className={classnames("", {
                        invalid: errors.type
                        })}                        
                        />
                      <span>Depense</span>
                  </label>
                </p>
                <p>
                  <label>
                      <input
                        name="type" 
                        id="type" 
                        onChange={this.onChange}
                        value={this.state.revenu}
                        type="radio" 
                        className={classnames("", {
                        invalid: errors.type
                        })}
                        />
                      <span>Revenu</span>
                  </label>
                </p> 
              </div>

              <div className="input-field col s12">
                  <input
                    onChange={this.onChange}
                    value={this.state.description}
                    error={errors.description}
                    id="description"
                    type="text"
                    className={classnames("", {
                      invalid: errors.description
                    })}
                  />
                  <label htmlFor="budget">Description</label>
                  <span className="red-text">{errors.description}</span>
              </div>


              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable teal darken-3"
                >
                  Enregistrer
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

SaveTrans.propTypes = {
  saveTrans: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { saveTrans }
)(withRouter(SaveTrans));
