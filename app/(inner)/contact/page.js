
// contact page --------------------------------------------------------------------



import PageBanner from "@/components/PageBanner";

export const metadata = {
  title: "About",
};

export default function Contact() {
  return (
    <>

      <PageBanner title="Contact Us" />

      <div className="max-w-6xl mx-auto py-16 px-4">

        {/* Contact Form */}

        <h2 className="text-3xl font-bold mb-6">
          Contact Form
        </h2>

        <form className="grid gap-4 mb-16">

          <div className="grid md:grid-cols-2 gap-4">

            <input
              type="text"
              placeholder="Your Name"
              className="border p-3 rounded"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="border p-3 rounded"
            />

          </div>

          <textarea
            rows="6"
            placeholder="Your Message"
            className="border p-3 rounded"
          ></textarea>

          <button className="bg-orange-600 text-white py-3 px-6 w-fit rounded-[10px]">
            Send Us
          </button>

        </form>


        {/* Address */}

        <div>

          <h3 className="text-2xl font-bold mb-4">
            Address
          </h3>

          <p>
            <strong>Maganlal Chikki Products Pvt Ltd</strong>
          </p>

          <p>
            Shed No. 49A & B, Opp. Monsento LICEL,
            Nangargaon, Lonavala 410401 Dist. Pune
          </p>

          <p>Phone: +912114274060</p>
          <p>Mobile: +917666530969</p>
          <p>Contact Time: 9 AM To 6 PM</p>
          <p>Factory Closed – Thursday</p>

          <p className="mt-2">
            sales@maganlalchikki.in
          </p>

        </div>

      </div>


      {/* Google Map */}

      <div className="w-full h-[500px]">
        <iframe
          src="https://www.google.com/maps?q=Lonavala%20Maharashtra%20Maganlal%20Chikki&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>


    </>
  );
}