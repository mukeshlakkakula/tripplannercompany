import React from "react";
import lectureIcon from "../../assets/places/lecture.png";
import forumIcon from "../../assets/places/forum.png";
import workshopIcon from "../../assets/places/workshop.png";
import igniteIcon from "../../assets/places/ignite.png";
import "./index.css"; // Import the external CSS file

const MainProgram = () => {
  return (
    <section id="program" className="main-program-section">
      <div className="container1">
        <h2 className="sub-title">Explorers Main Program</h2>
        <div className="program-container">
          <div className="program">
            <img
              src={lectureIcon}
              alt="Explorers Company"
              className="program-image"
            />
            <h4 className="program-title">Lecture</h4>
            <p className="program-description">
              You are going to fall in love with nature, enjoy the flexibility
              of a private vehicle.
            </p>
          </div>
          <div className="program">
            <img src={forumIcon} alt="Explorers Company" className="program-image" />
            <h4 className="program-title">Meet Nature</h4>
            <p className="program-description">
              Come explore the Pacific Coast of California with us, or join one
              of our multi-day trips.
            </p>
          </div>
          <div className="program">
            <img
              src={workshopIcon}
              alt="Explorers Company"
              className="program-image"
            />
            <h4 className="program-title">Find your Way</h4>
            <p className="program-description">
              We will help you save a heap of time and money by creating your
              personalized travel itinerary.
            </p>
          </div>
          <div className="program">
            <img src={igniteIcon} alt="Explorers Company" className="program-image" />
            <h4 className="program-title">Explore the World</h4>
            <p className="program-description">
              From big wows to hidden gems, our tours leave you feeling that
              you've really explored.
            </p>
          </div>
        </div>
        <a href="https://tripplannercompany.vercel.app/#recommend">
          <span className="about-btn">Discover Our Tours</span>
        </a>
      </div>
    </section>
  );
};

export default MainProgram;