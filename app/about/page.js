// About us page ---------------------------------------------------------------


"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react"


function Loading() {
    return (
        <>
            <main className="grid min-h-100 place-item-center bg-[#f1f1f1] px-6 py-24 sm:py-32 lg:px-8">
                <div className="text-center">
                    <h1 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-7xl">
                        Loading About Section.....
                    </h1>
                </div>
            </main>
        </>
    )
}




const AboutSection = () => {
    const [about, setAbout] = useState(null);

    useEffect(() => {
        axios
            .get("https://appy.trycatchtech.com/v3/maganlalchikki/about")
            .then((response) => {
                const data = response.data.data || response.data;
                console.log(response)
                setAbout(data[0]);   // API array return karta hai
            });
    }, []);

    if (!about) {
        return <Loading />
    }


    return (
        <section className="bg-white py-20">
            <div className="max-w-7xl mx-auto px-4">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* LEFT SIDE IMAGE */}
                    <div className="overflow-hidden rounded-2xl shadow-lg">
                        <img
                            src={about?.image}
                            alt={about?.title}
                            className="w-[100%] md:w-full h-[100%] md:h-[850px] object-cover hover:scale-105 transition duration-500"
                        />
                    </div>

                    {/* RIGHT SIDE CONTENT */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            {about?.title}
                        </h2>

                        <div
                            className="text-gray-600 leading-relaxed space-y-4"
                            dangerouslySetInnerHTML={{
                                __html: about?.description,
                            }}
                        />

                        <h3 className="text-2xl font-semibold mt-4 mb-4 text-gray-800">
                            Our Team
                        </h3>

                        <div
                            className="text-gray-600 leading-relaxed space-y-4"
                            dangerouslySetInnerHTML={{
                                __html: about?.our_team,
                            }}
                        />
                    </div>



                </div>

                <div>

                <h3 className="text-2xl font-semibold mt-4 mb-4 text-gray-800">
                    History
                </h3>

                <div
                    className="text-gray-600 leading-relaxed space-y-4"
                    dangerouslySetInnerHTML={{
                        __html: about?.history,
                    }}
                />

                </div>

                 <div> 
                <h3 className="text-2xl font-semibold mt-4 mb-4 text-gray-800">
                    Client Satisfaction
                </h3>

                <div
                    className="text-gray-600 leading-relaxed space-y-4"
                    dangerouslySetInnerHTML={{
                        __html: about?.client_satisfaction,
                    }}
                />

                </div>

            </div>




        </section>
    );
};




export default function About() {

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
                        About Us
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
                                About Us
                            </li>
                        </ol>
                    </nav>
                </div>

            </div>

            <Suspense fallback={<Loading />}>
                <AboutSection />
            </Suspense>


        </>
    );
}