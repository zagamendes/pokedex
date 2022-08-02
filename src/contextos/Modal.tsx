import React, { Children, Dispatch, SetStateAction, useState } from "react";

import { createContext } from "react";
import { Pokemon } from "../types/pokemon";
import { PokemonGif, PokemonGifResponse } from "../types/pokemonGifResponse";
interface modalContextProps {
  showModal: boolean;
  setShowModal: (_: boolean) => void;
  chosenPokemon: Pokemon | null;
  setChosenPokemon: (_: Pokemon | null) => void;
  gifResponse: PokemonGif | null;
  setGifResponse: (_: PokemonGif) => void;
}
export const modalContext = createContext<modalContextProps>(
  {} as modalContextProps
);
const ModalProvider: React.FC<any> = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [gifResponse, setGifResponse] = useState<PokemonGif | null>(null);
  const [chosenPokemon, setChosenPokemon] = useState<Pokemon | null>(null);
  return (
    <modalContext.Provider
      value={{
        showModal,
        setShowModal,
        chosenPokemon,
        setChosenPokemon,
        gifResponse,
        setGifResponse,
      }}
    >
      {children}
    </modalContext.Provider>
  );
};

export default ModalProvider;
