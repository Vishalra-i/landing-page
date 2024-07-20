import React from 'react'
import Logo from './Logo'
import Link from 'next/link'

function Header() {
  return (
    //Navbar
    <nav className='flex justify-between items-center   bg-white shadow-md shadow-gray-200 z-50 px-8 fixed top-5 border border-gray-100  w-full rounded-md  h-24'>
          {/* //Logo  */}
          <div id="logo" className='flex justify-between items-center gap-24'>
            <Logo/>
          {/* Menu items  */}
          <div id="menu" className="flex justify-between items-center gap-4">
            <Link href={"services"}>
              <p className='font-protest text-[#101828] hover:bg-gray-200 rounded-md p-2 font-semibold text-[14px]'>Services</p>
            </Link>
            <Link href={"services"}>
              <p className='font-protest text-[#101828] hover:bg-gray-200 rounded-md p-2 font-semibold text-[14px]'>Media</p>
            </Link>
            <Link href={"services"}>
              <p className='font-protest text-[#101828] hover:bg-gray-200 rounded-md p-2 font-semibold text-[14px]'>Cases</p>
            </Link>
            <Link href={"services"}>
              <p className='font-protest text-[#101828] hover:bg-gray-200 rounded-md p-2 font-semibold text-[14px]'>FAQ</p>
            </Link>
            <Link href={"services"}>
              <p className='font-protest text-[#101828] hover:bg-gray-200 rounded-md p-2 font-semibold text-[14px]'>Contacts</p>
            </Link>
          </div>
          </div>
          {/* Contacts  */}
          <div id="contacts" className='text-[#80A948] text-sm flex  items-center gap-5'>
            <span className="flex items-center justify-between gap-2">
                <img src="/assets/planing.svg" alt="" />
                <p>+91</p>
                <p>0000000000</p>
            </span>
            <span className="flex items-center justify-between gap-2">
                <img src="/assets/planing.svg" alt="" />
                <p>demo@gmail.com</p>
            </span>
          </div>
    
    </nav>
  )
}

export default Header