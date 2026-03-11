

// Top Header ------------------------------------------------------------------------------

"use client";

import { useSelector } from "react-redux";



import { useState } from "react";
import Link from "next/link";
import { ShoppingCart, Heart, GitCompare } from "lucide-react";

export default function TopHeader() {
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");

  const cartItems = useSelector((state) => state.cart.cartItems);
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Search:", search, "Category:", category);
  };

  return (
    <div className="w-full border-b bg-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col lg:flex-row items-center justify-between gap-4">

        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <img
              src="logo.png"
              alt="Maganlal Chikki"
              className="h-14 object-contain"
            />
          </Link>
        </div>

        {/* Search Section */}
        <form
          onSubmit={handleSubmit}
          className="flex w-full lg:w-1/2 border rounded-lg overflow-hidden"
        >
          <select
            className="px-3 bg-gray-100 outline-none text-sm cursor-pointer"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="chikki">Chikki</option>
            <option value="fudge">Fudge</option>
            <option value="dry-fruit-roll">Dry Fruit Roll</option>
            <option value="namkeens">Namkeens</option>
            <option value="gift-hamper">Gift Hamper</option>
          </select>

          <input
            type="text"
            placeholder="Enter your keyword..."
            className="flex-1 px-4 py-2 outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button
            type="submit"
            className="bg-orange-600 text-white px-6 hover:bg-orange-700 transition"
          >
            Search
          </button>
        </form>

        {/* Right Section */}
        <div className="flex items-center gap-6">

          {/* Compare */}
          <div className="flex items-center gap-1 cursor-pointer hover:text-orange-600">
            <GitCompare size={20} />
            <span className="hidden sm:block text-sm">Compare</span>
          </div>

          {/* Wishlist */}
          <Link href="/wishlist" className="relative">

            <Heart size={22} />

            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">

              {wishlistItems.length}

            </span>

          </Link>

          {/* Cart */}
          <Link href="/cart" className="relative cursor-pointer">
            <div className="flex items-center gap-1 hover:text-orange-600">
              <ShoppingCart size={22} />
              <span className="hidden sm:block text-sm">Cart</span>
            </div>

            <span className="absolute -top-2 -right-3 bg-orange-600 text-white text-xs px-2 py-0.5 rounded-full">
              {cartItems.length}
            </span>
          </Link>

        </div>
      </div>
    </div>
  );
}