import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Pokemon from "./components/Pokemon";
import PokemonDetail from "./components/PokemonDetail";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="main-container">
      <nav className="navbar bg-dark p-3"></nav>
      <Router>
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>

          <Route exact path="/pokemon">
            <Pokemon />
          </Route>
          <Route path="/:id" children={<PokemonDetail />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
