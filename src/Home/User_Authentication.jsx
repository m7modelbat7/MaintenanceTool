import React from "react";

export default function UserAuthentication(props) {
  return (
    <div className="container mt-5">
      <h2>You are not logged in yet</h2>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email:</label>
        <input
          type="email"
          id="email"
          className="form-control"
          value={props.x.email}
          onChange={(e) =>
            props.y({ ...props.x, email: e.target.value })
          }
        />
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password:</label>
        <input
          type="password"
          id="password"
          className="form-control"
          value={props.x.password}
          onChange={(e) =>
            props.y({ ...props.x, password: e.target.value })
          }
        />
      </div>

      <button className="btn btn-primary">Login</button>
    </div>
  );
}