import Image from 'next/image'
import React from 'react'

function Logo({width = 120}) {
  return (
    <div>
        <Image src="/assets/logo.png" width={width} height={30} alt='logo' />
    </div>
  )
}

export default Logo