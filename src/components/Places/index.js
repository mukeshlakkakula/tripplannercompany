import React from "react";
import './index.css';
import PlaceCard from "./PlaceCard";
import OrderPopup from "../OrderPopup"; // Adjust the path accordingly
import Img1 from "../../assets/places/boat.jpg";
import Img2 from "../../assets/places/HariharFort.jpg";
import Img3 from "../../assets/places/water.jpg";
import Img4 from "../../assets/places/place4.jpg";
import Img5 from "../../assets/places/place5.jpg";
import Img6 from "../../assets/places/place6.jpg";
import Img9 from "../../assets/places/place9.jpg";

const Places = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);
  const [popupPosition, setPopupPosition] = React.useState({ x: 0, y: 0 });
  const [selectedTitle, setSelectedTitle] = React.useState(""); // State to hold selected title

  const handleOrderPopup = (e, title) => {
    setSelectedTitle(title); // Set selectedTitle when triggering order popup
    setPopupPosition({ x: e.clientX, y: e.clientY });
    setOrderPopup(true);
  };

  const handleClosePopup = () => {
    setOrderPopup(false);
  };

  return (
    <div>
      <section data-aos="fade-up" className="container" id="recommend">
        <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
          Best Places to Visit in India
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <PlaceCard
            handleOrderPopup={handleOrderPopup}
            img={Img1}
            title="Explore Kerala"
            alt="Explorers Company"
            location="Kerala, India"
            description="Explore the serene backwaters and lush greenery of Kerala on a traditional boat ride."
            price="3-5"
            type="Nature and Culture"
          />
          <PlaceCard
            handleOrderPopup={handleOrderPopup}
            img={Img2}
            title="Harihar Fort"
            alt="Explorers Company"
            location="Maharashtra, India "
            description="Remains of a venerable fortress atop a hill, reachable via a steep trek & stone-cut stairs."
            price="2-4"
            type="Cultural Heritage"
          />
          <PlaceCard
            handleOrderPopup={handleOrderPopup}
            img={Img3}
            title="Meghalaya"
            alt="Explorers Company"
            location="Meghalaya, India"
            description="Meghalaya offers a blend of natural beauty and cultural richness, making it a perfect destination for nature lovers and adventure seekers."
            price="4-7"
            type="Beach Adventure"
          />
          <PlaceCard
            handleOrderPopup={handleOrderPopup}
            img={Img4}
            title="Gokarna Dandeli"
            alt="Explorers Company"
            location="Gokarna Dandeli, India"
            description="Gokarna is a small temple town on the western coast of India, located in the state of Karnataka. It is known for its serene beaches."
            price="2-5"
            type="Beach Party"
          />
          <PlaceCard
            handleOrderPopup={handleOrderPopup}
            img={Img5}
            title="Coorg Chikmagalur"
            alt="Explorers Company"
            location="Coorg Chikmagalur, India"
            description="Coorg is a picturesque district in the southwestern part of Karnataka, India. Renowned for its lush coffee plantations, misty hills."
            price="3-6"
            type="Mountain Adventure"
          />
          <PlaceCard
            handleOrderPopup={handleOrderPopup}
            img={Img6}
            title="Ooty"
            alt="Explorers Company"
            location="Ooty, India"
            description="Explore the royal palaces and vibrant history of Ooty, the cold City."
            price="2-4"
            type="Cultural Heritage"
          />
          <PlaceCard
            handleOrderPopup={handleOrderPopup}
            img="https://res.cloudinary.com/djlhr4ycg/image/upload/v1718637286/OIP_2_ahhlj2.jpg"
            title="Mysore Palace"
            alt="Explorers Company"
            location="Mysore, Karnataka"
            description="Visit the grand Mysore Palace, a historical royal residence known for its architecture and cultural significance."
            price="3-5"
            type="Royal Heritage"
          />
          <PlaceCard
            handleOrderPopup={handleOrderPopup}
            img="https://res.cloudinary.com/djlhr4ycg/image/upload/v1718637287/1560622581_1560622568625_ka7joa.jpg"
            title="Kashmir"
            alt="Explorers Company"
            location="Kashmir, Himachal Pradesh"
            description="Enjoy the scenic beauty and colonial charm of Kashmir amidst the Himalayan foothills."
            price="4-7"
            type="Hill Station Retreat"
          />
          <PlaceCard
            handleOrderPopup={handleOrderPopup}
            img={Img9}
            title="Kedarnath Temples"
            alt="Explorers Company"
            location="Kedarnath, Uttarakhand"
            description="It is one of the four major sites in India's Chota Char Dham pilgrimage and is renowned for the Kedarnath Temple, dedicated to Lord Shiva."
            price="3-6"
            type="Historical and Cultural"
          />
        </div>
      </section>
      {orderPopup && (
        <OrderPopup
          orderPopup={orderPopup}
          setOrderPopup={handleClosePopup}
          selectedTitle={selectedTitle} // Pass selectedTitle to OrderPopup
          position={{ top: popupPosition.y, left: popupPosition.x }}
        />
      )}
    </div>
  );
};

export default Places;