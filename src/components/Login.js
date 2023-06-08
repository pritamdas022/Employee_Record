import React, { useState } from "react";
import "./Style.css";
const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errormsg, setErrormsg] = useState({
    email: false,
    password: false,
  });
  let formError = {
    email: false,
    password: false,
  };
  let isValid = false;
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    
    if (email.trim()&&password.trim()) {
      onLogin(email, password);
    }

    if (email === "") {
      formError.email = true;
      isValid = false;
    } else {
      isValid = true;
    }
    if (password === "") {
      formError.password = true;
      isValid = false;
    } else {
      isValid = true;
    }
    setErrormsg({ ...formError });
    if (isValid) {
      console.log(email);
      console.log(password);
      console.log("Error msg", errormsg);
    }
  };

  return (
    <div className="Form">
      <form className="form-field">
        <div>
          <h1>Sign In</h1>
        </div>
        <div className="input-field">
          <label>Email address</label>
          <input
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        {errormsg.email && (
          <span style={{ marginRight: "60px", color: "red" }}>
            Field is required
          </span>
        )}
        <div className="input-field">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        {errormsg.password && (
          <span style={{ marginRight: "60px", color: "red" }}>
            Field is required
          </span>
        )}
        <div>
          <button className="submit" onClick={handleSubmit}>
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
