import React from "react";
import { FaWhatsapp, FaInstagram, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "./index.css"; // Import your CSS file

function ContactPopup({ closePopup }) {
  const message = "Hello"; // Define your pre-defined message here

  const openWhatsappChat = () => {
    const whatsappUrl = `https://wa.me/+919032302468?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="ContactPopupContainer">
      <div className="BackgroundOverlay" onClick={closePopup} />
      <div className="PopupContainer">
        <div className="PopupHeader">
          <h3 style={{ margin: 0, fontSize: "25px" }}>Contact Us</h3>
          <button className="CloseButton" onClick={closePopup}>
            &times;
          </button>
        </div>
        <div className="ContactList">
          <a
            className="ContactItem"
            href="https://wa.me/+919032302468"
            onClick={openWhatsappChat}
            alt="Explorers Company"
          >
            <FaWhatsapp /> WhatsApp
          </a>
          <a
            className="ContactItem"
            href="https://www.instagram.com/explorers_company/"
            target="_blank"
            rel="noopener noreferrer"
            alt="Explorers Company"
          >
            <FaInstagram /> Instagram
          </a>
          <a className="ContactItem" href="tel:+918645663580" alt="Explorers Company">
            <FaPhoneAlt /> Call Now
          </a>
          <a className="ContactItem" href="tel:+918645663580" alt="Explorers Company">
            <FaEnvelope /> Request Callback
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactPopup;