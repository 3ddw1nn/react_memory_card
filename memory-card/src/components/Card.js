import React from "react";

function Card(props) {
  const {
    card: { src, name },
    handleGame,
  } = props;
  return (
    <button className="card" onClick={handleGame.bind(this, name)}>
      <div>
        <img src={src} alt={name} className= "img-photos" />
        <div>{name}</div>
      </div>
    </button>
  );
}

export default Card;
