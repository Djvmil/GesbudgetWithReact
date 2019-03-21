
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Transaction extends Component {
  render() {
    return (
    
        <div class="row">
<div class="col-md-12 stretch-card">
  <div class="card">
    <div class="card-body">
      <p class="card-title">Liste transactions les plus recentes </p>
      <div class="table-responsive">
        <table id="recent-purchases-listing" class="table">
          <thead>
            <tr>
                <th>Montant</th>
                <th>Type</th>
                <th>Description</th>
                <th>Date</th> 
            </tr>
          </thead>
          <tbody> 

          </tbody>
        </table>
      </div>
      <button
          style={{ 
          width:"170px",
          borderRadius: "3px",
          letterSpacing: "1.5px",
          marginTop: "1rem"
          }}
                     
          className="btn btn-large waves-effect waves-light hoverable teal darken-3btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
        >
           Voir plus
      </button>
    </div>
  </div>
</div>
</div>



    
    );
  }
}

export default Transaction;
