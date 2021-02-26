import React from "react";
import Login from "./Login";
import Menu from "./Menu";
function Logout() {
  return (
    <div>
      <Menu />
      <div className="text-center py-4">
        <p className="lead text-center text-success">
          {" "}
          Logged out | Please log in again
        </p>
      </div>
      <Login />
    </div>
  );
}

export default Logout;
