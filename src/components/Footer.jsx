import logo from "../svgs/logo1.svg";
import facebook from "../svgs/facebook.svg";
import twitter from "../svgs/twitter.svg";
import youtube from "../svgs/youtube.svg";
import instagram from "../svgs/instagram.svg";
import "../components/footer.css";
import mailbox from "../svgs/mailbox.svg";

function Footer({check}) {
  return (
    <>
      <footer data-check-if-active={`${check}`}>
        <div className="container">
          <div className="row">
            <div className="footer-box">
              <div className="letter-box">
                <div className="letter-coll">
                  <div className="letter-read">
                    <h1>
                      Subscribe Newsletter
                    </h1>
                    <h4 style={{ marginTop: "24px" }}>The travel</h4>
                    <p>
                      Get inspired! Receive travel discounts, tips and behind
                      the scenes stories.
                    </p>
                    <div style={{ display: "flex", }}>
                      <input
                        type="email"
                        placeholder="Your email address"
                      ></input>
                      <button> Subscribe </button>
                    </div>
                  </div>
                </div>

                <div className="letter-coll">
                  <div className="letter-read1">
                    <img src={mailbox}></img>
                  </div>
                </div>
              </div>

              <div className="footer-coll">
                <div className="footer-read">
                  <img src={logo}></img>
                  <div>
                    <img style={{ marginLeft: "0" }} src={facebook}></img>
                    <img src={twitter}></img>
                    <img src={youtube}></img>
                    <img src={instagram}></img>
                  </div>
                </div>
              </div>

              <div className="footer-coll1">
                <div className="footer-read1">
                  <ul>
                    <h5>Our Destinations</h5>

                    <li>Canada</li>
                    <li>Alaksa</li>
                    <li>France</li>
                    <li>Iceland</li>
                  </ul>

                  <ul>
                    <h5>Our Activities</h5>

                    <li>Northern Lights</li>
                    <li>Cruising & sailing</li>
                    <li>Multi-activities</li>
                    <li>Kayaing</li>
                  </ul>

                  <ul>
                    <h5>Travel Blogs</h5>

                    <li>Bali Travel Guide</li>
                    <li>Sri Lanks Travel Guide</li>
                    <li>Peru Travel Guide</li>
                    <li>Bali Travel Guide</li>
                  </ul>

                  <ul>
                    <h5>About Us</h5>

                    <li>Our Story</li>
                    <li>Work with us</li>
                  </ul>

                  <ul>
                    <h5>Contact Us</h5>

                    <li>Our Story</li>
                    <li>Work with us</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
