import React, { useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/flightbox.css";
import arrows from "../svgs/arrows.svg";
import arrow from "../svgs/arrow.svg";
import arr from "../svgs/arr.svg";

function Header({ but, button, small, clss, puts }) {
  function each() {
    document.querySelector(".the").style.display = "none";
    document.querySelector(".thee").style.display = "none";
    document.querySelector(".thhe").style.display = "none";
    document.querySelector(".thhee").style.display = "none";
  }

  return (
    <>
      <div className={`flight-box ${clss}`}>
        {but}

        <div className="jj">
          <div className="end">
            <div className={`inputs ${puts}`}>
              <div id="dropdown">
                <select id="change">
                  <option value="clevland">clevland</option>
                  <option value="clevland1">clevland1</option>
                  <option value="clevland2">clevland2</option>
                  <option value="clevland3">clevland3</option>
                </select>
                <span>From - To</span>
                <img style={{ pointerEvents: "none" }} src={arrows}></img>
              </div>

              <div id="switch">
                <select className="small">
                  <option value="clevland">clevland</option>
                  <option value="clevland1">clevland1</option>
                  <option value="clevland2">clevland2</option>
                  <option value="clevland3">clevland3</option>
                </select>
                <span>Trip</span>
                <img
                  style={{ pointerEvents: "none" }}
                  className="kok"
                  src={arrow}
                ></img>
              </div>

              <div>
                <input defaultValue={"07 Nov 22 - 13 Nov 22"} />
                <span>Depart- Return</span>
              </div>

              <div id="last">
                <input defaultValue={"1 Passenger, Economy"} />
                <span>Passenger - Class</span>
              </div>

              {small}
            </div>

            {button}
          </div>
          <div className="end1">
            <div className={`inputs ${puts}`}>
              <div id="dropdown">
                <select id="change">
                  <option value="clevland">clevland</option>
                  <option value="clevland1">clevland1</option>
                  <option value="clevland2">clevland2</option>
                  <option value="clevland3">clevland3</option>
                </select>
                <span>From - To</span>
                <img style={{ pointerEvents: "none" }} src={arrows}></img>
              </div>

              <div id="switch">
                <select className="small">
                  <option value="clevland">clevland</option>
                  <option value="clevland1">clevland1</option>
                  <option value="clevland2">clevland2</option>
                  <option value="clevland3">clevland3</option>
                </select>
                <span>Trip</span>
                <img
                  style={{ pointerEvents: "none" }}
                  className="kok"
                  src={arrow}
                ></img>
              </div>

              <div>
                <input defaultValue={"07 Nov 22 - 13 Nov 22"} />
                <span>Depart- Return</span>
              </div>

              <div>
                <input defaultValue={"1 Passenger, Economy"} />
                <span>Passenger - Class</span>
              </div>
            </div>

            <div className="twobut">
              <button className="hah1"> + Add Promo Code</button>
              <button className="hah">
                <img src={arr}></img>Show Filghts
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
