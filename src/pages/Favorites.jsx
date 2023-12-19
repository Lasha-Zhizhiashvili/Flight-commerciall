import "../pages/favorites.css";
import HotelCard from "../components/HotelCards";
import { useState, useEffect } from "react";

function Favorites() {
  const savedCards = JSON.parse(localStorage.getItem("favoriteCards")) || [];

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="favoBut">
            <h1>Favorites</h1>
            <div className="favCont">
              <div className="greenline"></div>
              <div style={{ borderRight: "1px solid black" }}>
                <h5>Flights</h5>
                <p>2 marked</p>
              </div>
              <div>
                <h5>Places</h5>
                <p>3 marked</p>
              </div>
            </div>
          </div>
          <div className="FavCardRend">
            {savedCards.map((card) => (
              <HotelCard
                img={card.img}
                price={card.price}
                favorite={card.favorite}
                id={card.id}
                key={card.id}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Favorites;
