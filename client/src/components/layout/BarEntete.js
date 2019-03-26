import React, { Component } from "react"; 
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import axios from "axios";
import { logoutUser } from '../../actions/authActions'; 
import { Card, CardBody, CardHeader, Col, Row} from 'reactstrap';
  
class BarEntete extends Component {
  constructor(props){
    super(props);
    this.state = {
      nbCredit:"",
      nbDebit:"",
      montant:"",
      type:"",
      descripton:"",
      date:"",
      val:"",
       
  };

  this.countNbCredit(); 
  this.countNbDebit();
  this.lastTrans(); 
  };

  componentDidMount() {
   


  }  
 countNbCredit(){
    const Data = {
     type : "revenu",
     idUser : this.props.auth.user.id
    };

    axios.post('/api/users/count/',Data)
    .then(response => {
        this.setState({nbCredit: response.data}); 
    })
    .catch(function (error) {
        console.log(error);
    }) 
  };
  
  countNbDebit(){
    const Data = {
      type : "depense",
      idUser : this.props.auth.user.id
     };
    
     axios.post('/api/users/count/', Data)
    .then(response => {
        this.setState({nbDebit: response.data});
    })
    .catch(function (error) {
        console.log(error);
    }) 
  };
   
  lastTrans(){

    const Data = { 
      idUser : this.props.auth.user.id
     };
    axios.post('/api/users/lastTransaction/', Data)
    .then(response => {
        this.setState({
          montant: response.data.montant,
          type: response.data.type,
          descripton: response.data.descripton,
          date: response.data.date
        },console.log(response.data.type));
    })
    .catch(function (error) {
        console.log(error);
    }) 
    

    axios.get('/api/users/'+this.props.auth.user.id)
    .then(response => {
        this.setState({val: response.data.budget},console.log(response.data.budget)); 
    }) 
    .catch(function (error) {
        console.log(error);
    })

  };
  
  

  render() {
   const navR = (
    <div className="row">
    <Row>
      <Col xs="12" sm="6" md="4">
        <Card className="text-white bg-info">
          <CardHeader>
            Budget
          </CardHeader>
          <CardBody>
             <b>{this.state.val} FRCFA</b>  
          </CardBody>
        </Card>
      </Col>
      
      <Col xs="12" sm="6" md="4">
        <Card className="text-white bg-info">
          <CardHeader>
            Total Transactions
          </CardHeader>
          <CardBody>
          {this.state.nbDebit + this.state.nbCredit}
          </CardBody>
        </Card>
      </Col> 

      <Col xs="12" sm="6" md="4">
        <Card className="text-white bg-success">
          <CardHeader>
            Derniere retrait
          </CardHeader>
          <CardBody>
           <p>Type: {this.state.type} </p> 
           <p>Montant: {this.state.montant} FRCFA</p> 
           <p>Date: {this.state.date}</p> 
           <p>Description: {this.state.description}</p> 
          </CardBody>
        </Card>
      </Col>

      <Col xs="12" sm="6" md="4">
        <Card className="text-white bg-info">
          <CardHeader>
            Nombre de depense
          </CardHeader>
          <CardBody>
              {this.state.nbDebit}
          </CardBody>
        </Card>
      </Col> 
      <Col xs="12" sm="6" md="4">
        <Card className="text-white bg-info">
          <CardHeader>
            Nombre de recharge
          </CardHeader>
          <CardBody>
          {this.state.nbCredit}
          </CardBody>
        </Card>
      </Col> 
    </Row>
    </div>
   )
    return (  
       <div>
          {this.props.auth.isAuthenticated ? navR : window.location.href = "./login"}
       </div>
    );
  }
}
BarEntete.propTypes = {
  auth: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
} 
export default connect(mapStateToProps, { logoutUser })(BarEntete);