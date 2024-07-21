import Image from 'next/image'
import React from 'react'

function Team() {
  return (
    <section className='py-16 px-6 bg-[#F2F4F7]'>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-1/2 container px-1 md:px-5">
          <h3 className='text-4xl font-bold'>Our team</h3>
          <p className='text-sm my-10 font-semibold'>
            Thousand is a full-cycle digital production company with its own product analytics, <br /> 
            design, web and mobile development.
          </p>
          <div className="grid grid-cols-3 gap-y-2">
            <p className='text-2xl md:text-4xl font-bold'>28</p>
            <p className='text-2xl md:text-4xl font-bold'>+100</p>
            <p className='text-2xl md:text-4xl font-bold'>7 years</p>
            <p className='text-sm text-gray-500 font-bold'>team members</p>
            <p className='text-sm text-gray-500 font-bold'>projects</p>
            <p className='text-sm text-gray-500 font-bold'>in IT sphere</p>
          </div>
          <p className='text-sm my-10 font-semibold'>
            All the necessary specialists - from a designer to a tester - are on our staff. We hire <br /> 
            the best specialists in the market. It&apos;s expensive but worth it
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <Image src={'/assets/pagew.png'} width={500} height={400} alt='hii'/>
        </div>
      </div>
    </section>
  )
}

export default Team
