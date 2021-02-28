import React, { Component } from "react";
import UserDetail from "./UserDetail";
import Menu from "./Menu";
import Header from "./Header";
import Users from "./Users";
export class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      name: "",
    };
  }

  componentDidMount() {
    this.getUsers();
  }

  // evx235vw1xzvth5;

  getUsers = () => {
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
  };

  // add new user to the list

  handleChange = (event) => {
    this.setState({
      name: event.target.value,
    });
    console.log(this.state.name);
  };

  addUser = (event) => {
    event.preventDefault();

    this.setState({
      users: this.state.users,
    });
    console.log(this.state.users);
  };

  render() {
    return (
      <div className="dashboard">
        <Menu />
        <div className="container mt-4">
          <div className="row">
            <div className="col-4  my-2">
              <Users users={this.state.users.results} />
            </div>
            <div className="col  my-2">
              <form>
                <div className="form-group">
                  <input
                    className="form-control"
                    placeholder="add new user"
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
                </div>
                <button
                  className="btn btn-danger float-right"
                  onClick={this.addUser}
                >
                  Add user
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
