import React, { Component } from "react";
import { Link } from "react-router-dom"; 
import axios from "axios";

class Test extends Component {

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    axios.get('http://localhost:5000/api/users/transactions/')
    .then(results => results)
    .then(results => console.log(results))
    .catch(function (error) {
        console.log(error);
    })
  }
 
  render() {
    return null;
  }
}

export default Test;
