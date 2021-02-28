import React, { useState } from "react";
import Menu from "./Menu";
function Profile() {
  const [currentUser, setcurrentUser] = useState();

  let users = JSON.parse(localStorage.getItem("key"));
  return (
    <div>
      <Menu />
      <div className="card w-75  m-auto pt-3">
        <h3 className="bg bg-danger p-2 text-white">Din profil</h3>
        {users.map((user, id) => (
          <div className="list-group p-4" key={id}>
            <h4 className="list-group-item">Namn:{user.name}</h4>
            <p className="list-group-item">E-post:{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Profile;
