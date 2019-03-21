import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";

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

         axios.get('http://localhost:5000/api/users/transactions')
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
      
         axios.get('http://localhost:5000/api/users/transactions/')
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
      <div className="container">
        <div className="row">
          <div className="col s8 offset-s2">
            <Link to="/dashboard" className="btn-flat waves-effect">
              <i className="material-icons left">keyboard_backspace</i>
            </Link>
            <div>
               <h3>Historique de transactions</h3>
               <table className="table table-striped" style={{ marginTop: 20 }}>
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
)(withRouter(Historique));
