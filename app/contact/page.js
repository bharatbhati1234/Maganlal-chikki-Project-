
// contact page --------------------------------------------------------------------


"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (

        <>

            <div
                className="relative bg-cover bg-center bg-no-repeat py-24"
                style={{
                    backgroundImage:
                        "url('https://appy.trycatchtech.com/uploads/maganlalchikki/bcb3ff17e992db6004e9c70ababace3a.jpg')",
                }}
            >
                <div className="absolute inset-0 bg-black/60"></div>

                <div className="relative max-w-7xl mx-auto px-4 text-center text-white">
                    <h1 className="text-4xl sm:text-5xl font-bold">
                        Contact Us
                    </h1>

                    <nav className="mt-6 flex justify-center">
                        <ol className="flex items-center space-x-2 text-gray-200">
                            <li>
                                <Link href="/" className="hover:text-yellow-400 transition">
                                    Home
                                </Link>
                            </li>
                            <li>/</li>
                            <li className="font-medium text-white">
                                Contact Us
                            </li>
                        </ol>
                    </nav>
                </div>

            </div>

            <div className="max-w-7xl mx-auto px-4 py-16">

                {/* CONTACT FORM */}
                <div className="mb-16">

                    <h2 className="text-3xl font-bold mb-8">Contact Form</h2>

                    <form onSubmit={handleSubmit} className="space-y-6">

                        <div className="grid md:grid-cols-2 gap-4">

                            <input
                                type="text"
                                name="name"
                                placeholder="Your name*"
                                value={formData.name}
                                onChange={handleChange}
                                className="border p-3 rounded w-full"
                                required
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder="Your email*"
                                value={formData.email}
                                onChange={handleChange}
                                className="border p-3 rounded w-full"
                                required
                            />

                        </div>

                        <textarea
                            name="message"
                            placeholder="Your message *"
                            rows="6"
                            value={formData.message}
                            onChange={handleChange}
                            className="border p-3 rounded w-full"
                        />

                        <button
                            type="submit"
                            className="bg-orange-600 text-white px-6 py-3 rounded hover:bg-orange-700 transition"
                        >
                            Send Us
                        </button>

                    </form>

                </div>


                {/* ADDRESS SECTION */}

                <div className="border-t pt-10 mb-16">

                    <h3 className="text-2xl font-bold mb-6">Address</h3>

                    <div className="space-y-4 text-gray-700">

                        <p>
                            <strong>Maganlal Chikki Products Pvt Ltd</strong>
                            <br />
                            Shed No. 49A & B, Opp. Monsento LICEL, Nangargaon,
                            Lonavala 410401 Dist. Pune
                        </p>

                        <p>
                            Online Store :{" "}
                            <a
                                href="https://maganlalchikki.in"
                                className="text-blue-600 underline"
                            >
                                www.maganlalchikki.in
                            </a>
                        </p>

                        <p>Ph No: +91 2114 274060 | Mobile: +91 7666530969</p>

                        <p>Contact Time : 9 AM To 6 PM</p>

                        <p>Factory Closed – Thursday</p>

                        <p>
                            Email :{" "}
                            <a
                                href="mailto:sales@maganlalchikki.in"
                                className="text-blue-600 underline"
                            >
                                sales@maganlalchikki.in
                            </a>
                        </p>

                    </div>

                </div>


                {/* GOOGLE MAP */}

                <div className="w-full h-[500px]">

                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120893.26608826064!2d73.34168238767816!3d18.757352815091803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be8017890cc0399%3A0x125f023d78642c31!2sLICEL%20Office!5e0!3m2!1sen!2sin!4v1628578881292!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        loading="lazy"
                        allowFullScreen
                    ></iframe>

                </div>

            </div>

        </>
    );
}