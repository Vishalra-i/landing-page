import Image from 'next/image'
import React from 'react'

function IndustryIcon({image , name}) {
  return (
    <div className='flex gap-2 items-center'>
      <div className=" rounded-full p-2 bg-white">
        <Image src={`/assets/projects/${image}.png`} alt={image} width={20} height={20}  />
      </div>
       <p>{name}</p>
    </div>
  )
}

export default IndustryIcon