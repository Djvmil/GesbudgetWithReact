import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import {
  GET_ERRORS,
  SET_CURRENT_USER,
  USER_LOADING
} from "./types";

// Register User
export const registerUser = (userData, history) => dispatch => {
  axios
    .post("/api/users/register", userData)
    .then(res => history.push("/login")) // re-direct to login on successful register
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const listTrans = () => dispatch => {
  axios.get('/api/users/transactions')
  .then(results => results.json())
  .then(results => console.log(results))
  .catch(function (error) {
      console.log(error);
  })} ;
// Login - get user token
export const loginUser = userData => dispatch => {
  axios
    .post("/api/users/login", userData)
    .then(res => {
      // Save to localStorage
// Set token to localStorage
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};
// User loading
export const setUserLoading = () => {
  return {
    type: USER_LOADING
  };
};
// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from local storage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};

export const saveTrans = (Data, history,budget) => dispatch => {

  const bud = {
    id:Data.idUser,
    budget : budget
  }
 

  if(Data.type === "revenu"){ 
    axios
    .post("/api/users/updateB", bud)
    .then(res => res)  
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );

  }else{ 
    axios
    .post("/api/users/updateB", bud)
    .then(res => res) 
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );

  }

  axios
    .post("/api/users/addTransaction", Data)
    .then(res => history.push("/")) // re-direct to login on successful register
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
/*
export const countNbCrediti = () => dispatch => {
  const Data = {
   type : "revenu",
   idUser : "5c98e2cb8050371110e45f8d"
  };
  let id= "";
  axios
    .post("/api/users/count", Data)
    .then(res => res) // re-direct to login on successful register
    .then(res => {
      return res;
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
    
};

export const countNbDebit = (id) => dispatch => {
  const Data = {
    type : "depense",
    idUser : id
   };
  axios
    .post("/api/users/countTrans", Data)
    .then(res => {
      return res;
    }) 
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const lastTrans = (id) => dispatch => {
  const Data = { 
    idUser : id
   };
  axios
    .post("/api/users/lastTransaction", Data)
    .then(res => {
      return res;
    }) 
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

module.exports = passport => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      User.findById(jwt_payload.id)
        .then(user => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );
};
*/