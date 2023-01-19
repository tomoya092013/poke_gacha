import React from "react";
import "./PokemonImg.css";

const PokemonImg = ({ pokemonData, setGetPokeData, setActive }) => {
  const clickPokeImg = () => {
    setGetPokeData(false);
    setActive(false);
  };
  return (
    <div className="pokeImg">
      <img
        src={pokemonData.sprites.front_default}
        alt=""
        onClick={clickPokeImg}
      />
    </div>
  );
};

export default PokemonImg;
