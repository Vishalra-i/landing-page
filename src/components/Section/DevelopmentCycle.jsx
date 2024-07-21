import Image from 'next/image'
import React from 'react'

function DevelopmentCycle() {
  return (
    <section className='bg-white w-full min-h-fit p-5'>
        {/* Logobar for advertisment  */}
       <hr className='bg-gray-300 h-[2px] w-full'/>
          <div className="flex items-center justify-evenly animate-slide ">
            <Image src={'/assets/logobar.png'} alt="logobar" width={140} height={30}/>
            <Image src={'/assets/logobar.png'} alt="logobar" width={140} height={30}/>
            <Image src={'/assets/logobar.png'} alt="logobar" width={140} height={30}/>
            <Image src={'/assets/logobar.png'} alt="logobar" width={140} height={30}/>
            <Image src={'/assets/logobar.png'} alt="logobar" width={140} height={30}/>
          </div>
       <hr className='bg-gray-300 h-[2px] w-full'/>

       {/* Development Cycle  */}
       <div className="flex gap-5 flex-col md:flex-row my-5 p-5">

        {/* //Left side - details about technology */}
          <div className="w-full md:w-1/2 space-y-5">
            <h3 className='text-3xl font-bold '>Full Development Cycle</h3>
            <p className='text-sm py-5'>We use proven technology</p>
            <span className='my-10'>
              <h4 className='font-bold text-xl'>Web</h4>
              <p className='py-2 text-gray-500 '>PHP / Javascript / Node.JS / Web Socket / Socket.io / Vue.js/ Nuxt / MySQL / Laravel / GO lang / django / Python</p>
            </span>
            <span className='my-10'>
              <h4 className='font-bold text-xl'>Mobile</h4>
              <p className='py-2 text-gray-500 '>Swift / Kotlin / Alamofire / Firebase / CoreData / Room / Realm / Coroutine / RxJava / RxSwift / Unit Test / Navigation</p>
            </span>
          </div>
        {/* Right Side - Different feild  */}
          <div className=" mx-auto w-full md:w-1/2 px-10">
             <ul className='text-gray-700 space-y-2'>
                <li className='hover:underline hover:text-black p-1 text-lg font-medium underline-offset-8 cursor-pointer decoration-gray-500 hover:font-bold'>iOS development &#10095;</li>
                <li className='hover:underline hover:text-black p-1 text-lg font-medium underline-offset-8 cursor-pointer decoration-gray-500 hover:font-bold'>Android development &#10095;</li>
                <li className='hover:underline hover:text-black p-1 text-lg font-medium underline-offset-8 cursor-pointer decoration-gray-500 hover:font-bold'>Web development &#10095;</li>
                <li className='hover:underline hover:text-black p-1 text-lg font-medium underline-offset-8 cursor-pointer decoration-gray-500 hover:font-bold'>UI/UX design &#10095;</li>
                <li className='hover:underline hover:text-black p-1 text-lg font-medium underline-offset-8 cursor-pointer decoration-gray-500 hover:font-bold'>Testing &#10095;</li>
                <li className='hover:underline hover:text-black p-1 text-lg font-medium underline-offset-8 cursor-pointer decoration-gray-500 hover:font-bold'>Launch &#10095;</li>
                <li className='hover:underline hover:text-black p-1 text-lg font-medium underline-offset-8 cursor-pointer decoration-gray-500 hover:font-bold'>IT consulting &#10095;</li>
             </ul>
          </div>
       </div>
    </section>
  )
}

export default DevelopmentCycle