import "./App.css";
import React from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Logout from "./components/Logout";
import UserDetail from "./components/UserDetail";
function App() {
  return (
    <Router>
      <div className="main-container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/dashboard">
            <Dashboard />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/profile">
            <Profile />
          </Route>

          <Route exact path="/logout">
            <Logout />
          </Route>

          <Route path="/register" component={Register} />
          <Route exact path="/register">
            <Register />
          </Route>

          <Route path="/:id" children={<UserDetail />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
