import React, { useState } from "react";
import Header from "../header/Header";
import '../Signup/Signup.css';
import Home from "../Home/Home";

function Login() {
  const [submitted, setSubmitted] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    function validateForm() {
      console.log(isValidUser());
      console.log(isValidEmail());
      console.log(isValidPhone());
      console.log(isValidPass());
      console.log(isValidConfirmPass());
      if (
        isValidUser() &&
        isValidEmail() &&
        isValidPhone() &&
        isValidPass() &&
        isValidConfirmPass()
      )
        return true;
      return false;
    }

    function isValidUser() {
      if (username.trim() === "") {
        setError("username", "Name cannot be empty");
        return false;
      } else if (username.trim().length <= 5 || username.trim().length > 15) {
        setError("username", "Name must be between 5 and 15 characters");
        return false;
      } else {
        setSuccess("username");
        return true;
      }
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

    function isValidPhone() {
        if (phone.trim() === "") {
          setError("phone", "Mobile number cannot be empty");
          return false;
        } else if (phone.trim().length < 10 || phone.trim().length > 10){
          setError("phone", "Mobile number contains 10 digits");
          return false;
        } else {
          setSuccess("phone");
          return true;
        }
      }

    function isValidPass() {
      if (password.trim() === "") {
        setError("password", "Password cannot be empty");
        return false;
      } else if (password.trim().length < 8 || password.trim().length >= 20) {
        setError("password", "Password must be between 8 and 20 characters");
        return false;
      } else {
        setSuccess("password");
        return true;
      }
    }

    function isValidConfirmPass() {
      if (confirmPassword.trim() === "") {
        setError("confirm-password", "Confirm password cannot be empty");
        return false;
      } else if (confirmPassword !== password) {
        setError("confirm-password", "Passwords do not match");
        return false;
      } else {
        setSuccess("confirm-password");
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
    if (validateForm()) {
        setSubmitted(true);
        alert("Signup Successful");
      }
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
                <label htmlFor="username">username</label>
                <input
                  type="text"
                  id="username"
                  placeholder="Name"
                  name="Username"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                />
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
                <label htmlFor="phone">Mobile No.</label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Mobile No."
                  name="phone"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
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

              <div className="input-group">
                <label htmlFor="confirm-password">Confirm Password</label>
                <input
                  type="password"
                  id="confirm-password"
                  placeholder="Confirm-Password"
                  name="Confirm-password"
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                />
              </div>
              <button type="submit" className="btn" >
                Submit
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div>
          {/* alert("Signup Successful"); */}
            <Home />          
        </div>
      )}
    </>
  );
}

export default Login;
