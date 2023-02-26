import React from "react";
import ac from "../../assets/images/ac.jpg";

function Card() {
  return (
    <div className="game-card">
      <div className="game-image">
        <img src={ac} alt="ac" />
      </div>
      <div className="game-details">
        <div className="sec-header">
          <h1>Assassin's Creed</h1>
        </div>
        <p>
          Assassin's Creed Valhalla is a 2020 action role-playing video game.
        </p>
        <p className="mt-3">Rating: 4.5</p>
        <div className="price">
          <span>$28.99</span>
          <button>Buy Now!</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
