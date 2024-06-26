import React from "react";
import { IoLocationSharp } from "react-icons/io5";

const PlaceCard = ({
  img,
  title,
  location,
  description,
  price,
  type,
  handleOrderPopup,
}) => {
  const handleContactUs = (e) => {
    e.stopPropagation(); // Prevent triggering handleOrderPopup
    const message = `Hello, I am interested in ${title} . Can you provide more details?`;
    const whatsappUrl = `https://wa.me/+919032302468?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div
      className="shadow-lg transition-shadow duration-500 hover:shadow-xl bg-white dark:bg-slate-950 dark:text-white cursor-pointer transform hover:-translate-y-1 rounded-md overflow-hidden"
      onClick={(e) => handleOrderPopup(e, title)} // Pass title to handleOrderPopup
    >
      <div className="overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-[220px] object-cover transition-all duration-300 hover:scale-105"
        />
      </div>

      <div className="p-4">
        <h1 className="font-bold text-xl line-clamp-1 text-black">{title}</h1>
        <div className="flex items-center gap-2 text-black opacity-70">
          <IoLocationSharp />
          <span>{location}</span>
        </div>
        <p className="mt-2 text-black line-clamp-2">{description}</p>
        <div className="flex items-center justify-between border-t-2 border-gray-200 pt-3 mt-3">
          <div className="opacity-70 text-black">
            <p>{type}</p>
          </div>
          <div>
            <p className="text-1xl font-bold text-black">{price} Days</p>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <button
            className="contact-us-btn mr-4"
            onClick={handleContactUs}
            aria-label={`Contact us about ${title}`}
          >
            Contact Us
          </button>
          <button
            className="book-now-btn"
            onClick={(e) => handleOrderPopup(e, title)} // Pass title to handleOrderPopup
            aria-label={`Book ${title} now`}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlaceCard;
