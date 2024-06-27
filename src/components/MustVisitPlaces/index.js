import React, { useState, useEffect } from 'react';
import './index.css'; // Import the CSS file

const datas = [
  {
    image:
      'https://as1.ftcdn.net/v2/jpg/05/64/41/14/1000_F_564411470_6ObwpdJJASXFYOqgkCGCjesVMZjtVjgw.jpg',
    alt:"Explorers Company",
  },
  {
    image:
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt:"Explorers Company",
  },
  {
    image:
      'https://as1.ftcdn.net/v2/jpg/01/13/13/84/1000_F_113138497_gjD74fl7kKnFVCl3WEpoUp1hlUvEwIFS.jpg',
    alt:"Explorers Company",
  },
  {
    image:
      'https://images.unsplash.com/photo-1605955794720-651b9ae7f5e7?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt:"Explorers Company",
  },
  {
    image:
      'https://www.holidify.com/images/bgImages/BEKAL.jpg',
    alt:"Explorers Company",
  },
  {
    image:
      'https://www.holidify.com/images/cmsuploads/compressed/shutterstock_1317845540_20191031110021_20191031110103.png',
    alt:"Explorers Company",
  },
  {
    image:
      'https://plus.unsplash.com/premium_photo-1697730314165-2cd71dc3a6a4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt:"Explorers Company",
  },
  {
    image:
      'https://images.unsplash.com/photo-1603010288144-7735dd294baf?q=80&w=2066&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt:"Explorers Company",
  },
  {
    image:
      'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
