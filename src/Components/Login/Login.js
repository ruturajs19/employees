import React, { useState } from "react";
import "./Login.css";
import { connect } from "react-redux";
import { reduxActions } from "../../State/employees.action";
const Login = (props) => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState("");

  const loginHandler = () => {
    if (
      username === process.env.REACT_APP_USERNAME &&
      password === process.env.REACT_APP_PASSWORD
    ) {
      props.setLogin();
    } else {
      setError("Invalid Credentials. Please Try Again");
    }
  };

  return (
    <div className="login-container">
      <div className="username-container">
        <label>Username:</label>
        <br />
        <input
          className="username-input"
          type="email"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          onBlur={(e) => {
            if (username) {
              setError("");
            }
          }}
        />
      </div>
      <div className="password-container">
        <label>Password:</label>
        <br />
        <input
          className="password-input"
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          onBlur={(e) => {
            if (password) {
              setError("");
            }
          }}
        />
      </div>
      {error && <span className="error-alert">{error}</span>}
      <button
        onClick={loginHandler}
        disabled={error || !username || !password}
        className="login-button"
      >
        Login
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLogin: () => dispatch({ type: reduxActions.setLogin }),
  };
};

export default connect(null, mapDispatchToProps)(Login);
