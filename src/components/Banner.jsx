import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Banner() {
  return (
     <section className="relative h-[80vh] w-full">
        <Image
          src="https://i.ibb.co.com/rGRLQbpq/product-drop.jpg"
          alt="Banner"
          fill
          priority
          className="object-cover brightness-75" 
        />

        <div className="absolute inset-0 flex flex-col justify-center items-start text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to ProDex
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Find the latest and trending products at unbeatable prices.
          </p>
          <Link
            href="/products"
            className="btn text-white bg-[#4dbbe8] rounded-lg font-medium"
          >
            Shop Now
          </Link>
        </div>
      </section>
  )
}
