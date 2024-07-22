'use client'
import React, { useState } from 'react'
import CountryCodeDropdown from '../Helpers/CountryCodeDropdown'

function Contact() {
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
    <section id="contacts" className='w-full px-10 py-16 bg-gradient-to-l to-yellow-400  via-orange-300 from-green-600 text-white'>
        <div className="flex flex-col md:flex-row gap-10 md:gap-2 items-center  w-full">
          <div className="flex flex-col gap-2 w-full md:w-1/2 px-10 justify-center">
                <h3 className="text-4xl font-bold">Let's discuss <br /> Your project</h3>
                <p className="text-base">Let's figure out how to create an effective application,<br />
                its cost and terms of its development</p>
          </div>

          <div className="w-full md:w-1/2">
          <div className="container p-7 w-full h-full md:w-fit md:h-fit border-gray-400 shadow-lg shadow-gray-300 rounded-md bg-white">
            <h4 className="font-bold">Leave your contacts and we will call you back <br /> within 30 minutes</h4>
            <form onSubmit={handleSubmit} >
            <div className="flex flex-col md:grid grid-flow-col grid-rows-2 gap-4 text-sm">
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
              </div>
              <div className="py-8 w-full">
                 <button className="bg-yellow-400 p-3 text-white rounded-md float-right   self-center">Discuss the project</button>
              </div>
            </form>
          </div>
          </div>
        </div>
    </section> 
  )
}

export default Contact

