import React, { useState, useEffect } from "react";
import "./Login.css";
import { fetchLogin } from "../apiCaller";
import { connect } from "react-redux";

function Login(props) {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e, id) => {
    const { value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
  useEffect(() => {
    if(props.login.token){
  alert("Login Sucessfully")
  console.log("dddddddddddd",props.login.token)
    }else{
        alert("Login data wrong")
    }
}, [props.login]);
  const handleLoginData = () => {
    const { email, password } = state;
    let body = {
      email,
      password,
    };
    props.dispatch(fetchLogin(body, "post"));
  };
  const { email, password } = state;
  return (
    <div class="main">
      <div class="form">Login Form</div>
      <div class="inputField">
        <p>Email</p>
        <input
          type="email"
          value={email}
          placeholder="please type email"
          onChange={(text) => handleChange(text, "email")}
        />
        <p>password</p>
        <input
          type="password"
          value={password}
          placeholder="please type password"
          onChange={(text) => handleChange(text, "password")}
        />
      </div>
      <button onClick={() => handleLoginData()} class="Login">
        Login
      </button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  login: state.loginReducer.login,
});
export default connect(mapStateToProps)(Login);
