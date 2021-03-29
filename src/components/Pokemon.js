import React from "react";
import { Link } from "react-router-dom";
function Pokemon(props) {
  const pokemons = props.pokemons;
  let pokemonList = [];
  if (pokemons) {
    pokemonList = pokemons.map((pokemon, id) => {
      return (
        <li key={id} className="list-group-item">
          <Link to={`/${id}`}> {pokemon.name}</Link>
        </li>
      );
    });
  }

  return (
    <div className="container">
      <ul className="list-group">{pokemonList}</ul>
    </div>
  );
}

export default Pokemon;
