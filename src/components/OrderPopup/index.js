import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import './index.css';

const OrderPopup = ({ orderPopup, setOrderPopup, selectedTitle }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleContactUs = () => {
    const message = `Hello,I am interested in ${selectedTitle} . Here are my details:\n\nName: ${name}\nEmail: ${email}\nPhone Number: ${phoneNumber}\nCan you provide more details?`;
    const whatsappUrl = `https://wa.me/+919032302468?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const isFormValid = name && email && phoneNumber;

  return (
    <>
      {orderPopup && (
        <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[300px]">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-xl font-semibold text-black dark:text-white">
                  Book Your Trip
                </h1>
              </div>
              <div>
                <IoCloseOutline
                  className="text-2xl cursor-pointer text-black font-bold hover:text-black"
                  onClick={() => setOrderPopup(false)}
                />
              </div>
            </div>
            {/* Body */}
            <div className="mt-4">
              <p className="mb-4 text-1xl text-black dark:text-white">
                Selected Trip : <span className="font-bold">{selectedTitle}</span>
              </p>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                autoComplete="off"
                className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4 text-black dark:text-white"
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="off"
                className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4 text-black dark:text-white"
              />
              <input
                type="number"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
                autoComplete="off"
                className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4 text-black dark:text-white"
              />
              <div className="flex justify-center">
                <button
                  className={`bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-black py-1 px-4 rounded-full ${isFormValid ? '' : 'opacity-50 cursor-not-allowed'}`}
                  onClick={handleContactUs}
                  disabled={!isFormValid}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderPopup;
