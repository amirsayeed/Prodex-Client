// components/LatestProducts.jsx
import Image from "next/image";
import Link from "next/link";
import ProductCard from "./ProductCard";

async function getLatestProducts() {
  try {
    const res = await fetch("http://localhost:5000/products", {
      cache: "no-store", // Always fetch fresh data
    });

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    const products = await res.json();
    // Sort by newest (assuming backend returns with _id or createdAt)
    return products.reverse().slice(0, 6); 
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default async function LatestProducts() {
  const products = await getLatestProducts();

  if (products.length === 0) {
    return <p className="text-center text-gray-600 mt-6">No products found.</p>;
  }

  return (
    <section className="my-12">
      <h2 className="text-3xl font-bold text-center mb-8">Latest Products</h2>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => <ProductCard key={product._id} product={product}/>)}
      </div>
     <div className="text-center mt-10">
        <Link href="/products" className="btn text-white bg-[#4dbbe8] rounded-lg">
          Show All Products
        </Link>
      </div>
    </section>
  );
}
