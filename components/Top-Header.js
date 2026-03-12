"use client";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "@/store/slice/search.slice";
import { useState } from "react";
import Link from "next/link";
import { ShoppingCart, Heart, GitCompare } from "lucide-react";
import { useRouter } from "next/navigation";

export default function TopHeader() {
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();
  const router = useRouter();

  const cartItems = useSelector((state) => state.cart.cartItems);
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(setSearchQuery(search));
    router.push("/shop");
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
              className="h-12 md:h-14 object-contain"
            />
          </Link>
        </div>

        {/* Search Section */}
        <form
          onSubmit={handleSubmit}
          className="flex w-full lg:w-1/2 border rounded-lg overflow-hidden"
        >
          <input
            type="text"
            placeholder="Enter your keyword..."
            className="flex-1 px-3 md:px-4 py-2 text-sm md:text-base outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button
            type="submit"
            className="bg-orange-600 text-white px-4 md:px-6 text-sm md:text-base hover:bg-orange-700 transition"
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

            {wishlistItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">
                {wishlistItems.length}
              </span>
            )}

          </Link>

          {/* Cart */}
          <Link href="/cart" className="relative cursor-pointer">
            <div className="flex items-center gap-1 hover:text-orange-600">
              <ShoppingCart size={22} />
              <span className="hidden sm:block text-sm">Cart</span>
            </div>

            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-orange-600 text-white text-xs px-2 py-0.5 rounded-full">
                {cartItems.length}
              </span>
            )}

          </Link>

        </div>
      </div>
    </div>
  );
}