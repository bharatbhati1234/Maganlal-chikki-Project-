// Header page ----------------------------------------------------------------------

"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [showDepartments, setShowDepartments] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const pathname = usePathname();

  const departments = [
    "Diwali Hamper",
    "Chikki",
    "Dry Fruit Roll",
    "Fudge",
    "Namkeens",
  ];

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
    { name: "Shop", path: "/shop" },

  ];

  return (
    <div className="w-full border-b bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* LEFT - All Departments */}
        <div className="relative">
          <button
            onClick={() => setShowDepartments(!showDepartments)}
            className="flex items-center gap-2 bg-orange-600 text-white px-4 py-2 rounded-md"
          >
            <Menu size={18} />
            <span>All Departments</span>
          </button>

          {showDepartments && (
            <div className="absolute top-12 left-0 bg-white shadow-lg w-56 rounded-md overflow-hidden z-50">
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

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex gap-8 font-medium">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className={`px-3 py-1 rounded transition ${pathname === link.path
                  ? "bg-orange-600 text-white"
                  : "hover:text-orange-600"
                }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* RIGHT */}
        <div className="hidden md:block">
          <Link
            href="#"
            className="text-orange-600 font-semibold hover:underline"
          >
            Special Offer!
          </Link>
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileMenu && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col px-4 py-4 gap-4 font-medium">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.path}
                onClick={() => setMobileMenu(false)}
                className={`px-3 py-2 rounded-md transition ${pathname === link.path
                    ? "bg-orange-500 text-white"
                    : "text-gray-700 hover:bg-orange-100"
                  }`}
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="#"
              className="text-orange-600 font-semibold px-3 py-2"
            >
              Special Offer!
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}