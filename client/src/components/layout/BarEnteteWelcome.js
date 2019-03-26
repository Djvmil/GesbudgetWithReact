
import React, { Component } from "react"; 

class Transaction extends Component {
  constructor() {
    super();
    this.count();
      this.state = {
        nbCredit:"",
        nbDebit:"" 
    };
  }


  count (){
 /*
    axios.get('http://localhost:5000/api/users/transactions/')
    .then(response => {
        this.setState({transactions: response.data});
    })
    .catch(function (error) {
        console.log(error);
    })
    
    axios
    .post("/api/users/count/", userData)
    .then(res => res) 
    .then(this.state.nbCredit => res) 
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );*/
  } 


  render() {
    return (
        <div className="row">
        <div className="col-md-12 grid-margin">
          <div className="d-flex justify-content-between flex-wrap">
            <div className="d-flex align-items-end flex-wrap">
              
              <div className="d-flex">
                <i className="mdi mdi-home text-muted hover-cursor"></i>
                <p className="text-muted mb-0 hover-cursor">&nbsp;/&nbsp;Tableau de bord&nbsp;/&nbsp;</p> 
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-end flex-wrap ">
              <div className="template-demo">
              <button type="button" className="btn btn-success btn-icon-text">
                  <a href="/debiteur" className="text-white">  
                      <i className="mdi mdi-currency-usd btn-icon-prepend"></i>                                                       
                          Debiter mon compte
                  </a>            
              </button>
              <button   type="button" className="btn btn-success btn-icon-text">
                 <a href="/crediteur" className="text-white">         <i className="mdi mdi-currency-usd btn-icon-prepend"></i>                                                        
                          Crediter mon compte
                 </a>
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
