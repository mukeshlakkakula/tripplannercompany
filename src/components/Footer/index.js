import React from "react";
import "./index.css"; // Ensure you have the CSS file updated
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaMeetup } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import { SiRazorpay } from "react-icons/si";
import { FaPaypal } from "react-icons/fa";
import { FaAmazonPay } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="top-section">
          <div className="socials">
            <h1 className="mainheading">Leading the Way in Travel Adventures</h1>
            <div>
              <a
                href="https://www.facebook.com/ExplorersCompanyHyd"
                target="_blank"
                rel="noopener noreferrer"
                alt="Explorers Company"
              >
                < FaFacebookSquare style={{ width: "100%" }} />
              </a>
              <a
                href="https://www.instagram.com/explorers_company/"
                target="_blank"
                rel="noopener noreferrer"
                alt="Explorers Company"
              >
                <FaInstagram />
              </a>
              <a
                href="https://x.com/twitter.com/explorerspvtltd"
                target="_blank"
                rel="noopener noreferrer"
                alt="Explorers Company"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.meetup.com/explorers_company/events/"
                target="_blank"
                rel="noopener noreferrer"
                alt="Explorers Company"
              >
                <FaMeetup />
              </a>
              <a
                href="https://www.linkedin.com/company/explorers-company/mycompany/"
                target="_blank"
                rel="noopener noreferrer"
                alt="Explorers Company"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
          <div className="newsletter">
            <h3>Join Our Newsletter</h3>
            <div className="newsletter-input">
              <input type="email" placeholder="Enter your e-mail" />
              <button type="submit" style={{ color: "white" }}>
                <CiSearch />
              </button>
            </div>
            <div id="popup" className="popup"></div>
          </div>
        </div>
        <hr />
        <div className="middle-section">
          <div className="company-info">
            <img src="https://res.cloudinary.com/djlhr4ycg/image/upload/v1719388863/final2_xoh0sj.png" alt="Explorers Company" />
            <p>
              At Explorers Company Private Limited, we are dedicated to providing exceptional travel
              experiences. From adventure tours to luxury getaways, we ensure
              every journey is memorable and tailored to your preferences.
            </p>
          </div>
          <div className="contact">
            <h2 className="mainheading-text">Contact</h2>
            <a href="tel:+919533037680">+919533037680</a>
            <a href="mailto:sales@explorerscompany.in">sales@explorerscompany.in</a>
            <a href="mailto:hr@explorerscompany.in">hr@explorerscompany.in</a>
          </div>
          <div className="company">
            <h2 className="mainheading-text">Company</h2>
            <a href="https://www.instagram.com/explorers_company/">About Us</a>
            <a href="https://linktr.ee/explorers_company?fbclid=PAZXh0bgNhZW0CMTEAAaYTPsRrLLYP0mcCa23pQF4GOMkn0MAi8q0_jo6pbLEzQFV5mgbASKPZlgk_aem_mIXomxfEUojYN19uZ9kdxA">Features</a>
            <a href="mailto:hr@explorerscompany.in">Careers</a>
          </div>
          <div className="resource">
            <h2 className="mainheading-text">Resources</h2>
            <a href="https://www.timebulletin.com/journey-beyond-boundaries-redefining-travel-experiences-by-achyuthanand-reddy-ceo-explorers-company/">Press Info</a>
            <a href="https://www.instagram.com/explorers_company/">Customers</a>
            <a href="https://g.page/r/CbtnbhBnx1cREAI/review">Reviews</a>
          </div>
        </div>
        <hr />
        <div className="bottom-section">
          <p>@2024 Explorers Company | All Rights Reserved</p>
          <div className="payment-methods" style={{ gap: "10px" }}>
            <p>We Accept Payment:</p>
            <SiRazorpay />
            <FaPaypal />
            <FaAmazonPay />
          </div>
        </div>
        <br />
      </div>
    </footer>
  );
};

export default Footer;
