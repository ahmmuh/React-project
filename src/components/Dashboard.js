// import React, { Component } from "react";
// import uuid from "react-uuid";

// import UserDetail from "./UserDetail";
// import Menu from "./Menu";
// import Header from "./Header";
// import Users from "./Users";
// export class Dashboard extends Component {
//   constructor() {
//     super();
//     this.state = {
//       users: ["Ahmed"],
//       name: "",
//     };
//   }

//   componentDidMount() {
//     this.getUsers();
//   }
//   evx235vw1xzvth5;

//   getUsers = () => {
//     fetch("https://randomuser.me/api/?results=20", {
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         this.setState({ users: data });
//       });
//   };

//   add new user to the list

//   handleChange = (event) => {
//     this.setState({ name: event.target.value });
//   };

//   addUser = (event) => {
//     event.preventDefault();
//     this.setState((state) => {
//       const newUsers = this.state.users.concat(state);

//       return {
//         newUsers,
//         name: "",
//       };
//     });
//     console.log(this.state.name);
//   };

//   render() {
//     return (
//       <div className="dashboard">
//         <Menu />
//         <div className="container mt-4">
//           <div className="row">
//             <div className="col-4  my-2">
//               <Users users={this.state.users.results} />
//             </div>
//             <div className="col  my-2">
//               <form>
//                 <div className="form-group">
//                   <input
//                     className="form-control"
//                     placeholder="add new user"
//                     value={this.state.name}
//                     onChange={this.handleChange}
//                   />
//                 </div>
//                 <button
//                   className="btn btn-danger float-right"
//                   onClick={this.addUser}
//                 >
//                   Add user
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Dashboard;

import React, { useState, useEffect } from "react";
import UserDetail from "./UserDetail";
import Menu from "./Menu";
import Header from "./Header";
import Users from "./Users";

function Dashboard() {
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    fetch("https://reqres.in/api/users", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setUsers({ users: data }));
  };

  useEffect(() => {
    getUsers();
  }, []);

  const handleChange = (e) => {
    console.log(e);
  };
  const addUser = (e) => {
    e.preventDefault();
    console.log("added");
  };

  return (
    <div className="dashboard">
      <Menu />
      <div className="container mt-4">
        <div className="row">
          <div className="col-4  my-2">
            {users ? <Users users={users.results} /> : null}
          </div>
          <div className="col  my-2">
            <form>
              <div className="form-group">
                <input
                  className="form-control"
                  placeholder="add new user"
                  onChange={handleChange}
                />
              </div>
              <button className="btn btn-danger float-right" onClick={addUser}>
                Add user
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
