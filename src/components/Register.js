import React, { useState } from "react";
import { useHistory } from "react-router-dom";
function Register() {
  const [registerState, setRegister] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [users, setUsers] = useState([]);
  const register = (event) => {
    event.preventDefault();
    setRegister({ ...registerState });
    users.push(registerState);
    localStorage.setItem("key", JSON.stringify(users));
    console.log(registerState);
  };

  const handleChange = (event) => {
    const value = event.target.value;
    event.preventDefault();
    setRegister({
      ...registerState,
      [event.target.name]: value,
    });
  };
  return (
    <div className="container  py-4">
      <form>
        <div className="form-group">
          <label htmlFor="name"></label>
          <input
            type="text"
            className="form-control"
            name="name"
            id="name"
            aria-describedby="helpId"
            placeholder="Your name"
            value={registerState.name || ""}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email"></label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            aria-describedby="emailHelpId"
            placeholder="email"
            value={registerState.email || ""}
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
            placeholder="password"
            value={registerState.password || ""}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="btn btn-secondary rounded"
          onClick={register}
        >
          Register
        </button>
      </form>
      <p>{registerState.name}</p>
    </div>
  );
}

export default Register;
