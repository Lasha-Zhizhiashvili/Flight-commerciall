import "./login.css";
import logo from "../svgs/logo.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import limg1 from '../img/limg1.jpg'
import limg2 from '../img/limg2.jpg'

function LogIn() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      id: 1,
      image:
        limg1,
    },
    {
      id: 2,
      image:
        limg2,
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

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  const inputType = isPasswordVisible ? "text" : "password";

  const storedCredit = JSON.parse(localStorage.getItem("CreditCard"));
  const storedUser = JSON.parse(localStorage.getItem("UserData"));

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = {};

    if (email != storedUser.email) {
      validationErrors.email = "please input the correct email";
    }

    if (password != storedUser.password) {
      validationErrors.password = "please input the correct password";
    }

    setErrors(validationErrors);
    setIsSubmitted(true);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitted(true);
      return;
    } else {
      setIsProcessing(true);
      setTimeout(() => {
        storedCredit.LoggedIn = true
        setIsProcessing(false);
        window.location.href = "/Flight-commercial";
        localStorage.setItem("CreditCard", JSON.stringify(storedCredit));
      }, 2000);
    }
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <div className="container">
        <div className="row">
          <div className="LoginBox">
            <div className="LoginColl">
              <div className="LoginRead">
                <Link to="/Flight-commercial">
                  <img className="jkl" src={logo}></img>
                </Link>
                
                <h1>Login</h1>
                <p className="crock">Login to access your Golobe account</p>
                <div
                  className={`maininputs ${
                    errors.email && isSubmitted ? "error shake" : ""
                  }`}
                >
                  <input
                    type="email"
                    id="email"
                    placeholder="john.doe@gmail.com"
                    onChange={handleEmailChange}
                  ></input>
                  <span>Email</span>
                  {errors.email && isSubmitted && (
                    <p className="error-message">{errors.email}</p>
                  )}
                </div>

                <div className={`maininputs ${
                    errors.password && isSubmitted ? "error shake" : ""
                  }`}>
                  <input
                    type={inputType}
                    id="password"
                    placeholder="password"
                    onChange={handlePasswordChange}
                  ></input>
                  <span>Password</span>
                  {errors.password && isSubmitted && (
                    <p className="error-message">{errors.password}</p>
                  )}
                  <svg
                    onClick={togglePasswordVisibility}
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    stroke="#000000"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-eye"
                    style={{ cursor: "pointer" }}
                  >
                    <path
                      d={
                        isPasswordVisible
                          ? "M3.6,9A9.913,9.913,0,0,1,12,6.1,9.913,9.913,0,0,1,20.4,9a4.756,4.756,0,0,1,.69,2.49,4.758,4.758,0,0,1-.69,2.49A9.913,9.913,0,0,1,12,17.9a9.913,9.913,0,0,1-7.8-2.8,4.758,4.758,0,0,1-.69-2.49A4.756,4.756,0,0,1,3.6,9Z"
                          : "M12,4.5A9.9,9.9,0,0,0,2.1,9a9.9,9.9,0,0,0,9.9,9,9.9,9.9,0,0,0,9.9-9A9.9,9.9,0,0,0,12,4.5Zm0,14.25A4.35,4.35,0,0,1,7.65,9,4.35,4.35,0,0,1,12,4.65,4.35,4.35,0,0,1,16.35,9,4.35,4.35,0,0,1,12,18.75Z"
                      }
                    />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>

                <div className="secondinput">
                  <label>
                    <input type="checkbox"></input>

                    <h6>Remember me</h6>
                  </label>

                  <span>Forgot Password</span>
                </div>
                <div className="loginbutton">
                  <button type="submit">
                  <b>{isProcessing ? "Processing..." : "Log in"}</b>
                  </button>
                </div>

                <div className="signupbutton">
                  <h6>
                    Don't have an account?{" "}
                    <Link to="/Flight-commercial/SignUp">
                      <b>Sign up</b>
                    </Link>
                  </h6>
                </div>

                <div className="orCont">
                  <div className="Toom">
                    <h6>or Login with</h6>
                  </div>

                  <div className="or"></div>
                </div>

                <div className="CreditCardBox">
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
                  </div>
                </div>
              </div>
            </div>

            <div className="LoginColl1">
              <div className="LoginRead1">
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
          </div>
        </div>
      </div>
      </form>
    </>
  );
}

export default LogIn;
