import { Link } from "react-router-dom";
import EmiratesCard from "../components/EmiratesCard";
import "../pages/bookingdetail.css";
import reallysmallplane from "../svgs/reallysmallplane.svg";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { parseISO } from "date-fns";

function BookingDetail() {

  const handleInputChange1 = (event) => {
    const { name, value } = event.target;

    setCreditInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };


  const Credit = JSON.parse(localStorage.getItem("CreditCard"));
  const [selectedOption, setSelectedOption] = useState("payInFull");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const [showPopup, setShowPopup] = useState(false);
  const [creditInfo, setCreditInfo] = useState({
    CreditNumber: "",
    ExpDate: "",
    NameOnCard: "",
    Country: "",
    LoggedIn: true,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const [cardList, setCardList] = useState(Credit ? [Credit] : []);

  const CardLimit = 4;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    let inputValue = value.replace(/\s/g, "");

    if (name === "CreditNumber" && inputValue.length > 16) {
      inputValue = inputValue.slice(0, 16);
    }

    const formattedValue =
      name === "CreditNumber"
        ? inputValue.replace(/\D/g, "").replace(/(^\d{4}|\d{4})(?=\d)/g, "$1 ")
        : inputValue;

    setCreditInfo((prevCreditInfo) => ({
      ...prevCreditInfo,
      [name]: formattedValue,
    }));
  };

  const handleAddCard = () => {
    if (cardList.length < CardLimit) {
      setShowPopup(true);
      setCreditInfo({
        CreditNumber: "",
        ExpDate: "",
        NameOnCard: "",
        Country: "",
        LoggedIn: true,
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = {};
  
    if (creditInfo.CreditNumber.length !== 19) {
      validationErrors.CreditNumber = "Please input a valid credit card number.";
    }
  
    if (creditInfo.ExpDate < currentDate) {
      validationErrors.ExpDate = "Incorrect expiration Date";
    }
  
    setErrors(validationErrors);
    setIsSubmitted(true);
  
    if (Object.keys(validationErrors).length > 0) {
      return;
    } else {
      setIsProcessing(true);
  
      const updatedCreditInfo = {
        ...creditInfo,
      };
      localStorage.setItem("CreditCard", JSON.stringify(updatedCreditInfo));
  
      setIsProcessing(false);
      setShowPopup(false);
      window.location.reload();
    }
  };

  const currentDate = new Date();

  const [selectedCardIndex, setSelectedCardIndex] = useState(0);

  const [gg, setGG] = useState(false);
  

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="flightDetailText shanxai">
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
          <div className="DetailBox">
            <div className="DetailFirstColl">
              <EmiratesCard />

              <div className="payment">
                <label
                  className={`payinfull ${
                    selectedOption === "payInFull" ? "selected" : ""
                  }`}
                  htmlFor="payInFull"
                >
                  <div>
                    <h5>Pay in full</h5>
                    <p>Pay the total and you are all set</p>
                  </div>
                  <input
                    type="radio"
                    name="paymentOption"
                    value="payInFull"
                    id="payInFull"
                    checked={selectedOption === "payInFull"}
                    onChange={handleOptionChange}
                  ></input>
                </label>
                <label
                  className={`payinlater ${
                    selectedOption === "payInLater" ? "selected" : ""
                  }`}
                  htmlFor="payInLater"
                >
                  <div>
                    <h5>Pay part now, part later</h5>
                    <p>
                      Pay $207.43 now, and the rest ($207.43) will be
                      automatically charged to the same<br></br> payment method
                      on Nov 14, 2022. No extra fees.
                    </p>
                    <Link to="/Flight-commercial/TermsAndCondition">
                      <h6 style={{ marginTop: "40px" }}>More info</h6>
                    </Link>
                  </div>
                  <input
                    type="radio"
                    name="paymentOption"
                    value="payInLater"
                    id="payInLater"
                    checked={selectedOption === "payInLater"}
                    onChange={handleOptionChange}
                  ></input>
                </label>
              </div>

              {Credit?.LoggedIn ? (
                <div>
                  <div className="AddCreditBox">
                    {cardList.map((card, index) => (
                      <div className="AddCreditColl" key={index}>
                        <div className="AddCreditRead">
                          <svg
                            width="32"
                            height="22"
                            viewBox="0 0 32 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.28 0.951904C0.573216 0.951904 0 1.52496 0 2.2319V19.7679C0 20.4748 0.573504 21.0479 1.28 21.0479H30.72C31.4268 21.0479 32 20.4748 32 19.7679V2.2319C32 1.52499 31.4265 0.951904 30.72 0.951904H1.28ZM19.112 6.9409C19.8908 6.9409 20.515 7.11293 20.913 7.2729L20.641 8.9839L20.461 8.8929C20.0902 8.73293 19.614 8.57898 18.957 8.58989C18.1706 8.58989 17.807 8.94071 17.807 9.26893C17.8024 9.63875 18.2318 9.88266 18.934 10.2479C20.0929 10.8114 20.6286 11.4947 20.621 12.3929C20.6054 14.0318 19.2347 15.0909 17.123 15.0909C16.2221 15.081 15.3542 14.8903 14.885 14.6699L15.167 12.9019L15.426 13.0279C16.0858 13.3227 16.513 13.4419 17.317 13.4419C17.8944 13.4419 18.5141 13.2002 18.519 12.6709C18.5228 12.3253 18.26 12.0789 17.478 11.6919C16.716 11.3142 15.7058 10.6814 15.717 9.54691C15.7289 8.01216 17.127 6.9409 19.112 6.9409ZM2.82998 7.1919H6.07299C6.5097 7.20842 6.86227 7.34902 6.984 7.82291L7.68301 11.4309C7.6831 11.4312 7.68288 11.4325 7.68301 11.4329L7.89299 12.5139L9.86199 7.1919H11.992L8.82598 14.9819L6.69798 14.9839L5.004 8.69789C6.01194 9.23187 6.87005 9.8497 7.36701 10.6999C7.23888 10.4309 7.07005 10.1272 6.85402 9.8279C6.60243 9.47936 6.0591 9.02935 5.832 8.83789C5.04064 8.17078 3.96592 7.632 2.80499 7.34691L2.82998 7.1919ZM12.839 7.2009H14.922L13.619 14.9789H11.536L12.839 7.2009ZM24.604 7.2009H26.182L27.834 14.9789H25.94C25.94 14.9789 25.7521 14.0853 25.691 13.8129C25.3933 13.8129 23.3113 13.8099 23.077 13.8099C22.9977 14.0205 22.647 14.9789 22.647 14.9789H20.504L23.535 7.84691C23.7496 7.3401 24.1154 7.2009 24.604 7.2009ZM24.759 9.2929C24.6565 9.58221 24.4781 10.0494 24.49 10.0289C24.49 10.0289 23.8488 11.739 23.681 12.1829L25.366 12.1819C25.2095 11.4402 25.0528 10.6986 24.896 9.95696L24.759 9.29296V9.2929Z"
                              fill="black"
                            />
                          </svg>

                          <b>**** {card.CreditNumber.slice(-4)}</b>
                          <p>{card.ExpDate.slice(0, 7)}</p>
                          
                          <input
                            type="radio"
                            checked={selectedCardIndex === index}
                            onChange={() => setSelectedCardIndex(index)}
                          />
                        </div>
                      </div>
                    ))}
                    <div className="AddNewCardColl">
                      <div className="AddNewCardRead">
                        <div>
                          <button onClick={handleAddCard}>
                            <svg
                              width="64"
                              height="65"
                              viewBox="0 0 64 65"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M56 32.917C56 19.667 45.25 8.91699 32 8.91699C18.75 8.91699 8 19.667 8 32.917C8 46.167 18.75 56.917 32 56.917C45.25 56.917 56 46.167 56 32.917Z"
                                stroke="#8DD3BB"
                                strokeWidth="2"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M32 22.917V42.917M42 32.917H22"
                                stroke="#8DD3BB"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </button>
                          <p>Add a new card</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {showPopup && (
                    <div className="AddCardPopup">
                      <div className="PopupContent">
                        <button
                          className="CloseButton"
                          onClick={() => setShowPopup(false)}
                        >
                          X
                        </button>
                        <h1>Add a new card</h1>
                        <div className="PayInputsWrap">
                          <div
                            className={`PayInputs ${
                              errors.CreditNumber && isSubmitted
                                ? "error shake"
                                : ""
                            }`}
                          >
                            <input
                              type="text"
                              placeholder="Credit number"
                              name="CreditNumber"
                              value={creditInfo.CreditNumber}
                              onChange={handleInputChange}
                            />
                            <span>Card Number</span>
                            {errors.CreditNumber && isSubmitted && (
                              <p className="error-message">
                                {errors.CreditNumber}
                              </p>
                            )}
                          </div>

                          <div
                            className={`PayInputs ${
                              errors.ExpDate && isSubmitted ? "error shake" : ""
                            }`}
                          >
                            <DatePicker
                              selected={
                                creditInfo.ExpDate
                                  ? parseISO(creditInfo.ExpDate)
                                  : null
                              }
                              onChange={(date) =>
                                setCreditInfo({
                                  ...creditInfo,
                                  ExpDate: date.toISOString(),
                                })
                              }
                              placeholderText="Exp. Date"
                              dateFormat="MM/yyyy"
                              showMonthYearPicker
                              className="datepicker-input"
                            />
                            <span>Expiration Date</span>
                            {errors.ExpDate && isSubmitted && (
                              <p className="error-message">{errors.ExpDate}</p>
                            )}
                          </div>

                          <div
                            className={`PayInputs ${
                              errors.NameOnCard && isSubmitted
                                ? "error shake"
                                : ""
                            }`}
                          >
                            <input
                              type="text"
                              placeholder="Name on card"
                              name="NameOnCard"
                              value={creditInfo.NameOnCard}
                              onChange={handleInputChange}
                            />
                            <span>Name on Card</span>
                            {errors.NameOnCard && isSubmitted && (
                              <p className="error-message">
                                {errors.NameOnCard}
                              </p>
                            )}
                          </div>

                          <div className="PayInputs">
                            <select
                              name="Country"
                              value={creditInfo.Country}
                              onChange={handleInputChange1}
                            >
                              <option>United States</option>
                              <option>United Kingdom</option>
                              <option>State Ohio</option>
                              <option>Oklahoma</option>
                            </select>
                            <span>Country or Region</span>
                          </div>
                        </div>

                        <div className="PaymentButton">
                          <input type="checkbox"></input>
                          <h6>
                            Securely save my information for 1-click checkout
                          </h6>
                        </div>
                        <div className="PayBut">
                          <button type="submit" onClick={handleSubmit}>
                            {isProcessing ? "Processing..." : "Add Card"}
                          </button>

                          <p>
                            By confirming your subscription, you allow The
                            Outdoor Inn Crowd Limited to charge your card for
                            this payment and future payments in accordance with
                            their terms. You can always cancel your
                            subscription.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {isSubmitted && isProcessing && (
                    <div className="ProcessingMessage">
                      <p>Processing...</p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="CreditCardBox">
                  <h3>Login or Sign up to book</h3>
                  <input type="number" placeholder="Phone number"></input>
                  <p>
                    We’ll call or text you to confirm your number. Standard
                    message and data rates apply. <b>Privacy Policy</b>
                  </p>
                  <button>Continue</button>

                  <div className="orCont">
                    <h5>or</h5>
                    <div className="or"></div>
                  </div>

                  <div className="otherMethods">
                    <div className="othericons">
                      <button>
                        <svg
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M24.333 12.0733C24.333 5.40546 18.9604 0 12.333 0C5.70563 0 0.333008 5.40536 0.333008 12.0733C0.333008 18.0994 4.72126 23.0943 10.458 24V15.5633H7.41113V12.0733H10.458V9.41343C10.458 6.38755 12.2496 4.71615 14.9905 4.71615C16.3035 4.71615 17.6768 4.95195 17.6768 4.95195V7.92313H16.1636C14.6728 7.92313 14.208 8.85381 14.208 9.80864V12.0733H17.5361L17.0041 15.5633H14.208V24C19.9448 23.0943 24.333 18.0995 24.333 12.0733Z"
                            fill="#1877F2"
                          />
                        </svg>
                      </button>
                      <button>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
                            fill="#FFC107"
                          />
                          <path
                            d="M3.15234 7.3455L6.43784 9.755C7.32684 7.554 9.47984 6 11.9993 6C13.5288 6 14.9203 6.577 15.9798 7.5195L18.8083 4.691C17.0223 3.0265 14.6333 2 11.9993 2C8.15834 2 4.82734 4.1685 3.15234 7.3455Z"
                            fill="#FF3D00"
                          />
                          <path
                            d="M12.0002 22C14.5832 22 16.9302 21.0115 18.7047 19.404L15.6097 16.785C14.5719 17.5742 13.3039 18.001 12.0002 18C9.39916 18 7.19066 16.3415 6.35866 14.027L3.09766 16.5395C4.75266 19.778 8.11366 22 12.0002 22Z"
                            fill="#4CAF50"
                          />
                          <path
                            d="M21.8055 10.0415H21V10H12V14H17.6515C17.2571 15.1082 16.5467 16.0766 15.608 16.7855L15.6095 16.7845L18.7045 19.4035C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
                            fill="#1976D2"
                          />
                        </svg>
                      </button>
                      <button>
                        <svg
                          width="17"
                          height="20"
                          viewBox="0 0 17 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.1832 10.5555C14.1738 8.95703 14.898 7.75234 16.3605 6.86406C15.5426 5.69219 14.3051 5.04766 12.6738 4.92344C11.1293 4.80156 9.43945 5.82344 8.8207 5.82344C8.1668 5.82344 6.67148 4.96563 5.49492 4.96563C3.0668 5.00313 0.486328 6.90156 0.486328 10.7641C0.486328 11.9055 0.694922 13.0844 1.11211 14.2984C1.66992 15.8969 3.68086 19.8133 5.77852 19.75C6.87539 19.7242 7.65117 18.9719 9.07852 18.9719C10.4637 18.9719 11.1809 19.75 12.4043 19.75C14.5207 19.7195 16.3395 16.1594 16.8691 14.5563C14.0309 13.218 14.1832 10.6375 14.1832 10.5555ZM11.7199 3.40703C12.9082 1.99609 12.8004 0.711719 12.7652 0.25C11.7152 0.310938 10.5012 0.964844 9.80976 1.76875C9.04805 2.63125 8.60039 3.69766 8.69648 4.9C9.83086 4.98672 10.8668 4.40313 11.7199 3.40703Z"
                            fill="black"
                          />
                        </svg>
                      </button>
                    </div>
                    <button className="emailcontinue">
                      <svg
                        width="22"
                        height="18"
                        viewBox="0 0 22 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.875 0.75H3.125C2.42904 0.750744 1.76179 1.02755 1.26967 1.51967C0.777545 2.01179 0.500744 2.67904 0.5 3.375V14.625C0.500744 15.321 0.777545 15.9882 1.26967 16.4803C1.76179 16.9725 2.42904 17.2493 3.125 17.25H18.875C19.571 17.2493 20.2382 16.9725 20.7303 16.4803C21.2225 15.9882 21.4993 15.321 21.5 14.625V3.375C21.4993 2.67904 21.2225 2.01179 20.7303 1.51967C20.2382 1.02755 19.571 0.750744 18.875 0.75ZM18.2103 5.09203L11.4603 10.342C11.3287 10.4444 11.1667 10.4999 11 10.4999C10.8333 10.4999 10.6713 10.4444 10.5397 10.342L3.78969 5.09203C3.71038 5.03214 3.64377 4.95709 3.59372 4.87123C3.54367 4.78537 3.51118 4.69042 3.49815 4.5919C3.48511 4.49338 3.49179 4.39325 3.51778 4.29733C3.54378 4.20142 3.58858 4.11162 3.64958 4.03316C3.71058 3.95471 3.78656 3.88916 3.87312 3.84032C3.95967 3.79149 4.05506 3.76034 4.15376 3.74869C4.25245 3.73704 4.35248 3.74513 4.44802 3.77247C4.54357 3.79981 4.63272 3.84587 4.71031 3.90797L11 8.79984L17.2897 3.90797C17.447 3.7892 17.6447 3.73711 17.84 3.76296C18.0354 3.78881 18.2128 3.89053 18.3338 4.04612C18.4547 4.20171 18.5096 4.39866 18.4865 4.59439C18.4634 4.79011 18.3642 4.96888 18.2103 5.09203Z"
                          fill="#112211"
                        />
                      </svg>
                      Continue With Email
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div className="DetailSecondColl" data-index={gg}>
              <div className="in1">
                <div className="BuyingCard">
                  <img src={reallysmallplane}></img>
                  <div className="detal">
                    <div>
                      <h5>Economy </h5>
                      <h5 onClick={() =>{
                        setGG(true)
                      }} style={{marginLeft: 'auto', cursor: 'pointer', display: 'none'}}>X</h5>
                    </div>
                    
                    <h4>Emirates A380 Airbus</h4>
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
                  </div>
                </div>
                <div className="detaltext">
                  <p>
                    Your booking is protected by <b>golobe</b>
                  </p>
                </div>
                <div className="detalprices">
                  <h4>Price Details</h4>
                  <div className="price1">
                    <h5>Base Fare</h5>{" "}
                    <h4>
                      <b>$400</b>
                    </h4>
                  </div>
                  <div className="price1">
                    <h5>Discount</h5>{" "}
                    <h4>
                      <b>$400</b>
                    </h4>
                  </div>
                  <div className="price1">
                    <h5>Taxes</h5>{" "}
                    <h4>
                      <b>$400</b>
                    </h4>
                  </div>
                  <div className="price1">
                    <h5>Service fee</h5>{" "}
                    <h4>
                      <b>$400</b>
                    </h4>
                  </div>

                  <div className="finalprice">
                    <h5>Total</h5>{" "}
                    <h4>
                      <b>$400</b>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h6 onClick={()=>{setGG(false)}} data-index={gg} className="wowzer" style={{position: 'fixed', top: '50%', left: '2%', display: 'none'}}>Return</h6>
        </div>
      </div>
    </>
  );
}

export default BookingDetail;
