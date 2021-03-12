import React from "react";
import { Link } from "react-router-dom";

function Users(props) {
  const users = props.users;
  let userList = [];
  if (users) {
    console.log(users);
    userList = users.map((user, id) => {
      return (
        <li key={id} className="list-group-item">
          <Link to={`/${id}`}> {user.name.first}</Link>
        </li>
      );
    });
  }
  // Kan skriva ut name osv men kan inte visa listan på vyn
  return (
    <div className="container">
      <ul className="list-group">{userList}</ul>
    </div>
  );
}

export default Users;
