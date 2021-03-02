import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";
function UserDetail() {
  let id = useParams();
  const [user, setUser] = useState(true);
  const url = "https://randomuser.me/api/?results=20";
  const getUser = () => {
    axios.get(`${url}/${id}`).then((data) => setUser({ user: data }));
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <div>
      <h2>User id is:{id}</h2>
    </div>
  );
}

export default UserDetail;
