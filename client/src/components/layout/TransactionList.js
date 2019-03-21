
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Transaction extends Component {
  render() {
    return (
    
        <div class="row">
<div class="col-md-12 stretch-card">
  <div class="card">
    <div class="card-body">
      <p class="card-title">Liste des 8 dernieres transactions  </p>
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
            <tr>
                <td>$790</td>
                <td>Depense</td> 
                <td>Catalinaborough</td>
                <td>06 Jan 2018</td> 
            </tr>
            <tr>
                <td>$7690</td>
                <td>Depense</td> 
                <td>Ui design completed</td> 
                <td>18 Jul 2018</td> 
            </tr>
            <tr>
                 <td>$7690</td>
                <td>Revenu</td> 
                <td>Emily Cunningham</td> 
                <td>16 Jul 2018</td> 
            </tr>
            <tr>
                <td>$44617</td>
                <td>Depense</td> 
                <td>Agustinaborough</td> 
                <td>30 Apr 2018</td>
            </tr>
            <tr>
                <td>$78952</td>
                <td>Revenu</td>
                <td>Ui design not completed</td> 
                <td>25 Jun 2018</td>
            </tr>
            <tr>
                <td>$36422</td>
                <td>Revenu</td>
                <td>Ui design completed</td> 
                <td>05 Nov 2018</td>
            </tr>
            <tr>
                <td>$34167</td>
                <td>Revenu</td> 
                <td>Cletaborough</td> 
                <td>12 Jul 2018</td>
            </tr>
            <tr>
                <td>$50862</td>
                <td>Depense</td> 
                <td>West Fidelmouth</td> 
                <td>08 Sep 2018</td>
            </tr>
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
