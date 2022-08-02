import React from "react";
import { Pokemon } from "../../types/pokemon";

// import { Container } from './styles';
import "./ListInfo.css";
interface ListInfoProps {
  pokemon: Pokemon;
}

const ListInfo: React.FC<ListInfoProps> = ({ pokemon }) => {
  const setColor = (power: number) => {
    if (power >= 90) {
      return "red";
    }
    if (power >= 70) {
      return "green";
    }
    if (power >= 50) {
      return "orange";
    }
    if (power >= 0) {
      return "brown";
    }
  };
  return (
    <div className="mt-3">
      {pokemon.stats.map((stat) => {
        return (
          <div
            key={stat.stat.name}
            className="d-flex justify-content-between px-3 "
          >
            <div className="d-flex align-items-center w-100">
              <p className="m-0">{stat.stat.name}</p>
              <div
                className="my-progress-bar"
                style={{
                  width: `${stat.base_stat / 1.5}%`,
                  background: setColor(stat.base_stat),
                }}
              ></div>
            </div>

            <div>
              <p className="m-0" style={{ color: setColor(stat.base_stat) }}>
                {stat.base_stat}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListInfo;
