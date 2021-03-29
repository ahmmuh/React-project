import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function PokemonDetail() {
  let { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const url = "https://pokeapi.co/api/v2/pokemon?limit=100";

  const getPokemon = () => {
    fetch(`${url}/${id}`)
      .then((res) => res.json())
      .then((data) => {
        data.results.map((p) => console.log(p));
      });
  };

  useEffect(() => {
    getPokemon();
  }, []);
  console.log(pokemon);
  return <div className="container w-25 m-auto"></div>;
}

export default PokemonDetail;
