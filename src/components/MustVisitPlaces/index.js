import React, { useState, useEffect } from 'react';
import './index.css'; // Import the CSS file

const datas = [
  {
    image:
      'https://www.incredibleindia.org/content/dam/incredibleindia/images/places/thrissur/thrissur-athirapally-falls-20.jpg/jcr:content/renditions/cq5dam.web.256.256.jpeg',
    alt:"Explorers Company",
  },
  {
    image:
      'https://www.incredibleindia.org/content/dam/incredibleindia/images/places/goa/goa-vagator-beach-1.jpg/jcr:content/renditions/cq5dam.web.256.256.jpeg',
    alt:"Explorers Company",
  },
  {
    image:
      'https://www.incredibleindia.org/content/dam/incredibleindia/images/places/gokarna/gokarna-maravanthe-beach-0.jpg/jcr:content/renditions/cq5dam.web.256.256.jpeg',
    alt:"Explorers Company",
  },
  {
    image:
      'https://www.incredibleindia.org/content/dam/incredibleindia/images/places/kochi/kochi-chinese-fishing-nets-1.jpg/jcr:content/renditions/cq5dam.web.256.256.jpeg',
    alt:"Explorers Company",
  },
  {
    image:
      'https://www.incredibleindia.org/content/dam/incredibleindia/images/places/bekal/bekal-mallikarjuna-temple-170.jpg/jcr:content/renditions/cq5dam.web.256.256.jpeg',
    alt:"Explorers Company",
  },
  {
    image:
      'https://res.cloudinary.com/djlhr4ycg/image/upload/v1718280135/OIP_1_h2mebm.jpg',
    alt:"Explorers Company",
  },
  {
    image:
      'https://www.incredibleindia.org/content/dam/incredibleindia/images/places/munnar/munnar-pampadum-shola-national-park-20.jpg/jcr:content/renditions/cq5dam.web.256.256.jpeg',
    alt:"Explorers Company",
  },
  {
    image:
      'https://res.cloudinary.com/djlhr4ycg/image/upload/v1718280135/shillong_kdgusq.jpg',
    alt:"Explorers Company",
  },
  {
    image:
      'https://www.incredibleindia.org/content/dam/incredibleindia/images/places/wayanad/wayanad-wayanad-wildlife-sanctuary-11.jpg/jcr:content/renditions/cq5dam.web.256.256.jpeg',
    alt:"Explorers Company",
  },
];

const text = [
  {
    title: 'Thrissur',
    para: 'Often referred to as the cultural capital of Kerala, Thrissur is a centre poi...',
    alt:"Explorers Company",
  },
  {
    title: 'Goa',
    para: "The pocket-sized paradise of Goa is a traveller's dream. Sun...",
    alt:"Explorers Company",
  },
  {
    title: 'Gokarna',
    para: 'With stunning beaches, legendary temples and offering...',
    alt:"Explorers Company",
  },
  {
    title: 'Kochi',
    para: 'A vibrant potpourri of art, culture, food, carnivals and festivals...',
    alt:"Explorers Company",
  },
  {
    title: 'Bekal',
    para: 'An emerald gem set amidst honey-hued beaches, pristine...',
    alt:"Explorers Company",
  },
  {
    title: 'Statue of unity',
    para: 'An emerald gem set amidst honey-hued beaches, pristine...',
    alt:"Explorers Company",
  },
  {
    title: 'Munnar',
    para: 'A lush carpet of rolling green, interrupted by low rises...',
    alt:"Explorers Company",
  },
  {
    title: 'Shilong',
    para: 'Colonial-era charm, a landscape of rolling green and...',
    alt:"Explorers Company",
  },
  {
    title: 'Wayanad',
    para: 'A coffer of coffee, cardamom and tea plantations, which...',
    alt:"Explorers Company",
  },
];

const MustVisitPlaces = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === datas.length - 1 ? 0 : prevIndex + 1));
    }, 3000); // Adjust slide duration as per your preference

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="MustVisitPlaces">
      <div className="MustVisitInfo">
        <h1 className="header">Must Visit Destinations</h1>
        <p className="info">
          From historical cities to natural splendors, come see the best of India
        </p>
      </div>
      <div className="slideshow-container">
        {datas.map((item, idx) => (
          <div
            key={idx}
            className={`slide ${idx === currentIndex ? 'active' : ''}`}
            style={{
              backgroundImage: `url(${item.image})`,
            }}
          >
            <div className="slide-overlay">
              <div className="slide-content">
                <h2>{text[idx].title}</h2>
                <p>{text[idx].para}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MustVisitPlaces;
