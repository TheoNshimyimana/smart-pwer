import user_icon from "../assets/person.png";
import email_icon from "../assets/email.png";
import password_icon from "../assets/password.png";
import { useState } from "react";
import axios from "axios";
// import Navbar from "./Navbar";
// import { Link,  } from "react-router-dom";
import { Link, Navigate } from "react-router-dom";

function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  console.log(localStorage.getItem("token"));
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username + " " + password);
    const formData = {
      username: username,
      email: email,
      password: password,
    };
    axios
      .post("https://guruservices.codeguru-pro.com:8096/authenticate", formData)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        alert("Login Successful!");
        console.log(localStorage.getItem("token"));
      });
    setIsLoggedIn(true)
  };

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <>
      {/* <Navbar /> */}
      <div className="flex h-screen items-center justify-center bg-gradient-to-b from-sky-600 to-sky-200 pt-16">
        <div className="login">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="header">
              <div className="text">Sign Up</div>
              <div className="underline"></div>
            </div>
            <div className="inputs">
              <div className="input">
                <img src={user_icon} alt="" />
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="input">
                <img src={email_icon} alt="" />
                <input
                  type="email"
                  placeholder="Email or phone number"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input">
                <img src={password_icon} alt="" />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="submit-container">
              <button className="submit">Sign Up</button>
            </div>
            <div className="forgot-password">
              Have an Account?
              <span>
                <Link to="/login">Login</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
