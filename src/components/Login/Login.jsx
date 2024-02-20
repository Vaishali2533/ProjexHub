import React, { useState } from "react";
import Header from "../header/Header";
import "../Login/Login.css";
import Output from "./Output";

function Login() {
  const [submitted, setSubmitted] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    function validateForm() {
      console.log(isValidPass());
      console.log(isValidEmail());
      if (
        isValidPass() &&
        isValidEmail() 
      )
        return true;
      return false;
    }

    function isValidEmail() {
      if (email.trim() === "") {
        alert("Provide email address");
        return false;
      }
      const reg = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
      if (!reg.test(email)) {
        alert("Email Adress not valid");
        return false;
      }
      return true;
    }

    function isValidPass() {
      if (password.trim() === "") {
        setError("password", "Password cannot be empty");
        return false;
      } 
      else {
        setSuccess("password");
        return true;
      }
    }

    function setError(elementId, errorMessage) {
      const element = document.getElementById(elementId);
      element.parentElement.classList.remove("success");
      element.parentElement.classList.add("error");
      alert(errorMessage);
    }

    function setSuccess(elementId) {
      const element = document.getElementById(elementId);
      element.parentElement.classList.remove("error");
      element.parentElement.classList.add("success");
    }
    setSubmitted(validateForm());
  };

  return (
    <>
      {!submitted ? (
        <div id="whole">
          <Header />
          <div className="cont">
            <form id="create-form" onSubmit={handleSubmit}>
              <div className="title">
                {/* <h2>LOGIN FORM</h2> */}
              </div>

              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  name="Email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>

              <div className="input-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  name="Password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>

              <button type="submit" className="btn" >
                Login
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div>
          <Output
            password={password}
            email={email}
          />
        </div>
      )}
    </>
  );
}

export default Login;
