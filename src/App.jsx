import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ManyCards from "./pages/ManyCards";
import MoreFlights from "./pages/MoreFlights";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Navbar from "./components/NavbarBlack";
import FlightListing from "./pages/FlightListing";
import { useEffect, useState } from "react";
import FlightDetailPage from "./pages/FlightDetailPage";
import { useLocation } from "react-router-dom";
import BookingDetail from "./pages/BookingDetail.jsx";
import TermsAndCondition from "./pages/TermsAndCondition";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import AddPayment from "./pages/AddPayment.jsx";
import NotFound from "./pages/NotFound";
import MoreHotels from "./pages/MoreHotels";
import HotelListing from "./pages/HotelListing";
import BookingDetail1 from "./pages/BookingDetail1.jsx";
import Favorites from "./pages/Favorites";
import MyAccount from "./pages/MyAccount";
import HotelDetailPage from './pages/HotelDetailPage'

function App() {
  const [check, setcheck] = useState(true);
  const [check1, setcheck1] = useState(true);
  const [hotel, setHotel] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/Flight-commercial") {
      setcheck(false);
    } else if (location.pathname === "/Flight-commercial/MoreHotels" || location.pathname === "/Flight-commercial/MoreHotels/HotelListing" || location.pathname === "/Flight-commercial/HotelDetailPage") {
      setHotel(true);
      setcheck(true)
    } else if (
      location.pathname === "/Flight-commercial/LogIn" ||
      location.pathname === "/Flight-commercial/SignUp" ||
      location.pathname === "/Flight-commercial/SignUp/AddPayment"
    ) {
      setcheck(false);
      setcheck1(false);
    } else {
      setcheck(true);
      setcheck1(true);
      setHotel(false);
      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
    }
  }, [location.pathname]);

  const [user, setUser] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    async function wait() {
      const creditCard = await JSON.parse(localStorage.getItem("CreditCard"));
      setUser(creditCard);
    }

    wait();

    if (user?.LoggedIn != null && user.LoggedIn === true) {
      setFormSubmitted(true);
    }
  }, [user]);
  

  return (
    <>
      <Navbar check={check} hotel={hotel} />
      <Routes>
        {!formSubmitted && (
          <>
            <Route path="/Flight-commercial/SignUp" element={<SignUp />} />
            <Route path="/Flight-commercial/SignUp/AddPayment" element={<AddPayment />} />
            <Route path="/Flight-commercial/LogIn" element={<LogIn />} />
          </>
        )}
        <Route path="/Flight-commercial" element={<Home />} />
        <Route path="/Flight-commercial/ManyCards/:id" element={<ManyCards />} />
        <Route path="/Flight-commercial/Moreflights" element={<MoreFlights />} />
        <Route path="/Flight-commercial/Moreflights/FlightListing" element={<FlightListing />} />
        <Route path="/Flight-commercial/MoreHotels/HotelListing" element={<HotelListing />} />
        <Route path="/Flight-commercial/FLightDetailPage" element={<FlightDetailPage />} />
        <Route path="/Flight-commercial/HotelDetailPage" element={<HotelDetailPage />} />
        <Route path="/Flight-commercial/BookingDetail" element={<BookingDetail />} />
        <Route path="/Flight-commercial/TermsAndCondition" element={<TermsAndCondition />} />
        <Route path="/Flight-commercial/Favorites" element={<Favorites />} />

        <Route path="/Flight-commercial/MyAccount" element={<MyAccount />} />

        <Route path="/Flight-commercial/MoreHotels" element={<MoreHotels />} />
        <Route path="/Flight-commercial/BookingDetail1" element={<BookingDetail1 />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer check={check1} />
    </>
  );
}

export default App;
