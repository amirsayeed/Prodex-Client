import React from "react";
import Image from "next/image";
import Link from "next/link";

export async function generateStaticParams() {
  const res = await fetch("http://localhost:5000/products");
  const products = await res.json();

  return products.map((product) => ({
    id: product._id.toString(),
  }));
}

export const revalidate = 60;

export default async function ProductDetailsPage({ params }) {
  const { id } = params;

  const res = await fetch(`http://localhost:5000/products/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }
  const product = await res.json();

  return (
    <div className="max-w-4xl mx-auto p-6 my-10">
      <Link
        href="/products"
        className="btn btn-outline mb-6"
      >
        ← Back to Products
      </Link>

     <div className="card bg-base-100 shadow-xl border border-gray-300 p-6 flex flex-col md:flex-row gap-6">

      {product.image && (
        <div>
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={400}
            className="rounded-lg object-cover"
          />
        </div>
      )}

      <div className="card-body">
        <h2 className="card-title text-3xl">{product.name}</h2>
        <p className="text-lg font-semibold">{product.description}</p>
        <p className="text-lg font-semibold">Price: ${product.price}</p>
        <p className="text-lg font-medium">Stock: {product.stock}</p>
        <p className="text-lg font-medium">Category: {product.category}</p>
      </div>
    </div>

    </div>
  );
}
