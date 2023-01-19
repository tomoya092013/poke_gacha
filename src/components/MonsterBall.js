import React, { useEffect, useState } from "react";
import "./MonsterBall.css";
import PokemonImg from "./PokemonImg";
import { getPokemon } from "./Pokemon";

const MonsterBall = () => {
  const [active, setActive] = useState(false);
  const [getPokeData, setGetPokeData] = useState(false);
  const [number, SetNumber] = useState("");
  const [pokemonData, setPokemonData] = useState({});

  useEffect(() => {
    const rundomNumber = Math.floor(Math.random() * (1280 - 1)) + 1;
    SetNumber(rundomNumber);
  }, []);

  const clickBall = () => {
    setPokemonData("");
    setGetPokeData(false);
    setActive(true);
    const rundomNumber = Math.floor(Math.random() * (1280 - 1)) + 1;
    SetNumber(rundomNumber);
    setTimeout(getPoke, 2000);
  };

  const getPoke = async () => {
    let _pokeData = await getPokemon(number);
    // console.log(number);
    setPokemonData(_pokeData);
    setGetPokeData(true);
  };

  // console.log(pokemonData);
  console.log(pokemonData);

  return (
    <>
      {!getPokeData ? (
        <div className="monsterBall">
          <img
            src="https://www.4gamer.net/games/335/G033525/20161111096/SS/001.jpg"
            alt="モンスターボール"
            className={active ? "active" : ""}
            onClick={clickBall}
            disabled={active}
          />
        </div>
      ) : (
        <PokemonImg
          pokemonData={pokemonData}
          setGetPokeData={setGetPokeData}
          setActive={setActive}
        />
      )}
    </>
  );
};

export default MonsterBall;
