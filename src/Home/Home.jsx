import React, { useState } from "react";
import UserAuthentication from "./User_Authentication";



export default function Home() {
  const [count, setCount] = useState(0);
  const [username, setUsername] = useState("Mahmoud Elbath");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [theme, setTheme] = useState("light");
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [passwordVisible, setPasswordVisible] = useState(false);


  const passwordInputType = passwordVisible ? "text" : "password";



  return (
    <React.Fragment>
      

      <header className="fixed-top bg-light border-top py-3">
        <div className="d-flex justify-content-center gap-3">
          <button className="btn btn-primary d-flex flex-column align-items-center">
            <i className="fas fa-home mb-1"></i>
            <span>Home</span>
          </button>

          <button className="btn btn-secondary d-flex flex-column align-items-center">
            <i className="fas fa-user mb-1"></i>
            <span>Profile</span>
          </button>

          <button className="btn btn-success d-flex flex-column align-items-center">
            <i className="fas fa-cog mb-1"></i>
            <span>Settings</span>
          </button>
        </div>
      </header>
      <br />
      <br />
      <div className="container text-center mt-5">
        <h1>Welcome to Our Production Application</h1>
      </div>

      <UserAuthentication x={formData} y={setFormData} />
    </React.Fragment>
  );
}