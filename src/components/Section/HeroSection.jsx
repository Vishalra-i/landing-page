'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import CountryCodeDropdown from '../Helpers/CountryCodeDropdown';

function HeroSection() {
  const [selectedCode, setSelectedCode] = useState('+91');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleCodeChange = (event) => {
    setSelectedCode(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Phone Number: ${selectedCode} ${phoneNumber}`);
  };

  return (
    <section id="services">
      <div className="flex flex-col md:flex-row gap-0 md:gap-10 items-center max-h-fit md:overflow-hidden md:max-h-screen px-5 bg-[#F2F4F7]">
        <div className="w-full md:w-1/2 px-5 animate-slideInFromLeft leading-7 mt-32 md:mt-16">
          <h1 className="text-4xl text-yellow-400 font-bold">User-Centric Excellence<span className="text-black">: Our</span></h1>
          <h1 className="text-4xl font-bold">App Development Services</h1>
          <h1 className="text-4xl font-bold">Tackles Your Pain Points</h1>
          <h3 className="py-3 font-[600] leading-6 text-gray-700">
            Experience a Seamless Digital Journey with <span className="text-green-500">Desun</span> - Where Every Line <br />
            of Code Resolves Your Challenges and <span className="text-yellow-400">Elevates Your App Experience</span> <br />
            to Unparalleled Heights.
          </h3>
          {/* Form container */}
          <div className="container p-7 w-full md:w-fit md:h-fit border-gray-400 shadow-lg shadow-gray-300 rounded-md bg-white">
            <h4 className="font-bold">Leave your contacts and we will call you back <br /> within 30 minutes</h4>
            <form onSubmit={handleSubmit} className="flex flex-col md:grid grid-flow-col grid-rows-2 gap-4 text-sm">
              <span>
                <label htmlFor="name" className="text-[#667085]">Full Name</label>
                <input type="text" id="name" className="outline-none border-b-2 p-0 border-0 border-gray-300 w-full" />
              </span>
              <span>
                <label htmlFor="bus" className="text-[#667085]">Business Name</label>
                <input type="text" id="bus" className="outline-none border-b-2 p-0 border-0 border-gray-300 w-full" />
              </span>
              <span className="w-full">
                <label htmlFor="number" className="text-[#667085]">Phone Number</label>
                <div className="flex items-center ">
                  <CountryCodeDropdown selectedCode={selectedCode} onChange={handleCodeChange} />
                  <span className="ml-2 border-b-2 border-gray-300">{selectedCode}</span>
                  <input
                    type="tel"
                    id="number"
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                    className="outline-none border-b-2 border-gray-300 p-0 w-full "
                  />
                </div>
              </span>
              <span>
                <label htmlFor="email" className="text-[#667085]">Business Email</label>
                <input type="email" id="email" className="outline-none border-b-2 p-0 border-0 border-gray-300 w-full" />
              </span>
              <button className="bg-green-400 px-2 py-5 text-white rounded-md row-span-2 self-center">Get Consultation</button>
            </form>
          </div>
        </div>
        <div className="w-full md:w-1/2 max-sm:animate-slideInFromLeft  overflow-hidden md:overflow-visible  md:animate-slideInFromTop ">
          <span className="flex gap-5 py-10 max-sm:w-screen h-[80%] md:mt-72 -rotate-12">
            <div>
              <Image width={290} height={672} src="/assets/Dashboar.png" alt="app" />
              <Image width={290} height={672} src="/assets/raise.png" alt="app" />
            </div>
            <div>
              <Image width={290} height={672} src="/assets/category.png" alt="app" />
              <Image width={290} height={672} src="/assets/bills.png" alt="app" />
            </div>
          </span>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
