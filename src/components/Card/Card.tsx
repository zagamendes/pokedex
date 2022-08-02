import axios from "axios";
import React, { useContext } from "react";
import { Pokemon } from "../../types/pokemon";
import { PokemonGifResponse } from "../../types/pokemonGifResponse";
import { modalContext } from "../../contextos/Modal";
import Modal from "../Modal/Modal";
import "./Card.css";
interface PokemonProps {
  pokemon: Pokemon | null;
}
const Card: React.FC<PokemonProps> = ({ pokemon }) => {
  const bg: any = {
    grass: "#D6EBDC",
    fire: "#FFEBCA",
    water: "#DFECF5",
    bug: "#E6ECD7",
    normal: "#E8E8E8",
    poison: "#F6EFF9",
    ground: "#F5E4DB",
    fairy: "rgba(221, 138, 220, 0.2)",
    fighting: "#C44D6167",
    flying: "#E8E8E8",
    rock: "#E7F5F2",
    ghost: "#DFE2F1",
    steel: "#DCDBD6",
    electric: "#FFF27588",
    psychic: "#EB8C8533",
    ice: "#E5F3F0",
    dragon: "#46699933",
    dark: "#3D3C3F33",
  };
  const { showModal, setShowModal, setGifResponse, setChosenPokemon } =
    useContext(modalContext);

  const toggleModal = async () => {
    await getPokemonGif();
    setChosenPokemon(pokemon as Pokemon);
    setShowModal(!showModal);
  };
  const getPokemonGif = async () => {
    const { data } = await axios.get<PokemonGifResponse>(
      `https://api.giphy.com/v1/gifs/search?api_key=Qs0VeMP3PmfmckSyx2Zw5Gz4o1N0fDkz&q=${pokemon?.name} pokemon&limit=1`
    );

    setGifResponse(data.data[0]);
  };

  return !pokemon ? null : (
    <>
      <div
        className="card d-flex justify-content-around mb-4"
        style={{ backgroundColor: bg[pokemon.types[0].type.name] }}
        onClick={() => toggleModal()}
      >
        <img
          src={pokemon.sprites.other.dream_world.front_default}
          className="w-75"
          alt={pokemon.name}
        />
        <div className="">{pokemon.name}</div>
      </div>
    </>
  );
};

export default Card;
