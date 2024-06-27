import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { SiAmazonpay } from "react-icons/si";
import Navbar from "../Navbar";
import Video from "../Video";
import Places from "../Places"; // Adjust the path accordingly
import OrderPopup from "../OrderPopup"; // Adjust the path accordingly
import { PopularTrips } from "../PopularTrips";
import MustVisitPlaces from "../MustVisitPlaces";
import ContactBanner from "../ContactBanner";
import MainProgram from "../MainProgram";
import ImmersiveExerience from "../ImmersiveExperience";
import VideoTour from "../VideoTour";
import ExploreAll from "../ExploreAll";
import Testimonials from "../Testimonials";
import ContactUs from "../ContactUs";
import WhyChooseUs from "../WhyChooseUs";
import Footer from "../Footer";
import ContactPopup from "../ContactPopup"; // Adjust the path accordingly
import { FaWhatsapp } from "react-icons/fa";

const HomeContainer = styled.div`
  position: relative;
`;

// Keyframe animation for icon bounce
const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

// Styled component for outer circle of WhatsappIcon
const WhatsappIconOuter = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 70px;
  height: 70px;
  background-color: green;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  animation: ${bounce} 1s ease infinite; /* Apply bounce animation */
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1); /* Scale up on hover */
  }

  /* Pause animation when contact popup is open */
  ${({ isContactPopupOpen }) =>
    isContactPopupOpen &&
    `
    animation-play-state: paused; 
  `}

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    bottom: 20px;
    right: 15px;
  }
`;





const WhatsappIconOuter2 = styled.div`
  position: fixed;
  bottom: 110px;
  right: 20px;
  width: 70px;
  height: 70px;
  background-color: #6739B7;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  animation: ${bounce} 1s ease infinite; /* Apply bounce animation */
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1); /* Scale up on hover */
  }

  /* Pause animation when contact popup is open */
  ${({ isContactPopupOpen }) =>
    isContactPopupOpen &&
    `
    animation-play-state: paused; 
  `}

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    bottom: 95px;
    right: 15px;
  }
`;











// Styled component for inner Whatsapp icon
const WhatsappIconInner = styled(FaWhatsapp)`
  font-size: 40px; /* Adjust the font size */
  color: white;
`;

const WhatsappIconInner2 = styled(SiAmazonpay)`
  font-size: 40px; /* Adjust the font size */
  color: white;
`;

const Home = () => {
  const [orderPopup, setOrderPopup] = useState(false);
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);
  const [isIconBouncing, setIsIconBouncing] = useState(true); // State to control bouncing animation


  const handleOrderPopup = (e) => {
    setPopupPosition({ x: e.clientX, y: e.clientY });
    setOrderPopup(true);
  };

  const handleClosePopup = () => {
    setOrderPopup(false);
  };

  const handleWhatsappClick = () => {
    setIsContactPopupOpen((prev) => !prev); // Toggle contact popup state
    setIsIconBouncing(false); // Stop bouncing animation
  };

  const handleCloseContactPopup = () => {
    setIsContactPopupOpen(false);
    setIsIconBouncing(true); // Resume bouncing animation
  };

  return (
    <HomeContainer>
      <Navbar />
      <Video />
      <Places handleOrderPopup={handleOrderPopup} />
      <PopularTrips />
      <MustVisitPlaces />
      <ContactBanner />
      <MainProgram />
      <ImmersiveExerience />
      <VideoTour />
      <ExploreAll />
      <Testimonials />
      <ContactUs />
      <WhyChooseUs />
      <Footer />
      {/* Add OrderPopup component here */}
      {orderPopup && (
        <OrderPopup
          orderPopup={orderPopup}
          setOrderPopup={handleClosePopup}
          position={{ top: popupPosition.y, left: popupPosition.x }}
        />
      )}
      <WhatsappIconOuter
        onClick={handleWhatsappClick}
        isContactPopupOpen={isContactPopupOpen}
        style={{ animationPlayState: isIconBouncing ? "running" : "paused" }}
      >
        <WhatsappIconInner />
      </WhatsappIconOuter>




     <a href="https://razorpay.me/@explorerscompany" target="_blank" rel="noopener noreferrer">
      <WhatsappIconOuter2
        isContactPopupOpen={isContactPopupOpen}
        style={{ animationPlayState: isIconBouncing ? "running" : "paused" }}
      >
        <WhatsappIconInner2 />
      </WhatsappIconOuter2>
      </a>
     
      {isContactPopupOpen && <ContactPopup closePopup={handleCloseContactPopup} />}
    </HomeContainer>
  );
};

export default Home;