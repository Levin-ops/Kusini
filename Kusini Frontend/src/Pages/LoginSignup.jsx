import React from "react";
import "./CSS/LoginSignUp.css";

function LoginSignup() {
  return (
    <div className="login_signup">
      <div className="login_signup_container">
        <h1>Sign Up</h1>
        <div className="login_signup_fields">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="E-mail" />
          <input type="password" placeholder="Password" />
        </div>
        <button>Continue</button>
        <p className="login_signup_login">
          Already have an account? <span>Login Here</span>
        </p>
        <div className="login_signup_agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms and conditions</p>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
