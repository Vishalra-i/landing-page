'use client'
import React, { useState } from 'react';
import Logo from './Logo';
import Link from 'next/link';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='flex flex-col md:flex-row justify-between items-center bg-white shadow-md shadow-gray-200 z-50 px-8 fixed top-5 border border-gray-100  w-full  max-w-screen-xl mx-auto rounded-md h-24'>
      {/* Logo and Menu Items */}
      <div className='flex items-center justify-between w-full md:w-auto'>
        <Logo />
        <button
          className='md:hidden text-gray-500 focus:outline-none'
          onClick={toggleMenu}
        >
          <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7' />
          </svg>
        </button>
      </div>

      {/* Menu items for desktop */}
      <div className={`md:flex md:items-center md:gap-4 ${isMenuOpen ? 'block' : 'hidden'} absolute md:static top-full left-0 w-full bg-white md:bg-transparent md:shadow-none shadow-lg md:shadow-none rounded-md md:rounded-none z-10`}>
        <div className='md:flex items-center gap-4 flex-col md:flex-row'>
          <Link href="/services">
            <p className='font-protest text-[#101828] hover:bg-gray-200 rounded-md p-2 font-semibold text-[14px]'>Services</p>
          </Link>
          <Link href="/media">
            <p className='font-protest text-[#101828] hover:bg-gray-200 rounded-md p-2 font-semibold text-[14px]'>Media</p>
          </Link>
          <Link href="/cases">
            <p className='font-protest text-[#101828] hover:bg-gray-200 rounded-md p-2 font-semibold text-[14px]'>Cases</p>
          </Link>
          <Link href="/faq">
            <p className='font-protest text-[#101828] hover:bg-gray-200 rounded-md p-2 font-semibold text-[14px]'>FAQ</p>
          </Link>
          <Link href="/contacts">
            <p className='font-protest text-[#101828] hover:bg-gray-200 rounded-md p-2 font-semibold text-[14px]'>Contacts</p>
          </Link>
        </div>
      </div>

      {/* Contacts */}
      <div className='hidden md:flex text-[#80A948] text-sm items-center gap-5 px-6 w-1/2'>
        <span className="flex items-center gap-2">
          <img src="/assets/phone.png" alt="Phone icon" />
          <p>+91</p>
          <p> 0000000000</p>
        </span>
        <span className="flex items-center gap-2">
        <img src="/assets/mail_outline_24.png" alt="email icon" />
        <p>demo@gmail.com</p>
        </span>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-24 left-0 w-full bg-white border-t border-gray-100 shadow-lg rounded-md ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className='flex flex-col items-center gap-4 p-4'>
          <Link href="/services">
            <p className='font-protest text-[#101828] hover:bg-gray-200 rounded-md p-2 font-semibold text-[14px]'>Services</p>
          </Link>
          <Link href="/media">
            <p className='font-protest text-[#101828] hover:bg-gray-200 rounded-md p-2 font-semibold text-[14px]'>Media</p>
          </Link>
          <Link href="/cases">
            <p className='font-protest text-[#101828] hover:bg-gray-200 rounded-md p-2 font-semibold text-[14px]'>Cases</p>
          </Link>
          <Link href="/faq">
            <p className='font-protest text-[#101828] hover:bg-gray-200 rounded-md p-2 font-semibold text-[14px]'>FAQ</p>
          </Link>
          <Link href="/contacts">
            <p className='font-protest text-[#101828] hover:bg-gray-200 rounded-md p-2 font-semibold text-[14px]'>Contacts</p>
          </Link>
          <span className="flex items-center gap-2">
             <img src="/assets/phone.png" alt="Phone icon" />
             <p>+91</p>
             <p> 0000000000</p>
          </span>
          <span className="flex items-center gap-2">
              <img src="/assets/mail_outline_24.png" alt="email icon" />
              <p>demo@gmail.com</p>
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Header;
