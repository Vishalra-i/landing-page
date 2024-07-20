import Image from 'next/image'
import React from 'react'

function HeroSection() {
  return (
    <section>
        <div className="flex gap-10 items-center h-screen overflow-hidden max-h-screen ">

            {/* Text Side  */}
            <div className="w-1/2  px-5 animate-slideInFromLeft leading-7 mt-7">
                <h1 className="text-4xl text-yellow-400 font-bold">User-Centric Excellence<span className="text-black">: Our</span></h1>
                <h1 className="text-4xl font-bold">App Development Services</h1>
                <h1 className="text-4xl font-bold">Tackles Your Pain Points</h1>
                <h3 className='py-3 font-[600] leading-6 text-gray-700'>Experience a Seamless Digital Journey with <span className="text-green-500">Desun</span> - Where Every Line <br/> of Code Resolves Your Challenges and <span className='text-yellow-400'>Elevates Your App Experience</span> <br/> to Unparalleled Heights.</h3>
                

                {/* //Box for contact */}
                <div className="container p-7 w-fit h-fit border-gray-400 shadow-lg shadow-gray-300 rounded-md ">
                  <h4 className='font-bold'>Leave your contacts and we will call you back <br />
                  within 30 minutes</h4>
                  <form className="grid grid-flow-col grid-rows-2 gap-3">
                    <input type="text" className='outline-none border-b-2 border-0 border-gray-300 '/>
                    <input type="text" className='outline-none border-b-2 border-0 border-gray-300 '/>
                    <input type="text" className='outline-none border-b-2 border-0 border-gray-300 '/>
                    <input type="text" className='outline-none border-b-2 border-0 border-gray-300 '/>
                    <button>Get Consultaion</button>
                  </form>
                </div>

                 
            </div>

            {/* //Banner sid */}
            <div className="w-1/2 animate-slideInFromTop">
               <span className='flex gap-5 mt-72 -rotate-12'>
                  <div className="div">
                       <Image width={290} height={672} src="/assets/Dashboar.png" alt="app" />
                       <Image width={290} height={672} src="/assets/raise.png" alt="app" />
                  </div>
                  <div className="div">
                       <Image width={290} height={672} src="/assets/category.png" alt="app" />
                       <Image width={290} height={672} src="/assets/bills.png" alt="app" />
                  </div>
               </span>
            </div>
        </div>
    </section>
  )
}

export default HeroSection