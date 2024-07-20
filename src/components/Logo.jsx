import Image from 'next/image'
import React from 'react'

function Logo({width = 140}) {
  return (
    <div>
        <Image src="/assets/logo.png" width={width} height={20} alt='logo' />
    </div>
  )
}

export default Logo