// Products page ---------------------------------------------------------------


import axios from "axios"
import Link from "next/link"
import { Suspense } from "react"



export const metadata = {                  // metadata banaya hai products ka matlab jab products tab pe click karege to url me products name show hoga 
  title: "Products",                        // Products likha showhoga 
  description : "Product list of next app"  // description page source karege website to uder show hota hai
}

function Loading(){
  return (
    <>
      <main className="grid min-h-100 place-item-center bg-[#f1f1f1] px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-7xl">
            Loading Products.....
          </h1>
        </div>
      </main> 
    </>
  )
}


const ProductSection = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const response = await axios.get(
    "https://appy.trycatchtech.com/v3/maganlalchikki/product_list?category_id=1"
  );

  const products = response.data.data || response.data || [];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <Link
          key={product.id}
          href={`/products/${product.id}`}
          className="group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
        >
          {/* Image */}
          <div className="overflow-hidden">
            <img
              src={product.thumbnail || product.images?.[0]}
              alt={product.title}
              className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
            />
          </div>

          {/* Content */}
          <div className="p-4">
            <h3 className="text-lg font-semibold line-clamp-2">
              {product.title}
            </h3>

            <p className="mt-2 text-xl font-bold text-yellow-400">
              ₹{product.price}
            </p>

            <button className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-black font-medium py-2 rounded-lg transition">
              Add to Cart
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};



export default function Products() {
  return (
    <div className="bg-[#f1f1f1] min-h-screen py-16">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 🔥 2 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* ✅ LEFT SIDE - Banner */}
          <div className="lg:col-span-1">
            <img
              src="/Diwali-Gift-Packs-banner.jpg"
              alt="Diwali Gift Pack"
              className="w-full h-[600px] object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* ✅ RIGHT SIDE - Products */}
          <div className="lg:col-span-2">

            <h2 className="text-4xl font-bold mb-6">
              All Products
            </h2>

            <p className="text-gray-600 mb-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Nam illo laudantium numquam voluptatem magnam neque quia.
            </p>

            <Suspense fallback={<Loading />}>
              <ProductSection />
            </Suspense>

          </div>

        </div>

      </div>
    </div>
  );
}