import "./morehotels.css";
import FlightBox from "../components/FlightBox";
import Text from "../components/Text";
import TravelCard from "../components/TravelCard";
import { Link } from "react-router-dom";
import cimg1 from "../img/cimg1.jpg";
import cimg2 from "../img/cimg2.jpg";
import cimg3 from "../img/cimg3.jpg";
import cimg4 from "../img/cimg4.jpg";
import building from "../svgs/building.svg";
import { useEffect, useState } from "react";
import Card from "../components/Card";

function MoreHotels() {
  const [visitedCards, setVisitedCards] = useState([]);

  useEffect(() => {
    const storedVisitedCards = localStorage.getItem("visitedCards");
    if (storedVisitedCards) {
      const parsedVisitedCards = JSON.parse(storedVisitedCards);
      setVisitedCards(parsedVisitedCards);
    }
  }, []);

  return (
    <>
      <header className="header3">
        <div className="poto">
          <h1>Make your travel whishlist, we’ll do the rest</h1>
          <p className="bmw">Special offers to suit your plan</p>
          <FlightBox
            but={
              <b>
                <p className="plo">Where are you flying?</p>
              </b>
            }
            button={
              <div className="twobut">
                <button className="hah1"> + Add Promo Code</button>
                <Link
                  style={{ color: "black" }}
                  to="/Flight-commercial/MoreHotels/HotelListing"
                >
                  <button className="hah">
                    <img src={building}></img> Show Places
                  </button>
                </Link>
              </div>
            }
          />
        </div>
      </header>

      <div className="container">
        <div className="row">
          <div className="recentSearch">
            <h1>Your recent searches</h1>

            <div className="RecentCards">
              {visitedCards.map((card) => (
                <Card
                  text={card.text}
                  image={card.image}
                  id={card.id}
                  key={card.id}
                  isRecent={true}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Text
        bigtext="Fall into trave"
        text="Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got the travel tools to get you to your destination."
        margin="70px"
        link="/Flight-commercial/HotelDetailPage"
        linktext="See All"
      />

      <div className="container">
        <div className="row">
          <div className="travel-box">
            <div className="travel-coll">
              <TravelCard
                bigtext="Melbourne"
                text="An amazing Journey"
                price="700"
                url={cimg1}
              />
            </div>

            <div className="travel-coll">
              <TravelCard
                bigtext="Paris"
                text="A Paris Adventure"
                price="600"
                url={cimg2}
              />
            </div>

            <div className="travel-coll">
              <TravelCard
                bigtext="London"
                text="London eye adventure"
                price="350"
                url={cimg3}
              />
            </div>

            <div className="travel-coll">
              <TravelCard
                bigtext="Columbia"
                text="Amazing streets"
                price="700"
                url={cimg4}
              />
            </div>
          </div>
        </div>
      </div>

      <Text
        bigtext="Fall into trave"
        text="Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got the travel tools to get you to your destination."
        margin="70px"
      />

      <div className="container">
        <div className="row">
          <div className="poto-box">
            <div className="poto-coll">
              <div className="poto-read">
                <div style={{ display: "flex" }}>
                  <h1 style={{ fontSize: "55px" }}>
                    Backpacking<br></br> Sri Lanka
                  </h1>
                  <h5
                    style={{
                      background: "#FFFFFF",
                      borderRadius: "8px",
                      marginLeft: "auto",
                      width: "68px",
                      height: "62px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    From<br></br> $700
                  </h5>
                </div>

                <p style={{ margin: "24px 0 120px 0" }}>
                  Traveling is a unique experience as it's the best way to
                  unplug from the pushes and pulls of daily life. It helps us to
                  forget about our problems, frustrations, and fears at home.
                  During our journey, we experience life in different ways. We
                  explore new places, cultures, cuisines, traditions, and ways
                  of living.
                </p>

                <button
                  style={{
                    width: "100%",
                    backgroundColor: "white",
                    borderRadius: "4px",
                    height: "48px",
                  }}
                >
                  Book Flight
                </button>
              </div>
            </div>

            <div className="poto-coll">
              <div className="poto-read1">
                <div className="poto-colll first">
                  <div
                    className="poto-readd"
                    style={{
                      backgroundImage:
                        "url(http://localhost:3000/Flight-commercial/static/media/bimg1.6ad4f6513787c3dc5a41.jpg)",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}
                  ></div>
                </div>

                <div className="poto-colll">
                  <div
                    className="poto-readd"
                    style={{
                      backgroundImage:
                        "url(http://localhost:3000/Flight-commercial/static/media/bimg2.a3a3560ffde0e3ffe4dd.jpg)",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}
                  ></div>
                </div>

                <div
                  className="poto-colll first"
                  style={{ paddingBottom: "0px" }}
                >
                  <div
                    className="poto-readd"
                    style={{
                      backgroundImage:
                        "url(	http://localhost:3000/Flight-commercial/static/media/bimg3.4bb4be9d9faecb2cd141.jpg)",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}
                  ></div>
                </div>

                <div className="poto-colll" style={{ paddingBottom: "0px" }}>
                  <div
                    className="poto-readd"
                    style={{
                      backgroundImage:
                        "url(http://localhost:3000/Flight-commercial/static/media/bimg4.a57d9e71f698087df985.jpg)",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MoreHotels;
