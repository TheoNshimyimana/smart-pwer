import email_icon from "../assets/email.png";
import { useState } from "react";
import axios from "axios";
// import Navbar from "./Navbar";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      email: email,
    };
    axios
      .post("https://guruservices.codeguru-pro.com:8096/authenticate", formData)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        alert("Login Successful!");
        console.log(localStorage.getItem("token"));
      });
  };

  return (
    <>
      {/* <Navbar /> */}
      <div className="flex h-screen items-center justify-center bg-gradient-to-b from-sky-600 to-sky-200 pt-16">
        <div className="login">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="ml-24 mt-3 flex w-full flex-col  gap-2">
              <div className="text">Forgot Password</div>
            </div>
            <div className="inputs">
              <div className="input">
                <img src={email_icon} alt="" />
                <input
                  type="email"
                  placeholder="Email or phone number"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="submit-container">
              <button className="submit">Send</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
