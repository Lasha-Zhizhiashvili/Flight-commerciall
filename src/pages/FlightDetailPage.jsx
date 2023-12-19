import "./flightdetailpage.css";
import bigplane from "../svgs/bigplane.svg";
import { useState } from "react";
import { SmallCards } from "../components/smallcardsInfo.jsx";
import EmiratesCard from "../components/EmiratesCard";
import { Link } from "react-router-dom";

function FlightDetailPage() {
  const [selectedFilter, setSelectedFilter] = useState("");

  const handleCheckboxChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  const filteredCards =
    selectedFilter === "Economy"
      ? SmallCards.filter(
          (card) => card.title === "Kids" || card.title === "Seats"
        )
      : selectedFilter === "First Class"
      ? SmallCards.filter((card) => card.title === "Window")
      : selectedFilter === "Business Class"
      ? SmallCards.filter(
          (card) => card.title === "Man" || card.title === "Pilot"
        )
      : SmallCards;

  const handleResetFilters = () => {
    setSelectedFilter("");
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="flightDetail">
            <div className="flightDetailText">
              <div>
                <p style={{ color: "#FF8682" }}>Turkey</p>
                <h6>
                  <svg
                    width="7"
                    height="12"
                    viewBox="0 0 7 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1.5L5.5 6L1 10.5"
                      stroke="#112211"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </h6>
                <p style={{ color: "#FF8682" }}>istanbul</p>
                <h6>
                  <svg
                    width="7"
                    height="12"
                    viewBox="0 0 7 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1.5L5.5 6L1 10.5"
                      stroke="#112211"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </h6>
                <p>CVK Park Bosphorus Hotel Istanbul</p>
              </div>
            </div>

            <div className="moreText">
              <div>
                <h3>Emirates A380 Airbus</h3>
                <h2>$240</h2>
              </div>
              <div>
                <svg
                  style={{ marginTop: "5px", marginRight: "5px" }}
                  width="12"
                  height="16"
                  viewBox="0 0 12 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 0.125C2.89852 0.125 0.375 2.53848 0.375 5.50391C0.375 6.91613 1.01871 8.79418 2.2882 11.086C3.30773 12.9261 4.48723 14.59 5.1007 15.418C5.20437 15.5594 5.33991 15.6745 5.49633 15.7538C5.65276 15.8331 5.82567 15.8744 6.00105 15.8744C6.17644 15.8744 6.34935 15.8331 6.50578 15.7538C6.6622 15.6745 6.79774 15.5594 6.90141 15.418C7.51383 14.59 8.69438 12.9261 9.71391 11.086C10.9813 8.79488 11.625 6.91684 11.625 5.50391C11.625 2.53848 9.10148 0.125 6 0.125ZM6 8C5.55499 8 5.11998 7.86804 4.74997 7.62081C4.37996 7.37357 4.09157 7.02217 3.92127 6.61104C3.75097 6.1999 3.70642 5.7475 3.79323 5.31105C3.88005 4.87459 4.09434 4.47368 4.40901 4.15901C4.72368 3.84434 5.12459 3.63005 5.56105 3.54323C5.9975 3.45642 6.4499 3.50097 6.86104 3.67127C7.27217 3.84157 7.62357 4.12996 7.87081 4.49997C8.11804 4.86998 8.25 5.30499 8.25 5.75C8.24935 6.34654 8.01209 6.91846 7.59027 7.34027C7.16846 7.76209 6.59654 7.99935 6 8Z"
                    fill="#112211"
                  />
                </svg>
                <p>Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437</p>
              </div>
              <div style={{ display: "flex", alignItems: "center", flexWrap: 'wrap' }}>
                <div className="kidding">
                  <h6
                  style={{
                    padding: "8.5px 11px",
                    border: "1px solid #8DD3BB",
                    borderRadius: "4px",
                    marginRight: "8px",
                    width: "40px",
                    height: "32px",
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                  }}
                >
                  4.2
                </h6>
                <b style={{ marginRight: "3px" }}>Very Good</b>
                <span>54 reviews</span>
                </div>
                
                <div>
                  <button>
                    <svg
                      width="18"
                      height="16"
                      viewBox="0 0 18 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.7863 1.125C10.2504 1.125 9.0004 3.625 9.0004 3.625C9.0004 3.625 7.7504 1.125 5.21446 1.125C3.15352 1.125 1.52149 2.84922 1.5004 4.90664C1.45743 9.17734 4.88829 12.2145 8.64884 14.7668C8.75251 14.8373 8.87501 14.8751 9.0004 14.8751C9.12579 14.8751 9.24829 14.8373 9.35196 14.7668C13.1121 12.2145 16.543 9.17734 16.5004 4.90664C16.4793 2.84922 14.8473 1.125 12.7863 1.125V1.125Z"
                        stroke="#112211"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <button>
                    <svg
                      width="16"
                      height="18"
                      viewBox="0 0 16 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.1866 12.915L11.2024 12.9239L11.215 12.9107C11.4455 12.6697 11.7225 12.4778 12.0292 12.3468C12.336 12.2158 12.6661 12.1483 12.9996 12.1484C13.5168 12.1484 14.0211 12.3103 14.4417 12.6114C14.8622 12.9126 15.1779 13.3378 15.3445 13.8275C15.511 14.3172 15.5201 14.8468 15.3704 15.3419C15.2206 15.837 14.9197 16.2728 14.5097 16.5881C14.0997 16.9034 13.6012 17.0825 13.0843 17.1001C12.5673 17.1178 12.0578 16.9731 11.6273 16.6865C11.1968 16.3998 10.8668 15.9855 10.6837 15.5018C10.5005 15.0181 10.4735 14.4891 10.6062 13.9892L10.6109 13.9717L10.5951 13.9628L4.81383 10.71L4.798 10.7011L4.78543 10.7142C4.44333 11.0709 4.00234 11.3171 3.51918 11.4211C3.03602 11.5251 2.5328 11.4822 2.07425 11.2978C1.6157 11.1135 1.22279 10.7961 0.946072 10.3866C0.669354 9.97714 0.521484 9.49422 0.521484 9C0.521484 8.50578 0.669354 8.02286 0.946072 7.61336C1.22279 7.20387 1.6157 6.88654 2.07425 6.70218C2.5328 6.51783 3.03603 6.47489 3.51918 6.57889C4.00234 6.68289 4.44333 6.92907 4.78543 7.28575L4.798 7.29887L4.81383 7.28996L10.5951 4.03722L10.6109 4.02832L10.6062 4.01076C10.4516 3.4303 10.5139 2.81338 10.7815 2.27558C11.0491 1.73777 11.5036 1.31598 12.0599 1.08922C12.6161 0.862465 13.236 0.846301 13.8033 1.04376C14.3706 1.24122 14.8465 1.63875 15.1418 2.16188C15.437 2.68501 15.5314 3.29784 15.4073 3.88557C15.2831 4.4733 14.9489 4.9956 14.4673 5.35462C13.9857 5.71364 13.3897 5.88475 12.791 5.83589C12.1923 5.78703 11.6319 5.52155 11.2149 5.0892L11.2023 5.07616L11.1866 5.08504L5.4053 8.33778L5.38947 8.34668L5.39415 8.36423C5.50508 8.78082 5.50508 9.21918 5.39415 9.63577L5.38947 9.65332L5.4053 9.66222L11.1866 12.915Z"
                        fill="black"
                        stroke="#112211"
                        strokeWidth="0.046875"
                      />
                    </svg>
                  </button>
                  <Link to="/Flight-commercial/BookingDetail"><button className="booknow">Book now</button></Link> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <img className="imgcont" src={bigplane}></img>

          <div className="economy">
            <h3>Basic Economy Features</h3>
            <div>
              <label>
                <input
                  type="checkbox"
                  value="Economy"
                  checked={selectedFilter === "Economy"}
                  onChange={handleCheckboxChange}
                />
                Economy
              </label>
              <label>
                <input
                  type="checkbox"
                  value="First Class"
                  checked={selectedFilter === "First Class"}
                  onChange={handleCheckboxChange}
                />
                First Class
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Business Class"
                  checked={selectedFilter === "Business Class"}
                  onChange={handleCheckboxChange}
                />
                Business Class
              </label>
              <button onClick={handleResetFilters}>Reset Filters</button>
            </div>
          </div>

          <div className="manySmallcards">
            {filteredCards.map((card, index) => (
              <img key={index} src={card.image} />
            ))}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="policies">
            <h3>Emirates Airlines Policies</h3>
            <div>
              <svg
                width="18"
                height="20"
                viewBox="0 0 18 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.125 1.82031V1.375C10.125 1.07663 10.0065 0.790483 9.7955 0.579505C9.58452 0.368526 9.29837 0.25 9 0.25C8.70164 0.25 8.41549 0.368526 8.20451 0.579505C7.99353 0.790483 7.875 1.07663 7.875 1.375V1.82031C6.45433 1.99866 5.09716 2.51513 3.91735 3.32641L3.42188 2.82812C3.21053 2.61678 2.92389 2.49805 2.625 2.49805C2.32612 2.49805 2.03947 2.61678 1.82813 2.82812C1.61678 3.03947 1.49805 3.32611 1.49805 3.625C1.49805 3.92389 1.61678 4.21053 1.82813 4.42188L2.23125 4.825C0.791348 6.46272 -0.00195218 8.5693 3.6077e-06 10.75C3.6077e-06 15.7127 4.03735 19.75 9 19.75C13.9627 19.75 18 15.7127 18 10.75C18 6.16844 14.5584 2.37531 10.125 1.82031ZM9 13C8.46935 12.9998 7.95583 12.8121 7.55016 12.4701C7.14449 12.128 6.87279 11.6535 6.78305 11.1305C6.69331 10.6075 6.79131 10.0696 7.05974 9.61184C7.32817 9.15409 7.74975 8.80594 8.25 8.62891V5.125C8.25 4.92609 8.32902 4.73532 8.46967 4.59467C8.61033 4.45402 8.80109 4.375 9 4.375C9.19892 4.375 9.38968 4.45402 9.53033 4.59467C9.67099 4.73532 9.75 4.92609 9.75 5.125V8.62891C10.2503 8.80594 10.6718 9.15409 10.9403 9.61184C11.2087 10.0696 11.3067 10.6075 11.217 11.1305C11.1272 11.6535 10.8555 12.128 10.4498 12.4701C10.0442 12.8121 9.53066 12.9998 9 13Z"
                  fill="#112211"
                />
              </svg>
              <span>
                Pre-flight cleaning, installation of cabin HEPA filters.
              </span>
              <svg
              style={{marginLeft: '10%'}}
                width="18"
                height="20"
                viewBox="0 0 18 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.125 1.82031V1.375C10.125 1.07663 10.0065 0.790483 9.7955 0.579505C9.58452 0.368526 9.29837 0.25 9 0.25C8.70164 0.25 8.41549 0.368526 8.20451 0.579505C7.99353 0.790483 7.875 1.07663 7.875 1.375V1.82031C6.45433 1.99866 5.09716 2.51513 3.91735 3.32641L3.42188 2.82812C3.21053 2.61678 2.92389 2.49805 2.625 2.49805C2.32612 2.49805 2.03947 2.61678 1.82813 2.82812C1.61678 3.03947 1.49805 3.32611 1.49805 3.625C1.49805 3.92389 1.61678 4.21053 1.82813 4.42188L2.23125 4.825C0.791348 6.46272 -0.00195218 8.5693 3.6077e-06 10.75C3.6077e-06 15.7127 4.03735 19.75 9 19.75C13.9627 19.75 18 15.7127 18 10.75C18 6.16844 14.5584 2.37531 10.125 1.82031ZM9 13C8.46935 12.9998 7.95583 12.8121 7.55016 12.4701C7.14449 12.128 6.87279 11.6535 6.78305 11.1305C6.69331 10.6075 6.79131 10.0696 7.05974 9.61184C7.32817 9.15409 7.74975 8.80594 8.25 8.62891V5.125C8.25 4.92609 8.32902 4.73532 8.46967 4.59467C8.61033 4.45402 8.80109 4.375 9 4.375C9.19892 4.375 9.38968 4.45402 9.53033 4.59467C9.67099 4.73532 9.75 4.92609 9.75 5.125V8.62891C10.2503 8.80594 10.6718 9.15409 10.9403 9.61184C11.2087 10.0696 11.3067 10.6075 11.217 11.1305C11.1272 11.6535 10.8555 12.128 10.4498 12.4701C10.0442 12.8121 9.53066 12.9998 9 13Z"
                  fill="#112211"
                />
              </svg>
              <span>Pre-flight health screening questions.</span>
            </div>
          </div>

          <EmiratesCard />

          <EmiratesCard />

        </div>
      </div>
    </>
  );
}

export default FlightDetailPage;
