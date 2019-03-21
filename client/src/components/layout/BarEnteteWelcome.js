
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Transaction extends Component {
  render() {
    return (
        <div class="row">
        <div class="col-md-12 grid-margin">
          <div class="d-flex justify-content-between flex-wrap">
            <div class="d-flex align-items-end flex-wrap">
              <div class="mr-md-3 mr-xl-5" >  
                <h2 font-family="algerian"> Sama Poche, </h2>
                <p class="mb-md-0">Avec sama poche, fini les depenses inutile.</p>
              </div>
              <div class="d-flex">
                <i class="mdi mdi-home text-muted hover-cursor"></i>
                <p class="text-muted mb-0 hover-cursor">&nbsp;/&nbsp;Tableau de bord&nbsp;/&nbsp;</p>
                <p class="text-primary mb-0 hover-cursor">Analytics</p>
              </div>
            </div>
            <div class="d-flex justify-content-between align-items-end flex-wrap ">
              <div class="template-demo">
              <button type="button" class="btn btn-success btn-icon-text">
                          <i class="mdi mdi-currency-usd btn-icon-prepend"></i>                                                       
                          Debiter mon compte
              </button>
              <button type="button" class="btn btn-success btn-icon-text">
                          <i class="mdi mdi-currency-usd btn-icon-prepend"></i>                                                        
                          Crediter mon compte
              </button> 
              </div>
            </div>
          </div>
        </div>
        </div>
        
        
        
    );
  }
}

export default Transaction;
