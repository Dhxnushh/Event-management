import image1 from './assets/image1.png'
import image2 from './assets/image2.png'
import image3 from './assets/image3.png'
import { Link } from 'react-router-dom'
import React, { useState } from 'react';

export default function Banner() {
  const [isOpen, setIsOpen] = useState(false); // State for popup visibility
  const [selectedImage, setSelectedImage] = useState(null); // State to store selected image

  const eventData = [
    { image: image1, details: 'Details about image 1' }, // Replace with your event data
    { image: image2, details: 'Details about image 2' },
    { image: image3, details: 'Details about image 3' },
    // ... add more event objects
  ];

  const handleClick = (image) => {
    setSelectedImage(image); // Store clicked image data
    setIsOpen(true); // Open the popup
  };

  const handleClose = () => {
    setIsOpen(false); // Close the popup
  };

  return (
    <div className="flex justify-center align-middle">
      <div className="w-[93vw] bg-[rgb(1_1_1_0.5)] h-[470px] rounded-[20px] align-middle p-3">
        <h1 className="font-bold text-center text-2xl">Ongoing events:</h1>
        <br />
        <div id="display" className="flex flex-row overflow-x-scroll">
          {eventData.map((event, index) => (
            <li
              key={index}
              className="shrink-0 list-none p-3 cursor-pointer"
              onClick={() => handleClick(event)}
            >
              <img
                className="w-[250px] h-[350px] rounded-xl shadow-[3px_3px_5px]"
                src={event.image}
                alt={`Event ${index + 1}`}
              />
            </li>
          ))}
        </div>
      </div>

      {isOpen && ( // Conditionally render popup only when open
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-4 shadow-md">
          <img src={selectedImage?.image} alt="Selected Event" className="w-full h-auto" />
          <p className="mt-4 text-sm">{selectedImage?.details}</p>
          <button onClick={handleClose} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Close
          </button>
        </div>
      )}
    </div>
  );
}
