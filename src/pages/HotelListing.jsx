import "../pages/hotellisting.css";
import FlightBox from "../components/FlightBox";
import FilterFixer from "../components/FilterFixer";
import Sliderr from "@mui/material/Slider";
import React, { useEffect, useState, useRef, createRef } from "react";
import * as Slider from "@radix-ui/react-slider";
import arrow from "../svgs/arrow.svg";
import HotelCards from "../components/HotelCards";
import hamburger from "../svgs/hamburger.svg";
import { Hotels } from "../components/hotelInfo.jsx";
import { json } from "react-router-dom";

function HotelListing() {

  const item = JSON.parse(localStorage.getItem("HotelInfo")) || []

  const [range, setRange] = React.useState([50, 700]);
  function handleChanges(event, newValue) {
    setRange(newValue);
  }

  const [buttons, setButtons] = useState([
    { label: "0+", enabled: false },
    { label: "1+", enabled: false },
    { label: "2+", enabled: false },
    { label: "3+", enabled: false },
    { label: "4+", enabled: false },
  ]);

  const handleButtonClick = (index) => {
    const newButtons = [...buttons];
    newButtons[index].enabled = !newButtons[index].enabled;
    setButtons(newButtons);
  };

  const [checkedIndex, setCheckedIndex] = useState(null);
  const e = (index) => {
    if (index === checkedIndex) {
      setCheckedIndex(null);
    } else {
      setCheckedIndex(index);
    }
  };

  const [checkedIndex1, setCheckedIndex1] = useState(null);

  const e1 = (index1) => {
    if (index1 === checkedIndex1) {
      setCheckedIndex1(null);
    } else {
      setCheckedIndex1(index1);
    }
  };

  const [number, setNumber] = useState(4);
  const allCardsRef = useRef(null);

  const [flights, setFlights] = useState([...item]);

  const [originalFlights, setOriginalFlights] = useState([...flights]);
  const [SortOption, SetSortOption] = useState("Hotels");

  const handleSortChange = (selectedOption) => {
    SetSortOption(selectedOption);

    if (selectedOption === "Hotels") {
      setFlights((prevFlights) =>
        prevFlights.slice(0, number).sort((a, b) => a.price - b.price)
      );
    } else if (selectedOption === "Motels") {
      setFlights((prevFlights) =>
        prevFlights.slice(0, number).sort((a, b) => b.price - a.price)
      );
    } else if (selectedOption === "Resorts") {
      setFlights((prevFlights) =>
        prevFlights.slice(0, number).sort((a, b) => a.time - b.time)
      );
    } 
  };

  const handleSelectChange = (event) => {
    SetSortOption(event.target.value);

    if (event.target.value === "Hotels") {
      setFlights((prevFlights) =>
        prevFlights.slice(0, number).sort((a, b) => a.price - b.price)
      );
    } else if (event.target.value === "Motels") {
      setFlights((prevFlights) =>
        prevFlights.slice(0, number).sort((a, b) => b.price - a.price)
      );
    } else if (event.target.value === "Resorts") {
      setFlights((prevFlights) =>
        prevFlights.slice(0, number).sort((a, b) => a.time - b.time)
      );
    } 
  };
  const [noMoreCards, setNoMoreCards] = useState(false);

  const handleShowMore = () => {
    SetSortOption("Hotels");
    const newNumber = number + 4;
    const maxNumber = Math.min(newNumber, originalFlights.length);
    setNoMoreCards(maxNumber >= originalFlights.length);
    setNumber(maxNumber);
    setFlights((prevFlights) =>
      originalFlights.slice(0, maxNumber).sort((a, b) => {
        const indexA = prevFlights.findIndex((flight) => flight.key === a.key);
        const indexB = prevFlights.findIndex((flight) => flight.key === b.key);
        return indexA - indexB;
      })
    );
  };

  const getSelectedOptionIndex = () => {
    switch (SortOption) {
      case "Hotels":
        return 0;
      case "Motels":
        return 1;
      case "Resorts":
        return 2;
      default:
        return 0;
    }
  };

  const greenLineStyle = {
    left: `calc(${getSelectedOptionIndex()} * (100% / 3) + 10px)`,
  };

  const [filterHam, setFilterHam] = useState(false);

  console.log(flights);

  return (
    <>
      <div className="container">
        <div className="row">
          <FlightBox
            small={
              <button
                className="heh"
                style={{
                  background: "#8DD3BB",
                  borderRadius: "4px",
                  padding: "15px 16px",
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.9781 13.3281L14.9659 13.3444L14.9803 13.3588L19.3903 17.7688C19.5856 17.9875 19.6898 18.2727 19.6816 18.5658C19.6734 18.8591 19.5532 19.1382 19.3457 19.3457C19.1382 19.5532 18.8591 19.6734 18.5658 19.6816C18.2727 19.6898 17.9875 19.5856 17.7688 19.3903L13.3588 14.9803L13.3444 14.9659L13.3281 14.9781C11.9186 16.0369 10.2029 16.6085 8.44003 16.6066C3.93701 16.6066 0.273438 12.943 0.273438 8.44C0.273438 3.93701 3.93701 0.273438 8.44 0.273438C12.943 0.273438 16.6066 3.93701 16.6066 8.44C16.6085 10.2029 16.0369 11.9186 14.9781 13.3281ZM2.56656 8.44V8.44003C2.56843 9.99718 3.18783 11.49 4.28891 12.5911C5.38998 13.6922 6.88282 14.3116 8.43997 14.3134H8.44C9.60166 14.3134 10.7372 13.969 11.7031 13.3236C12.669 12.6782 13.4218 11.7609 13.8664 10.6877C14.3109 9.61444 14.4272 8.43349 14.2006 7.29415C13.974 6.15481 13.4146 5.10827 12.5931 4.28685C11.7717 3.46544 10.7252 2.90605 9.58585 2.67942C8.44652 2.45279 7.26556 2.56911 6.19233 3.01365C5.1191 3.4582 4.2018 4.21101 3.55642 5.17689C2.91103 6.14278 2.56656 7.27834 2.56656 8.44Z"
                    fill="#112211"
                    stroke="#112211"
                    strokeWidth="0.046875"
                  />
                </svg>
              </button>
            }
            clss={"flight-box1"}
            puts={"ganputs"}
          />
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div
            className="mother-box"
            style={{ display: "flex", flexWrap: "wrap", marginTop: "32px" }}
          >
            <img
              className="filterham"
              data-index={filterHam}
              onClick={() => {
                setFilterHam(!filterHam);
              }}
              src={hamburger}
              style={{
                width: "40px",
                backgroundColor: "black",
                height: "40px",
                padding: "3px",
                borderRadius: "5px",
                display: "none",
                position: "fixed",
                left: "31%",
                top: "50%",
                zIndex: "99999999",
              }}
            ></img>
            <div
              className="filters"
              data-index={filterHam}
              style={{ width: "30%" }}
            >
              <div className="mnb" style={{ display: "flex" }}>
                <h4 style={{ marginBottom: "35px" }}>Filters</h4>
              </div>

              <FilterFixer
                text="price"
                everything={
                  <div style={{ padding: "20px" }}>
                    <Sliderr
                      value={range}
                      onChange={handleChanges}
                      valueLabelDisplay="auto"
                      min={50}
                      max={700}
                    />
                  </div>
                }
              />

              <FilterFixer
                text="Rating"
                everything={
                  <div id="but-cont">
                    {buttons.map((button, index) => (
                      <button
                        key={index}
                        data-enabled={button.enabled}
                        onClick={() => handleButtonClick(index)}
                        style={{ marginLeft: index === 0 ? "0px" : "" }}
                      >
                        {button.label}
                      </button>
                    ))}
                  </div>
                }
              />

              <FilterFixer
                text="Freebies"
                everything={
                  <div id="LIS">
                    <ul>
                      {["Free breakfast","Free parking","Free Internet","Free cancellation"].map(
                        (airline, index) => (
                          <li key={airline}>
                            <label>
                              <input
                                type="checkbox"
                                checked={index === checkedIndex}
                                onChange={() => e(index)}
                              />
                              {airline}
                            </label>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                }
              />

              <FilterFixer
                text="Amenities"
                everything={
                  <div id="LIS">
                    <ul>
                      {["24hr front desk","Air-conditioned","Fitness","Pool"].map((airline1, index1) => (
                        <li key={airline1}>
                          <label>
                            <input
                              type="checkbox"
                              checked={index1 === checkedIndex1}
                              onChange={() => e1(index1)}
                            />
                            {airline1}
                          </label>
                        </li>
                      ))}
                    </ul>
                  </div>
                }
              />
            </div>

            <div className="buyings buyings2" style={{ width: "70%" }}>
              <div className="leftLine"></div>
              <div className="secondFilterBox">
                <div className="greenLine" style={greenLineStyle}></div>
                <div
                  className="secondFilterColl"
                  onClick={() => handleSortChange("Hotels")}
                >
                  <div className="secondFiltertext">
                    <h5>Hotels</h5>
                    <p>257 places</p>
                  </div>
                </div>

                <div
                  className="secondFilterColl"
                  onClick={() => handleSortChange("Motels")}
                >
                  <div className="secondFiltertext">
                    <h5>Motels</h5>
                    <p>51 places</p>
                  </div>
                </div>

                <div
                  className="secondFilterColl"
                  onClick={() => handleSortChange("Resorts")}
                >
                  <div className="secondFiltertext">
                    <h5>Resorts</h5>
                    <p>72 places</p>
                  </div>
                </div>

                
              </div>

              <div className="arrange">
                <h6>
                  Showing {number} of <span>257 places</span>
                </h6>
                <div
                  className="ksuk"
                  style={{
                    width: "fit-content",
                    marginLeft: "auto",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <h5>Sort by</h5>
                  <div
                    style={{
                      position: "relative",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <select value={SortOption} onChange={handleSelectChange}>
                      <option value="Hotels">Hotels</option>
                      <option value="Motels">Motels</option>
                      <option value="Resorts">Resorts</option>
                    </select>
                    <img src={arrow}></img>
                  </div>
                </div>
              </div>

              <div ref={allCardsRef} className="allcards">
                {flights
                  .filter((flight) => {
                    if (checkedIndex !== null) {
                      return (
                        flight.name ===
                        ["Free breakfast","Free parking","Free internet","Free cancellation"][
                          checkedIndex
                        ]
                      );
                    }
                    return true;
                  })
                  .slice(0, number)
                  .map((flight) => {
                    if (range[1] >= flight.price && range[0] <= flight.price) {
                      return (
                        <HotelCards
                          img={flight.img}
                          price={flight.price}
                          favorite={flight.favorite}
                          key={flight.id}
                        />
                      );
                    }
                  })}
              </div>

              <div className="showMoreBtnBox">
                {!noMoreCards && (
                  <button className="showMoreBtn" onClick={handleShowMore}>
                    Show More
                  </button>
                )}

                {noMoreCards && (
                  <p className="noMoreCards">No more cards to show</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HotelListing;
