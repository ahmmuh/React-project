import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // var entry = localStorage.getItem("entry");
  // console.log("username: " + entry.user + "password: " + entry.pas);
  // if (username.value == entry.user && password.value == entry.pass) {
  //   alert("You have successfully logged in.");
  // }

  const [error, setError] = useState("");
  const login = (event) => {
    event.preventDefault();
    // let users = JSON.parse(localStorage.getItem("key"));
    let authUser = localStorage.getItem("key");

    // history.push("/dashboard");
  };

  const handleChange = (event) => {
    event.preventDefault();
    const value = event.target.value;
    setUser({
      ...user,
      [event.target.name]: value,
    });
    console.log(value);
  };
  return (
    <div className="container py-4">
      <form className="form-group ">
        <div className="form-group">
          <label htmlFor="email"></label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={user.email}
            id="email"
            aria-describedby="emailHelpId"
            placeholder="Email"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password"></label>
          <input
            type="password"
            className="form-control"
            name="password"
            id="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-danger" onClick={login}>
          Login
        </button>
      </form>
      <p>{error}</p>
    </div>
  );
}

export default Login;
