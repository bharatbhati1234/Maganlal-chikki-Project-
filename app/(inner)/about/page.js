// About us page ---------------------------------------------------------------

import PageBanner from "@/components/PageBanner";
import { getAbout } from "@/libs/api";
import Image from "next/image";


export const metadata = {
  title: "About",
};

export default async function About() {

  const data = await getAbout();
  const about = data?.[0];
  

  return (
    <>
      <PageBanner title="About Us" />

      {/* ABOUT SECTION */}

      <div className="max-w-7xl mx-auto py-16 px-4 grid md:grid-cols-2 gap-12 items-center">

        {/* Image */}

        <div>
          {about?.image && (
            <Image
              src={about.image}
              alt="about"
              width={600}
              height={600}
              className="rounded-lg object-cover w-full"
            />
          )}
        </div>

        {/* Content */}

        <div>

          <h2 className="text-3xl font-bold mb-4">
            {about?.title}
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            {about?.description}
          </p>

          <h3 className="text-2xl font-semibold mb-3">
            Our Team
          </h3>

          <p className="text-gray-600 leading-relaxed">
            {about?.our_team}
          </p>

        </div>

      </div>

      {/* HISTORY SECTION */}

      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          History
        </h2>

        <h4 className="font-medium text-gray-700 mb-2">
          And the legacy moves on!
        </h4>

        <p className="text-gray-600 leading-relaxed">
          {about?.history}
        </p>

      </div>


      {/* CLIENT SATISFACTION */}

      <div className="max-w-7xl mx-auto py-12 px-4">

        <h2 className="text-2xl font-semibold mb-4 text-gray-800 uppercase">
          Client Satisfaction
        </h2>

        <p className="text-gray-600 leading-relaxed">
          {about?.client_satisfaction}
        </p>

      </div>

    </>
  );
}
























