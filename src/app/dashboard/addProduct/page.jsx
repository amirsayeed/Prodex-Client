"use client";

import { useRouter } from "next/navigation";
import { toast } from "react-toastify";


export default function AddProductPage() {
  const router = useRouter();
  const categories = ["Electronics", "Fashion", "Books", "Toys", "Sports", "Other"];
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const product = {
      name: form.name.value,
      description: form.description.value,
      price: Number(form.price.value),
      stock: Number(form.stock.value),
      category: form.category.value,
      image: form.image.value,
    };

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });

      if (res.ok) {
        toast.success("Product added successfully!");
        router.push("/products"); 
      } else {
        toast.error("Failed to add product");
      }
    } catch (err) {
      console.error(err);
      toast.error("Error connecting to server");
    }
  };

  return (
    <div className="my-10 max-w-lg mx-auto p-6 bg-base-100 border border-gray-200 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Add New Product</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Product Name" required className="input w-full px-3 py-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-300" />
        <textarea name="description" placeholder="Product Description" required className="border border-gray-300 w-full px-3 py-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-300" />
        <input type="number" name="price" placeholder="Price" required className="input  w-full px-3 py-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-300" />
        <input type="number" name="stock" placeholder="Stock Quantity" className="input w-full px-3 py-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-300" />
        <select name="category" required className="border border-gray-300 w-full px-3 py-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-300">
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <input type="text" name="image" placeholder="Image URL" className="input w-full px-3 py-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-300" required />
        <button type="submit" className="w-full text-white bg-[#4dbbe8] py-2 px-4 rounded-lg hover:bg-[#1db3ee]">
          Add Product
        </button>
      </form>
    </div>
  );
}
