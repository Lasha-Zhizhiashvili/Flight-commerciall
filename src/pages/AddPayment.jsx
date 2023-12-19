import "./addpayment.css";
import logo from "../svgs/logo.svg";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CreditCard } from "../components/CreditCardInfo";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { parseISO } from "date-fns";

function AddPayment() {
  
  const storedUserData = JSON.parse(localStorage.getItem("UserData"));

  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      id: 1,
      image:
        "	http://localhost:3000/Flight-commercial/static/media/limg1.4832519ce59a3efc1369.jpg",
    },
    {
      id: 2,
      image:
        "http://localhost:3000/Flight-commercial/static/media/limg2.c226b9d3599396aa3843.jpg",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1561501900-3701fa6a0864?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bHV4dXJ5JTIwaG90ZWx8ZW58MHx8MHx8&w=1000&q=80",
    },
  ];

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const currentDate = new Date().toISOString().split("T")[0];

  const [creditInfo, setCreditInfo] = useState(CreditCard);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleInputChange1 = (event) => {
    const { name, value } = event.target;
    
    setCreditInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

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

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = {};

    if (creditInfo.CreditNumber.length != 19) {
      validationErrors.CreditNumber = "please input a real credit card";
    }

    if(creditInfo.ExpDate < currentDate){
      validationErrors.ExpDate = "incorrect Exp Date"
    }

    if(creditInfo.NameOnCard.length < 3){
      validationErrors.NameOnCard = "please enter another name"
    }

    setErrors(validationErrors);
    setIsSubmitted(true);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitted(true);
      return;
    } else {
      setIsProcessing(true);
      CreditCard.CreditNumber = creditInfo.CreditNumber;
      CreditCard.ExpDate = creditInfo.ExpDate;
      CreditCard.NameOnCard = creditInfo.NameOnCard;
      CreditCard.Country = creditInfo.Country;

      localStorage.setItem("CreditCard", JSON.stringify(CreditCard));

      setTimeout(() => {
        setIsProcessing(false);
        window.location.href = "/Flight-commercial";
      }, 2000);
    }
  };


  if (storedUserData.signedUp == false) {
    return <p>you are not signed in</p>;
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="row">
            <div className="SignupBox">
              <div className="SignupColl">
                <div className="SignupRead">
                  <div className="slider">
                    <div className="cards-wrapper">
                      {cards.map((card, index) => (
                        <div
                          key={card.id}
                          className={`card ${
                            currentIndex === index ? "active" : ""
                          }`}
                          style={{
                            transform: `translateX(-${currentIndex * 100}%)`,
                          }}
                        >
                          <img src={card.image} />
                        </div>
                      ))}
                    </div>
                    <div className="dots-wrapper">
                      {cards.map((card, index) => (
                        <div
                          key={card.id}
                          className={`dot ${
                            currentIndex === index ? "active" : ""
                          }`}
                          onClick={() => handleDotClick(index)}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="SignupColl1">
                <div className="SignupRead1 addPaymentRead1">
                  <Link to="/Flight-commercial">
                  <img className="jkl" src={logo}></img>
                  </Link>
                  
                  <Link to="/Flight-commercial/SignUp">
                    <h5>
                      <svg
                        width="9"
                        height="16"
                        viewBox="0 0 9 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.75 14.75L1 8L7.75 1.25"
                          stroke="#112211"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      Back{" "}
                    </h5>
                  </Link>

                  <h1>Add a payment method</h1>
                  <p className="zxc">
                    Let’s get you all st up so you can access your personal
                    account.
                  </p>

                  <div className="payInputsWrap">
                    <div
                      className={`payInputs ${
                        errors.CreditNumber && isSubmitted ? "error shake" : ""
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
                        <p className="error-message">{errors.CreditNumber}</p>
                      )}
                    </div>

                    <div
                      className={`payInputs smallerones jit ${
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
                      <span>Exp. Date</span>

                      {errors.ExpDate && isSubmitted && (
                        <p className="error-message">{errors.ExpDate}</p>
                      )}
                    </div>
                    
                    <div className="payInputs smallerones">
                      <input type="text" defaultValue="123" />
                      <span>CVC</span>
                    </div>

                    <div className={`payInputs ${
                        errors.ExpDate && isSubmitted ? "error shake" : ""
                      }`}>
                      <input
                        type="text"
                        placeholder={storedUserData.firstName}
                        name="NameOnCard"
                        value={creditInfo.NameOnCard}
                        onChange={handleInputChange}
                      />
                      <span>Name on Card</span>

                      {errors.NameOnCard && isSubmitted && (
                        <p className="error-message">{errors.NameOnCard}</p>
                      )}
                    </div>

                    <div className="payInputs">
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
                    <h6>Securely save my information for 1-click checkout</h6>
                  </div>
                  <div className="PayBut">
                    <button type="submit">{isProcessing ? "Processing..." : "Add Payment"}</button>

                    <p>
                      By confirming your subscription, you allow The Outdoor Inn
                      Crowd Limited to charge your card for this payment and
                      future payments in accordance with their terms. You can
                      always cancel your subscription.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default AddPayment;
