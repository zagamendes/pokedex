import React from "react";

// import { Container } from './styles';

const Loading: React.FC = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center position-absolute loading-container">
      <div>
        <img
          className="img-fluid"
          src="https://i.pinimg.com/originals/15/3c/fb/153cfb7dcfb406a368a3dc4e35e37efb.gif"
        />
      </div>
      <p>Carregando...</p>
    </div>
  );
};

export default Loading;
