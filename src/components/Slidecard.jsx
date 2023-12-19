import StarRating from "./StarsRating";
import google from "../svgs/google.svg";
import foto from "../svgs/sky.svg";
import React, { useState } from "react";
import "../components/slidecard.css";
import green from "../svgs/green.svg";

function Slidecard() {
  const [style, setstyle] = useState();
  const [stylee, setstylee] = useState();

  const ChangeStyle = () => {
    setstylee('activee');
    setstyle("active");
    if (style == "active") {
      setstylee('bruh')
      setstyle("bruh");
    }
  };

  return (
    <>
      <div
        className="cardd"
        style={{
          width: "425px",
          padding: "24px",
          borderRadius: "20px",
          boxShadow: "2px 4px 16px rgba(17, 34, 17, 0.1)",
          marginRight: '50px',
          backgroundColor: 'white'
        }}
      >
        <div>
          <svg
            className={stylee}
            style={{position: 'absolute', zIndex: '-1'}}
            width="425"
            height="586"
            viewBox="0 0 425 586"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="425"
              height="586"
              rx="20"
              fill="#8DD3BB"
              fillOpacity="0.4"
            />
          </svg>
        </div>
        <h3>“A real sense of community, nurtured”</h3>
        <p
          className={style}
          style={{
            margin: "15px 0 12px 0",
            color: "rgb(146 155 146)",
            height: "50px",
            overflow: "hidden",
          }}
        >
          Really appreciate the help and support from the staff during these
          tough times. Shoutout to Katie for helping me always, even when I was
          out of the country. And always available when needed.
        </p>
        <h6
          style={{ marginLeft: "299", cursor: "pointer", }}
          onClick={ChangeStyle}
        >
          View more
        </h6>
        <StarRating />

        <h5>Olga</h5>
        <p style={{ color: "rgb(146 155 146)" }}>Weave Studios – Kai Tak</p>
        <div style={{ marginBottom: "40px" }}>
          <img
            src={google}
            style={{ width: "24px", height: "24px", cursor: "pointer" }}
          ></img>
          <span
            style={{
              marginLeft: "5px",
              color: "rgb(146 155 146)",
              cursor: "pointer",
            }}
          >
            Google
          </span>
        </div>
        <img src={foto}></img>
      </div>
    </>
  );
}

export default Slidecard;
