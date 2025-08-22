import ProductCard from "@/components/ProductCard";
import Link from "next/link";

const fetchProducts = async () => {
  const res = await fetch("http://localhost:5000/products", {
    cache: "no-store", 
  });
  if (!res.ok) { 
    throw new Error("Failed to fetch products");
  }
  const data = await res.json();
  return data;
};


export default async function ProductsPage() {
  const products = await fetchProducts();

  return (
    <div className="px-4 my-10">
      <h1 className="text-3xl font-bold mb-6 text-center">All Products</h1>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => <ProductCard key={product._id} product={product}/>)}
      </div>
      
    </div>
  );
}
