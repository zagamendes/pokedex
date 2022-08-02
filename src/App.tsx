import React, { useEffect, useState } from "react";

import "./App.css";
import Card from "./components/Card/Card";

import Header from "./components/Header/Header";

import ModalProvider from "./contextos/Modal";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokemonProvider from "./contextos/Pokemon";
import Home from "./telas/Home";
import SearchedPokemon from "./telas/SearchedPokemon";
import Favorites from "./telas/Favorites";

function App() {
  return (
    <BrowserRouter>
      <PokemonProvider>
        <ModalProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<SearchedPokemon />} />
            <Route path="/Favoritos" element={<Favorites />} />
          </Routes>
        </ModalProvider>
      </PokemonProvider>
    </BrowserRouter>
  );
}

export default App;
