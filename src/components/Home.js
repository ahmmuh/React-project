import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import Login from "./Login";
import Register from "./Register";
import Button from "./Button";

function Home() {
  const [toggle, setToggle] = useState();
  const history = useHistory();
  const toggleLogin = (e) => {
    e.preventDefault();
    setToggle(!toggle);
  };

  return (
    <div className="home p-2">
      <div className="auth-toggle">
        <Button
          title={toggle ? "Has account? Login" : "No account? Create one"}
          handlerClick={toggleLogin}
        />
      </div>
      {toggle ? <Register /> : <Login />}
    </div>
  );
}

export default Home;
