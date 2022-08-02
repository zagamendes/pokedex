import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import React, { useContext, useEffect, useState } from "react";
import { modalContext } from "../../contextos/Modal";
import { Pokemon } from "../../types/pokemon";

// import { Container } from './styles';
export const getFavorites = () =>
  JSON.parse(localStorage.getItem("favoritos") as string) ?? [];

const AddToFavorites: React.FC = () => {
  const { chosenPokemon } = useContext(modalContext);
  const [favorite, setFavorite] = useState(false);
  useEffect(() => {
    setFavorite(isFavorite());
  }, []);

  const addToFavorites = () => {
    const favoritos = getFavorites();
    favoritos.push(chosenPokemon);

    localStorage.setItem("favoritos", JSON.stringify(favoritos));
    setFavorite(true);
  };
  const removeFromFavorites = () => {
    const favoritos = getFavorites();
    const newFavorites = favoritos.filter(
      (pokemon: Pokemon) => pokemon.name != chosenPokemon?.name
    );
    localStorage.setItem("favoritos", JSON.stringify(newFavorites));
    setFavorite(false);
  };

  const isFavorite = () => {
    const favorites = getFavorites();
    return favorites.some(
      (pokemon: Pokemon) => pokemon.name == chosenPokemon?.name
    );
  };

  return (
    <MDBBtn
      color="white"
      onClick={() => (!favorite ? addToFavorites() : removeFromFavorites())}
    >
      <MDBIcon size="lg" fas icon="heart" className="mx-2" />
      {!favorite ? "Adicionar aos favoritos" : "Remover dos favoritos"}
    </MDBBtn>
  );
};

export default AddToFavorites;
