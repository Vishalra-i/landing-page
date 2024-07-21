import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-8 rounded-xl w-full">
      {/* Logo Section */}
      <div className="flex flex-col items-center justify-center w-full text-white ">
        <Image src="/assets/darklogo.png" alt="Company Logo" width={300} height={200} />
      </div>

      <div className="container  flex gap-5 flex-col md:flex-row justify-between items-center my-5">
        {/* Contact Info */}
         <div >
            <span className='text-gray-400 text-sm flex items-center gap-2'>
                <Image src={"/assets/dphone.png"} width={20} height={30} alt='phone'/> <span>Contact nums</span>
            </span>
            <p className='font-bold'>+91 000000000</p>
         </div>

         <div >
            <span className='text-gray-400 text-sm flex items-center gap-2'>
            <Image src={"/assets/email.png"} width={20} height={30} alt='mail'/>
            <span>Gmail</span>
            </span>
            <p className='font-bold'>demo@gmail.com</p>
         </div>

         <div >
            <span className='text-gray-400  text-sm flex items-center gap-2'>
                <Image src={"/assets/location.png"} width={20} height={30} alt='location'/>
                <span>Adress</span>
            </span>
            <p className='font-bold'>Mumbai,India</p>
         </div>

         <div >
            <span className='text-gray-400 text-sm flex items-center gap-2'>
                <Image src={"/assets/labels.png"} width={20} height={30} alt='location'/>
                 <span>Leave a request</span>
            </span>
            <p className='font-bold'>Leave a request</p>
         </div>
      </div>
        
        {/* Slogan */}
        <div className="text-center mt-10 ">
          <p className="text-gray-400">We work throughout the world</p>
        </div>
    </footer>
  );
};

export default Footer;
