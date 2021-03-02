import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Modal from "./Modal";
function Login() {
  const history = useHistory();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const login = (event) => {
    event.preventDefault();
    let users = JSON.parse(localStorage.getItem("key"));
    for (var i = 0; i < users.length; i++) {
      if (
        user.email === users[i].email &&
        user.password === users[i].password
      ) {
        history.push("/dashboard");
      } else {
        alert("Skriv rätt och säg till att du inte lämnar tomma fält!");
      }
    }
  };

  const handleChange = (event) => {
    event.preventDefault();
    const value = event.target.value;
    setUser({
      ...user,
      [event.target.name]: value,
    });
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
        <button
          type="submit"
          className="btn btn-success float-right"
          onClick={login}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
