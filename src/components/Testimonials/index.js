import React from "react";
import Slider from "react-slick";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonialData = [
  {
    id: 1,
    name: "Samuel",
    text: "Explorers Company provided an unforgettable travel experience. The seamless booking process and exceptional customer service made our vacation truly special.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "John Doe",
    text: "From start to finish, Explorers Company exceeded our expectations.Their attention to detail and personalized travel plans made our journey enjoyable.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Smith",
    text: "Thanks to Explorers Company, we had the adventure of a lifetime. The curated itineraries and insider tips ensured we made the most of every moment.",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
  <section id="testimonials">
    <div className="testimonials-section">
      <div className="container">
        <div className="header-section">
          <p className="subheading">Testimonial</p>
          <h1 className="heading">What Our Clients Say</h1>
          <p className="description">
            Discover why our clients love traveling with Explorers Company Private Limited. We provide exceptional travel experiences tailored to your desires. Let us help you create unforgettable memories.
          </p>
        </div>
        <div className="slider-section">
          <Slider {...settings}>
            {testimonialData.map(({ id, name, text, img }) => (
              <div key={id} className="testimonial-card">
                <div className="card-content">
                  <img src={img} alt={name} className="testimonial-img" />
                  <h2 className="testimonial-name">{name}</h2>
                  <p className="testimonial-text">{text}</p>
                  <p className="quote-mark">,,</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Testimonials;