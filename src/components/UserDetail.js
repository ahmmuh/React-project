import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Menu from "./Menu";

import axios from "axios";
function UserDetail() {
  let { id } = useParams();
  const [user, setUser] = useState();
  const url = "https://randomuser.me/api/?results=20";
  const getUser = () => {
    axios.get(`${url}/${id}`).then((data) => setUser({ user: data }));
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <div>
      <Menu />
      <div className="container w-25 m-auto">
        <div className="card">
          {user ? (
            <img
              className="card-img-top"
              src={user.user.data.results[0].picture.thumbnail}
              style={{ width: "100%" }}
              alt="profile-pricture"
            />
          ) : null}
          <div className="card-body">
            {user ? (
              <h5 className="card-title">
                Namn: {user.user.data.results[0].name.first}
              </h5>
            ) : null}
            {user ? (
              <p className="card-text">
                Age {user.user.data.results[0].registered.age}
              </p>
            ) : null}
          </div>
          <Link to="/dashboard">Go back</Link>
        </div>
      </div>
    </div>
  );
}

export default UserDetail;
