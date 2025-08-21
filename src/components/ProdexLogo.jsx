import React from 'react'
import Image from 'next/image'
import logo from '../app/logo.png'
export default function ProdexLogo() {
  return (
    <div className='flex items-center justify-center gap-1'>
        <Image src={logo}
        alt="logo of the site"
        width={30}
        height={30}/>
        <h2 className='text-xl font-bold'>ProDex</h2>
    </div>
  )
}
