import "bootstrap/dist/css/bootstrap.min.css";
import "../pages/home.css";
import Navbar from "../components/NavbarWhite";
import Text from "../components/Text";
import Bigcard from "../components/Bigcard";
import Slidecardcont from "../components/Slidecardcont";
import Flightbox from "../components/FlightBox";
import plane from "../svgs/plane.svg";
import bed from "../svgs/bed.svg";
import arr from "../svgs/arr.svg";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import { Cards } from "../components/cardInfo";
import { useState } from "react";


function Home() {
  const [visitedCards, setVisitedCards] = useState([]);

  const handleCardClick = (card) => {
    const storedVisitedCards = localStorage.getItem("visitedCards");
    let existingVisitedCards = [];
  
    if (storedVisitedCards) {
      existingVisitedCards = JSON.parse(storedVisitedCards);
    }
  
    const existingCardIndex = existingVisitedCards.findIndex((visitedCard) => visitedCard.id === card.id);
  
    if (existingCardIndex !== -1) {
      const updatedVisitedCards = [
        existingVisitedCards[existingCardIndex],
        ...existingVisitedCards.slice(0, existingCardIndex),
        ...existingVisitedCards.slice(existingCardIndex + 1)
      ];
      localStorage.setItem("visitedCards", JSON.stringify(updatedVisitedCards));
    } else {
      const updatedVisitedCards = [card, ...existingVisitedCards.slice(0, 3)];
      localStorage.setItem("visitedCards", JSON.stringify(updatedVisitedCards));
    }
  

  };

  return (
    <>
      <header className="header1">
        <div className="foto">
          <Navbar />
          <div className="container">
            <div className="row">
              <div className="text">
                <h3>Helping Others</h3>
                <h1>LIVE & TRAVEL</h1>
                <h5>Special offers to suit your plan</h5>
              </div>

              <Flightbox
                but={
                  <div className="but">
                    <svg
                      width="100"
                      height="4"
                      viewBox="0 0 100 4"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line
                        y1="2"
                        x2="100"
                        y2="2"
                        stroke="#8DD3BB"
                        strokeWidth="4"
                      />
                    </svg>
                    <a
                      className="onl"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        document.querySelector(".jj").style.transform =
                          "translateX(0%)";
                        document.querySelector(".but svg").style.transform =
                          "translate(0%)";
                      }}
                    >
                      <img src={plane} />
                      Flights
                    </a>
                    <a
                      className="only"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        document.querySelector(".jj").style.transform =
                          "translateX(-120%)";

                        document.querySelector(".but svg").style.transform =
                          "translate(133%)";
                      }}
                    >
                      <img src={bed} />
                      Stays
                    </a>
                  </div>
                }
                button={
                  <div className="twobut">
                    <button className="hah1"> + Add Promo Code</button>
                    <Link
                      to="/Flight-commercial/Moreflights/FlightListing"
                      style={{ color: "black" }}
                    >
                      <button className="hah">
                        <img src={arr}></img> Show Filghts
                      </button>
                    </Link>
                  </div>
                }
              />
            </div>
          </div>
        </div>
      </header>

      <Text
        bigtext="Plan your perfect trip"
        text="Search Flights & Places Hire to our most popular destinations"
        margin="200px"
      />

      <div className="container">
        <div className="row">
          <div className="cardcont-box">
            {Cards.map((card) => (
              <Card
                text={card.text}
                image={card.image}
                id={card.id}
                key={card.id}
                onClick={() => handleCardClick(card)}
              />
            ))}
          </div>
        </div>
      </div>

      <Bigcard />

      <Text
        bigtext="Reviews"
        text="What people says about Golobe facilities"
        margin="70px"
      />
      <Slidecardcont />
    </>
  );
}

export default Home;
