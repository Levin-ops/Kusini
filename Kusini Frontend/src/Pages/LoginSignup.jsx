import React, { useState } from "react";
import "./CSS/LoginSignup.css";

function LoginSignup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    image_url: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/admins", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.Message);
      } else {
        alert(data.Message || "Error occurred during signup.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to sign up");
    }
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup_container">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="loginsignup_fields">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Continue</button>
        </form>
        <p className="loginsignup_login">
          <span>
            <a href="#">Login</a>
          </span>
        </p>
        <div className="loginsignup_agree"></div>
      </div>
    </div>
  );
}

export default LoginSignup;
