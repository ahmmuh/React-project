import React from "react";

function Users(props) {
  let userList = "";
  if (props.users) {
    userList = props.users.map((user) => {
      console.log(user.name);
    });
  }
  // Kan skriva ut name osv men kan inte visa listan på vyn
  return (
    <div className="container">
      {/* <ul className="list-group">{userList}</ul> */}
    </div>
  );
}

export default Users;
