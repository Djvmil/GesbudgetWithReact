import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>Bienvenu </b>dans votre GESTIONNAIRE DE BUDGET{" "}
              <p><span style={{ fontFamily: "chiller" }}>votre argent est en securite avec nous</span></p>
            </h4>
            <p className="flow-text grey-text text-darken-1">

            </p>
            <br />
            <div className="col s6">
              <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable teal darken-3"
              >
                Inscription
              </Link>
            </div>
            <div className="col s6">
              <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large btn-flat waves-effect white teal-text text-darken-3"
              >
                Connexion              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
