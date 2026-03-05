// Footer page -----------------------------------------------------------


"use client";

import Link from "next/link";
import { FaFacebookF, FaTwitter, FaPinterestP, FaInstagram } from "react-icons/fa";
import { GrSend } from "react-icons/gr";

export default function Footer() {
  return (
    <footer className="">

      {/* Newsletter Section */}
      <div className="border-b border-orange-700 border-b-[2px] border-t  border-gray-700 py-12">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-[50%_25%_25%] md:gap-16 gap-[24px] items-center">

          <div>
            <h3 className="md:text-[14px] text-[12px] font-semibold uppercase md:flex items-center justify-center gap-[4px]">
            <div className="flex items-center gap-[5px]">
              <GrSend className="text-[30px]"/>
              Sign up to newsletter and receive{" "}

              </div>
              <span className="text-orange-600">Surprise Coupons</span>
              <span className="">for first shopping</span>
            </h3>
          </div>

          <form className="flex w-full max-w-md">
            <input
              type="email"
              placeholder="Email Address here"
              className="w-full px-3 py-2 rounded-l-lg text-black outline-none border"
            />
            <button className="bg-orange-600 px-6 rounded-r-lg flex items-center justify-center">
              <GrSend />
            </button>
          </form>

                  {/* Social Icons */}
        <div className="flex gap-4  text-lg">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaPinterestP /></a>
          <a href="#"><FaInstagram /></a>
        </div>
      </div>

        </div>




      {/* Footer Links */}
      <div className="max-w-7xl mx-auto px-4 py-14 grid md:grid-cols-4 gap-10">

        {/* Logo + Info */}
        <div>
          <img
            src="logo.png"
            alt="logo"
            className="w-75 mb-4"
          />
          <p className="text-sm">
            A Legacy of 100+ years, sweetening people’s life…
          </p>
        </div>

        {/* Quick Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[24px]">
            Quick Navigation
          </h3>

          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-orange-600">Home</Link></li>
            <li><Link href="/about" className="hover:text-orange-600">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-orange-600">Contact Us</Link></li>
            <li><Link href="/shop" className="hover:text-orange-600">Shop</Link></li>
          </ul>
        </div>

        {/* Important Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[24px]">
            Important Links
          </h3>

          <ul className="space-y-2">
            <li><Link href="#" className="hover:text-orange-600">Disclaimer Policy</Link></li>
            <li><Link href="#" className="hover:text-orange-600">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:text-orange-600">Cancellation Policy</Link></li>
            <li><Link href="#" className="hover:text-orange-600">Terms and Conditions</Link></li>
            <li><Link href="#" className="hover:text-orange-600">Shipping & Delivery Policy</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[24px]">
            Contact Info
          </h3>

          <ul className="space-y-2 text-sm">
            <li>
              <strong>Maganlal Chikki Products Pvt Ltd</strong>
              <br />
              Shed No. 49A & B, Opp. Monsento LICEL,
              Nangargaon, Lonavala 410401 Dist. Pune
            </li>

            <li>📞 +91 2114 274060</li>
            <li>📱 +91 7666530969</li>
            <li>🕘 9 AM To 6 PM</li>
            <li>Factory Closed – Thursday</li>
            <li>✉ sales@maganlalchikki.in</li>
          </ul>
        </div>

      </div>


      {/* Copyright */}
      <div className="border-t  border-gray-700 py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm">

          <p>
            © 2020 maganlalchikki.in. Powered by <span className="text-orange-600 cursor-pointer inline-block transition duration-300 hover:scale-110">Bharat Bhati.</span> All Rights Reserved.
          </p>

          <img
            src="https://demo.wpthemego.com/themes/sw_topdeal/wp-content/uploads/2016/09/paypal.png"
            alt="payment"
            className="mt-4 md:mt-0 h-6 h-[32px]"
          />

        </div>
      </div>

    </footer>
  );
}