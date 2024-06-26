import React from "react";
import "./index.css"; // Import the CSS file
import service1 from "../../assets/service1.png";
import service2 from "../../assets/service2.png";
import service3 from "../../assets/service3.png";
import service4 from "../../assets/service4.png";

const serviceImages = [service1, service2, service3, service4];

export default function WhyChooseUs() {
  const data = [
    {
      icon: serviceImages[0],
      title: "Get Best Prices",
      subTitle:
        "Pay through our application and save thousands and get amazing rewards.",
      alt:"Explorers Company",
    },
    {
      icon: serviceImages[1],
      title: "Covid Safe",
      subTitle:
        "We have all the curated hotels that have all the precaution for a covid safe environment.",
      alt:"Explorers Company",
    },
    {
      icon: serviceImages[2],
      title: "Flexible Payment",
      subTitle:
        " Enjoy the flexible payment through our app and get rewards on every payment.",
      alt:"Explorers Company",
    },
    {
      icon: serviceImages[3],
      title: "Find The Best Near You",
      subTitle:
        "Find the best hotels and places to visit near you in a single click.",
      alt:"Explorers Company",
    },
  ];

  return (
    <section id="services">
      <div className="why-choose-us-section">
        <h2 className="why-choose-us-heading">Why Choose Us</h2>
        <div className="service-cards">
          {data.map((service, index) => (
            <div className="service" key={index}>
              <div className="icon-container">
                <img src={service.icon} alt="Explorers Company" className="service-icon" />
              </div>
              <h3>{service.title}</h3>
              <p>{service.subTitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
