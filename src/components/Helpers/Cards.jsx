import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard } from '@fortawesome/free-solid-svg-icons'; // Import the specific icon you need

const Card = ({ number, title, description, icon }) => {
  return (
    <div className="card relative bg-white shadow-md rounded-md ">
      <div className={`absolute top-0 right-0 font-bold text-gray-500 opacity-10 text-9xl`}>
        {number}
      </div>
      <div className="flex flex-col gap-5">
        <div className=" flex  items-center gap-4">
          <FontAwesomeIcon icon={icon} size="2xl"  className='text-green-400'/>
          <h3 className="font-bold text-2xl">{title}</h3>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Card;
