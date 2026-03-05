// Main Header  --------------------------------------------------------------------------------------

"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

export default function Header() {
  const [showDepartments, setShowDepartments] = useState(false);

  const departments = [
    "Diwali Hamper",
    "Chikki",
    "Dry Fruit Roll",
    "Fudge",
    "Namkeens",
  ];

  return (
    <div className="w-full border-b bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Left - All Departments */}
        <div className="relative">
          <button
            onClick={() => setShowDepartments(!showDepartments)}
            className="flex items-center gap-2 bg-orange-600 text-white px-4 py-2 rounded-md"
          >
            <Menu size={18} />
            <span className="cursor-pointer">All Departments</span>
          </button>

          {showDepartments && (
            <div className="absolute top-12 left-0 cursor-pointer bg-white shadow-lg w-56 rounded-md overflow-hidden z-50">
              {departments.map((item, index) => (
                <Link
                  key={index}
                  href={`/products?category=${item.toLowerCase()}`}
                  className="block px-4 py-2 hover:bg-orange-50"
                >
                  {item}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Center - Primary Menu */}
        <nav className="hidden md:flex gap-8 font-medium">
          <Link href="/" className="hover:text-orange-600">
            Home
          </Link>
          <Link href="/about" className="hover:text-orange-600">
            About Us
          </Link>
          <Link href="/contact" className="hover:text-orange-600">
            Contact Us
          </Link>
          <Link href="/products" className="hover:text-orange-600">
            Shop
          </Link>
        </nav>

        {/* Right - Special Offer */}
        <div className="hidden md:block">
          <Link
            href="#"
            className="text-orange-600 font-semibold hover:underline"
          >
            Special Offer!
          </Link>
        </div>

      </div>
    </div>
  );
}