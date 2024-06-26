import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import './index.css';
import delhi from './TripImages/Delhi.jpeg';
import hyderabad from './TripImages/Hyderabad.jpeg';
import chennai from './TripImages/chennai.jpeg';
import buddha from './TripImages/buddha.jpeg';
import ladakh from './TripImages/ladakh.jpeg';
import coast from './TripImages/coast.jpeg';
import port from './TripImages/port.jpeg';
import himalayan from './TripImages/himalayan.jpeg';
import eastern from './TripImages/eastern.jpeg';
import OrderPopup from '../OrderPopup'; // Import OrderPopup component

const duration = {
  TwoDays: [
    { img: delhi, title: '48 Hours in Delhi', alt:"Explorers Company"},
    { img: hyderabad, title: '48 Hours in Hyderabad', alt:"Explorers Company" },
    { img: chennai, title: '48 Hours in Chennai', alt:"Explorers Company" },
    { img: coast, title: 'A Trip Along the Coast', alt:"Explorers Company" },
    { img: port, title: 'A Ride to the Port', alt:"Explorers Company" },
    { img: ladakh, title: 'A Ride to Leh Ladakh', alt:"Explorers Company" },
  ],
  RoadTrips: [
    { img: coast, title: 'A Trip Along the Coast', alt:"Explorers Company" },
    { img: port, title: 'A Ride to the Port', alt:"Explorers Company" },
    { img: ladakh, title: 'A Ride to Leh Ladakh', alt:"Explorers Company" },
    { img: himalayan, title: 'Kashmir', alt:"Explorers Company" },
    { img: buddha, title: "kerala", alt:"Explorers Company" },
    { img: eastern, title: 'Eastern Vignettes', alt:"Explorers Company" },
  ],
  PanIndia: [
    { img: himalayan, title: 'Kashmir', alt:"Explorers Company" },
    { img: buddha, title: "kerala", alt:"Explorers Company" },
    { img: eastern, title: 'Eastern Vignettes', alt:"Explorers Company" },
    { img: coast, title: 'A Trip Along the Coast', alt:"Explorers Company" },
    { img: port, title: 'A Ride to the Port', alt:"Explorers Company" },
    { img: ladakh, title: 'A Ride to Leh Ladakh', alt:"Explorers Company" },
  ],
};

const tripTypes = Object.keys(duration);

export const PopularTrips = () => {
  const [currentTripType, setCurrentTripType] = useState('RoadTrips');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [orderPopup, setOrderPopup] = useState(false); // State for order popup visibility
  const [selectedTitle, setSelectedTitle] = useState(''); // State for selected trip title

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const itemsPerRow = () => {
    if (windowWidth >= 1024) {
      return 3; // Three items per row for desktop/laptop
    } else if (windowWidth >= 768) {
      return 2; // Two items per row for tablet
    } else {
      return 1; // One item per row for mobile
    }
  };

  const tripsToShow = duration[currentTripType];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % tripsToShow.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? tripsToShow.length - 1 : prevIndex - 1
    );
  };

  const buttonAnimation = useSpring({
    to: { transform: 'scale(1)' },
    from: { transform: 'scale(0.8)' },
    reset: true,
  });

  const listAnimation = useSpring({
    to: { opacity: 1, transform: 'translateY(0)' },
    from: { opacity: 0, transform: 'translateY(20px)' },
    reset: true,
  });

  const handleContactUs = (title) => {
    const message = `Hello, I am interested in ${title} ,Can you provide more details?`;
    const whatsappUrl = `https://wa.me/+919032302468?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="popular-trips">
      <h1 className="main-heading">Popular Trips</h1>
      <div className="main-container">
        <div className="main">
          <div className="btn">
            {tripTypes.map((tripType, key) => (
              <div className="btn-children" key={key}>
                <animated.button
                  style={buttonAnimation}
                  onClick={() => setCurrentTripType(tripType)}
                >
                  {tripType}
                </animated.button>
              </div>
            ))}
          </div>
          <div className="list-item-container">
            {tripsToShow.map((trip, index) => (
              <animated.div
                className="list"
                key={index}
                style={{
                  ...listAnimation,
                  display:
                    index >= currentIndex &&
                    index < currentIndex + itemsPerRow()
                      ? 'flex'
                      : 'none',
                }}
              >
                <img src={trip.img} alt={trip.title} />
                <h3>{trip.title}</h3>
                <button
                  className='contactbutton'
                  onClick={() => {
                    setSelectedTitle(trip.title);
                    setOrderPopup(true);
                  }}
                >
                  Book Now
                </button>
                <button
                  className='orderbutton'
                  onClick={() => handleContactUs(trip.title)}
                >
                  Contact Us
                </button>
              </animated.div>
            ))}
          </div>
          {tripsToShow.length > 1 && (
            <div className="slide-controls">
              <button onClick={prevSlide}>&lt;</button>
              <button onClick={nextSlide}>&gt;</button>
            </div>
          )}
        </div>
      </div>
      {/* Render OrderPopup component */}
      <OrderPopup orderPopup={orderPopup} setOrderPopup={setOrderPopup} selectedTitle={selectedTitle} />
    </div>
  );
};
