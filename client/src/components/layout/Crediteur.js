import React, { Component } from "react"; 
import  SideBar from '../layout/SideBar';  
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { saveTrans } from "../../actions/authActions";
import classnames from "classnames";
import axios from "axios";

class Crediteur extends Component {

  constructor() {
    super();
      this.state = {
      montant: "",
      description: "", 
      val:"",
      errors: {}
    };
  }
 
  componentDidMount(){
    axios.get('/api/users/'+this.props.auth.user.id)
    .then(response => {
        this.setState({val: response.data.budget}); 
    }) 
    .catch(function (error) {
        console.log(error);
    })
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
    this.setState({ [e.target.id]: e.target.value});

  };

  onSubmit = e => {
    e.preventDefault();
    
    const transactData = {
      montant: this.state.montant,
      description: this.state.description,      
      idUser: this.props.auth.user.id,
      type: "revenu",
    };

      
console.log();  
    this.props.auth.user.budget = parseFloat(this.state.val) + parseFloat(this.state.montant)
    this.props.saveTrans(transactData, this.props.history,this.props.auth.user.budget);
  };
  render() { 
    const { errors } = this.state;
     
    return (
      <div class="container-fluid page-body-wrapper"> 
      <SideBar/>
      <div class="main-panel">
        <div class="content-wrapper"> 
              <div class="row">
              <div class="col-md-12 stretch-card">
                <div class="card">
                  <div class="card-body">
                    <p class="card-title">Crediteur </p>
                     
                    <form class="pt-3" noValidate onSubmit={this.onSubmit}>
                  <div class="form-group">
                    <label htmlfor="montant">Montant </label>
                    <div class="input-group">
                      <div class="input-group-prepend bg-transparent">
                        <span class="input-group-text bg-transparent border-right-0">
                          <i class="mdi mdi-account-outline text-primary"></i>
                        </span>
                      </div>
                      <input 
                       type="number"
                        id="montant" 
                        onChange={this.onChange}
                        value={this.state.montant}
                        error={errors.montant}                      
                        placeholder="Montant"                       
                        className={classnames("form-control form-control-lg border-left-0", {
                        invalid: errors.montant || errors.montantnotfound
                      })}/>
                    </div>
                      <span className="text-danger">
                        {errors.montant}
                        {errors.montantnotfound}
                      </span>
                  </div>
                  <div class="form-group">
                    <label htmlfor="description">description</label>
                    <div class="input-group">
                      <div class="input-group-prepend bg-transparent">
                        <span class="input-group-text bg-transparent border-right-0">
                          <i class="mdi mdi-lock-outline text-primary"></i>
                        </span>
                      </div>
                      <textarea   
                      onChange={this.onChange}
                      value={this.state.description}
                      error={errors.description}
                      id="description"
                      placeholder="description"
                      className={classnames("form-control form-control-lg border-left-0", {
                        invalid: errors.description || errors.descriptionincorrect
                      })}
                      />                        
                    </div>
                    <span className="text-danger">
                      {errors.description}
                      {errors.descriptionincorrect}
                    </span>
                  </div> 
                  <div class="template-demo" style={{ left: "0px"}} >
                    <button style={{ width: "200px"}}  type="button" class="btn btn-danger btn-icon-text">
                                <i class="mdi mdi-currency-usd btn-icon-prepend"></i>                                                       
                                Annuler
                    </button>
                    <button style={{ width: "200px"}} type="submit" class="btn btn-success btn-icon-text">
                                <i class="mdi mdi-currency-usd btn-icon-prepend"></i>                                                        
                                Valider
                    </button> 
                  </div>  
                </form> 



                  </div>
                </div>
              </div>
              </div>

        </div> 
        <footer class="footer">
          <div class="d-sm-flex justify-content-center justify-content-sm-between">
            <span class="text-muted text-center text-sm-left d-block d-sm-inline-block">Copyright © 2019 <a href="/" >Djamil</a>. All rights reserved.</span>
            <span class="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">Hand-crafted & made with <i class="mdi mdi-heart text-danger"></i></span>
          </div>
        </footer> 
      </div> 
      </div>  
    );
  }
}
Crediteur.propTypes = {
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
)((Crediteur));
