import { useState, useEffect } from "react";
import Stars from "../components/StarsRating";
import { useLocation } from "react-router-dom";
import { Prev } from "react-bootstrap/esm/PageItem";

function HotelCards({ img, price, id, favorite }) {

  const [isCardFavorite, setIsCardFavorite] = useState(favorite);

  const handleButtonClick = () => {
    const hotelInfo = JSON.parse(localStorage.getItem("HotelInfo")) || [];
    const updatedHotelInfo = hotelInfo.map((hotel) => {
      if (hotel.id === id) {
        return { ...hotel, favorite: true };
      }
      return hotel;
    });
  
    setIsCardFavorite(prev => !prev); 
  
    localStorage.setItem("HotelInfo", JSON.stringify(updatedHotelInfo)); 

  };

  return (
    <>
      <div
        className="FlyCard"
        style={{
          background: "#FFFFFF",
          boxShadow: "0px 4px 16px rgba(17, 34, 17, 0.05)",
          borderRadius: "12px",
        }}
      >
        <div className="FlyCardColl" style={{ width: "35%" }}>
          <div className="FlyCardRead">
            <img
              style={{ width: "100%", height: "100%", paddingRight: "0px" }}
              src={img}
            ></img>
          </div>
        </div>

        <div className="FlyCardColll" style={{ width: "65%", padding: "24px" }}>
          <div className="FlyCardRead">
            <div>
              <div style={{ display: "flex" }}>
                <h3>
                  CVK Park Bosphorus Hotel <br></br>Istanbul
                </h3>

                <div style={{ marginLeft: "auto" }}>
                  <p style={{ opacity: "0.75", marginBottom: "0px" }}>
                    starting from
                  </p>
                  <h3
                    style={{
                      color: "#FF8682",
                      width: "fit-content",
                    }}
                  >
                    {`${price}$`}
                    <sub>/night</sub>
                  </h3>
                  <p style={{ marginLeft: "auto", width: "fit-content" }}>
                    excl. tax
                  </p>
                </div>
              </div>

              <p style={{ margin: "15px 0" }}>
                <svg
                  style={{ margin: "0 5px" }}
                  width="10"
                  height="14"
                  viewBox="0 0 10 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 0C2.24312 0 0 2.14531 0 4.78125C0 6.03656 0.572187 7.70594 1.70062 9.74312C2.60687 11.3787 3.65531 12.8578 4.20062 13.5938C4.29277 13.7195 4.41325 13.8218 4.5523 13.8923C4.69134 13.9627 4.84504 13.9995 5.00094 13.9995C5.15683 13.9995 5.31053 13.9627 5.44958 13.8923C5.58862 13.8218 5.70911 13.7195 5.80125 13.5938C6.34563 12.8578 7.395 11.3787 8.30125 9.74312C9.42781 7.70656 10 6.03719 10 4.78125C10 2.14531 7.75688 0 5 0ZM5 7C4.60444 7 4.21776 6.8827 3.88886 6.66294C3.55996 6.44318 3.30362 6.13082 3.15224 5.76537C3.00087 5.39991 2.96126 4.99778 3.03843 4.60982C3.1156 4.22186 3.30608 3.86549 3.58579 3.58579C3.86549 3.30608 4.22186 3.1156 4.60982 3.03843C4.99778 2.96126 5.39991 3.00087 5.76537 3.15224C6.13082 3.30362 6.44318 3.55996 6.66294 3.88886C6.8827 4.21776 7 4.60444 7 5C6.99942 5.53026 6.78852 6.03863 6.41357 6.41357C6.03863 6.78852 5.53026 6.99942 5 7Z"
                    fill="#112211"
                  />
                </svg>
                Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437
              </p>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Stars />
              <p className="klk" style={{ margin: "4px  33px 0 4px " }}>
                5 Star hotel
              </p>
              <p>
                <svg
                  style={{ marginRight: "3px" }}
                  width="14"
                  height="12"
                  viewBox="0 0 14 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.5 0H2C1.86739 0 1.74021 0.0526785 1.64645 0.146447C1.55268 0.240215 1.5 0.367392 1.5 0.5V6.5C1.50091 7.29537 1.81727 8.0579 2.37968 8.62032C2.9421 9.18273 3.70463 9.49909 4.5 9.5H8C8.79537 9.49909 9.5579 9.18273 10.1203 8.62032C10.6827 8.0579 10.9991 7.29537 11 6.5V4H11.5625C12.0762 3.99942 12.5687 3.79511 12.9319 3.43188C13.2951 3.06865 13.4994 2.57618 13.5 2.0625V1C13.5 0.734784 13.3946 0.48043 13.2071 0.292893C13.0196 0.105357 12.7652 0 12.5 0ZM12.5 2.0625C12.5 2.31114 12.4012 2.5496 12.2254 2.72541C12.0496 2.90123 11.8111 3 11.5625 3H11V1H12.5V2.0625ZM11.5 10.5H1C0.867392 10.5 0.740215 10.5527 0.646447 10.6464C0.552678 10.7402 0.5 10.8674 0.5 11C0.5 11.1326 0.552678 11.2598 0.646447 11.3536C0.740215 11.4473 0.867392 11.5 1 11.5H11.5C11.6326 11.5 11.7598 11.4473 11.8536 11.3536C11.9473 11.2598 12 11.1326 12 11C12 10.8674 11.9473 10.7402 11.8536 10.6464C11.7598 10.5527 11.6326 10.5 11.5 10.5Z"
                    fill="#112211"
                  />
                </svg>
                <b>20+</b> Aminities
              </p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                margin: "20px 0 30px 0",
              }}
            >
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

            <div
              style={{
                display: "flex",
                borderTop: "1px solid black",
                paddingTop: "24px",
              }}
            >
              <button
                onClick={handleButtonClick}
                style={{
                  transition: "all 0.1s linear",
                  padding: "17px 16.5px",
                  border: "1px solid #8DD3BB",
                  borderRadius: "4px",
                  marginRight: "16px",
                  backgroundColor: isCardFavorite ? "#30dfab" : "transparent",
                }}
              >
                <svg
                  width="18"
                  height="17"
                  viewBox="0 0 18 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.7863 1.625C10.2504 1.625 9.0004 4.125 9.0004 4.125C9.0004 4.125 7.7504 1.625 5.21446 1.625C3.15352 1.625 1.52149 3.34922 1.5004 5.40664C1.45743 9.67734 4.88829 12.7145 8.64884 15.2668C8.75251 15.3373 8.87501 15.3751 9.0004 15.3751C9.12579 15.3751 9.24829 15.3373 9.35196 15.2668C13.1121 12.7145 16.543 9.67734 16.5004 5.40664C16.4793 3.34922 14.8473 1.625 12.7863 1.625V1.625Z"
                    stroke="#4C4850"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                style={{
                  width: "100%",
                  textAlign: "center",
                  backgroundColor: "#8DD3BB",
                  padding: "15.5px 0",
                  borderRadius: "4px",
                  fontWeight: "600",
                  fontSize: "17px",
                }}
              >
                View Deals
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HotelCards;
