import React, { Component } from "react"; 
import axios from "axios";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions"; 
import  SideBar from '../layout/SideBar'; 
import  BarEnteteWecome from '../layout/BarEnteteWelcome'; 

const Transaction = props => (
    <tr>
        <td className={props.transaction.montant ? 'completed' : ''}>{props.transaction.montant}</td>
        <td className={props.transaction.type ? 'completed' : ''}>{props.transaction.type}</td>
        <td className={props.transaction.description ? 'completed' : ''}>{props.transaction.description}</td>
        <td className={props.transaction.date ? 'completed' : ''}>{props.transaction.date}</td>
    </tr>
)

class Historique extends Component {
  constructor(props) {
    super(props);
          this.state = {transactions: []};
  }

  
 
     componentDidMount() {
          if (!this.props.auth.isAuthenticated) {
            this.props.history.push("/");
          }

          const Data = { 
            idUser : this.props.auth.user.id
           };

         axios.post('/api/users/transactions/',Data)
             .then(response => {
                 this.setState({transactions: response.data});
             })
             .catch(function (error) {
                 console.log(error);
             })
     }

     componentDidUpdate() {
      if (!this.props.auth.isAuthenticated) {
        this.props.history.push("/");
      }
      const Data = { 
        idUser : this.props.auth.user.id
       };
         axios.post('/api/users/transactions/',Data)
         .then(response => {
             this.setState({transactions: response.data});
         })
         .catch(function (error) {
             console.log(error);
         })
     }

     historiqueList() {
         return this.state.transactions.map(function(currenthistorique, i) {
             return <Transaction transaction={currenthistorique} key={i} />;
         });
     }


  render() {
    const { errors } = this.state;

    return (
    
      <div class="container-fluid page-body-wrapper"> 
      <SideBar/>
      <div class="main-panel">
        <div class="content-wrapper">

          <BarEnteteWecome/> 
              
              <div class="row">
              <div class="col-md-12 stretch-card">
                <div class="card">
                  <div class="card-body">
                    <p class="card-title">Liste de toutes les transactions  </p>
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
                            { this.historiqueList() }
                        </tbody>
                      </table>
                    </div> 
                  </div>
                </div>
              </div>
              </div>

        </div> 
        <footer class="footer">
          <div class="d-sm-flex justify-content-center justify-content-sm-between">
            <span class="text-muted text-center text-sm-left d-block d-sm-inline-block">Copyright © 2019 <a href="https://www.urbanui.com/" target="_blank">Urbanui</a>. All rights reserved.</span>
            <span class="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">Hand-crafted & made with <i class="mdi mdi-heart text-danger"></i></span>
          </div>
        </footer> 
      </div> 
      </div>  
    );
  }
}


const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(Historique);
