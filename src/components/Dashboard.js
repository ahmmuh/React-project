import React, { Component } from "react";
import Users from "./Pokemon";
import PokemonDetail from "./PokemonDetail";
export class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      pokemons: [],
    };
  }

  componentDidMount() {
    this.getPokemons();
  }

  getPokemons = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ pokemons: data });
      });
  };

  render() {
    return (
      <div className="dashboard">
        <div className="container mt-4">
          <div className="row">
            <div className="col-4  my-2">
              <Users pokemons={this.state.pokemons.results} />
            </div>
            <div className="col  my-2">
              <PokemonDetail />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
