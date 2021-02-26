import Products from "./Products";
import Users from "./Users";
import Header from "./Header";
import Menu from "./Menu";
import Jobs from "./Jobs";
// function Dashboard() {
//   const [data, setData] = useState([]);

//   const url = "https://randomuser.me/api/?results=20";
//   const getData = (e) => {
//
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   return (
//     <div className="dashboard">
//       <Menu />
//       <div className="container">
//         <div className="row">
//           <div className="col-4 border my-2">
//             <Users users={data} />
//           </div>
//           <div className="col border my-2">
//             <h4>Users dashboard</h4>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;

import React, { Component } from "react";

export class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }
  componentDidMount() {
    fetch("https://randomuser.me/api/?results=20", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ users: data });
      });
  }
  render() {
    return (
      <div className="dashboard">
        <Menu />
        <div className="container">
          <div className="row">
            <div className="col-4 border my-2">
              <Users users={this.state.users.results} />
            </div>
            <div className="col border my-2">
              <h4>Users dashboard</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
