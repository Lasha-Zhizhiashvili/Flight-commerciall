import "./Moreflights.css";
import FlightBox from "../components/FlightBox";
import Text from "../components/Text";
import map from "../svgs/map.svg";
import TravelCard from "../components/TravelCard";
import arr from "../svgs/arr.svg";
import { Link } from "react-router-dom";
import cimg1 from "../img/cimg1.jpg";
import cimg2 from "../img/cimg2.jpg";
import cimg3 from "../img/cimg3.jpg";
import cimg4 from "../img/cimg4.jpg";
import bimg1 from "../img/bimg1.jpg";
import bimg2 from "../img/bimg2.jpg";
import bimg3 from "../img/bimg3.jpg";
import bimg4 from "../img/bimg4.jpg";

function MoreFlights() {
  return (
    <>
      <header className="header2">
        <div className="poto">
          <FlightBox
            but={<p className="plo">Where do you want to go?</p>}
            button={
              <div className="twobut">
                <button className="hah1"> + Add Promo Code</button>
                <Link
                  style={{ color: "black" }}
                  to="/Flight-commercial/Moreflights/FlightListing"
                >
                  <button className="hah">
                    <img src={arr}></img> Show Filghts
                  </button>
                </Link>
              </div>
            }
          />
        </div>
      </header>

      <Text
        bigtext="Lets go places together"
        text="Discover the latest offers and news and start planning your next trip with us."
        margin="200px"
        link="/Flight-commercial/FLightDetailPage"
        linktext="See More Places"
      />

      <img src={map} style={{ width: "100%", maxWidth: "100%" }}></img>

      <Text
        bigtext="Fall into trave"
        text="Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got the travel tools to get you to your destination."
        margin="70px"
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
                      backgroundImage: `url(${bimg1})`,
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
                      backgroundImage: `url(${bimg2})`,
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
                      backgroundImage: `url(${bimg3})`,
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
                      backgroundImage: `url(${bimg4})`,
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

export default MoreFlights;
