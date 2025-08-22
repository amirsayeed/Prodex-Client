import Link from 'next/link'
import React from 'react'

export default function ProductCard({product}) {
  return (
    <div key={product._id} className="card bg-base-100 p-4 border border-gray-200 shadow-lg hover:shadow-xl transition">
            <figure>
              <img
                src={product.image}
                alt={product.name}
                className="h-[250px] w-full rounded-lg"
              />
            </figure>
            <div className="mt-3 space-y-4">
              <h2 className="text-xl font-bold text-center">{product.name}</h2>
              <p className='font-medium'>
                {product.description.length > 80
                  ? product.description.slice(0, 80) + "..."
                  : product.description}
              </p>
              <p className="font-bold text-lg">${product.price.toFixed(2)}</p>
              <div className="card-actions justify-end">
                <Link
                  href={`/products/${product._id}`}
                  className="btn w-full text-white bg-[#4dbbe8] rounded-lg"
                >
                View Details
                </Link>
              </div>
            </div>
          </div>
  )
}
