import React, { useEffect, useState } from "react";
import { getFavorites } from "../components/AddToFavorites/AddToFavorites";
import Card from "../components/Card/Card";
import Loading from "../components/Loading/Loading";
import { Pokemon } from "../types/pokemon";

// import { Container } from './styles';

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState<Pokemon[] | null>(null);
  useEffect(() => {
    setFavorites(getFavorites());
  }, []);
  if (!favorites) return <Loading />;

  return (
    <div className="App">
      <div className="d-flex flex-row flex-wrap justify-content-between">
        {favorites.map((favorite) => (
          <Card key={favorite.name} pokemon={favorite} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
