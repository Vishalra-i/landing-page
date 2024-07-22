'use client'
import React from 'react'
import { faClipboard, faPaintBrush, faCode, faRocket, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import Card from '../Helpers/Cards';
import Image from 'next/image';


function AppDev() {
    const cardData = [
        { number: 1, title: 'Analysis', description: 'We craft precise technical specs, aligning with your business, technology, and user requirements.', icon: faClipboard },
        { number: 2, title: 'Design', description: 'We create stunning designs that are both functional and aesthetically pleasing.', icon: faPaintBrush },
        { number: 3, title: 'Development', description: 'We develop robust and scalable applications using the latest technologies.', icon: faCode },
      ];
    const cardData2 = [
        { number: 4, title: 'Testing', description: 'We carry out functional testing and do bug fixes. We adapt the application to different phone resolutions', icon: faMicrophone },
        { number: 5, title: 'Launch', description: 'We create stunning designs that are both functional and aesthetically pleasing.', icon: faPaintBrush },
        { number: 6, title: 'Support', description: 'We develop robust and scalable applications using the latest technologies.', icon: faCode },
      ];
  return (
    <section id="cases" className='py-16 px-5 bg-white'>
        <h1 className='text-4xl font-bold'>Application Development Stages</h1>
        <div className="flex flex-col md:flex-row h-full w-full my-10 ">
           <div className="space-y-5 h-full py-16 w-full md:w-1/3">
             {cardData.map((data) => (
               <Card key={data.number} number={data.number} title={data.title} description={data.description} icon={data.icon} />
             ))}
           </div>
           <div className="  w-full md:w-1/3">
              <Image src={"/assets/hope-gif1.png"} alt="mobile" width={500} height={500} className="w-full h-full"/>
           </div>
           <div className="space-y-5 h-full py-16 w-full md:w-1/3">
             {cardData2.map((data) => (
               <Card key={data.number} number={data.number} title={data.title} description={data.description} icon={data.icon} />
             ))}
           </div>
        </div>
    </section>
  )
}

export default AppDev