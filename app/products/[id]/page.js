
// Single product page ----------------------------------------------------------------------


import axios from "axios";

import { StarIcon } from '@heroicons/react/20/solid'




const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
//-----------------------------------------------------------------------------------

// abhi koe bhi product pe click kare to url me us product a name show hona chahiye to uske liye 'dynamic metadata' add kiya hai

export async function generateMetadata({ params, searchParams }, parent) {   // dynamic metadata add kiya hai matlab jab product pe click kare to url me usko name show ho
  const id = (await params).id 
 
  // fetch post information
  const {data :post} = await axios.get(`https://appy.trycatchtech.com/v3/maganlalchikki/product_list?category_id=1`)
  console.log(post)
 
  return {
    title: post.title,    // usko title show hoga
    description: post.description,  // description page source karege website to uder show hota hai
  }
}

//--------------------------------------------------------------------------------------------

export default async function singleproduct({params}) {    // async add kiya hai or ye params se single product ki 'id' nikali hai 

 const  {id} = await params;        // await lagaya hai or params se id destructure ki hai 

 const response = await axios.get(`https://appy.trycatchtech.com/v3/maganlalchikki/product_list?category_id=1`)  // singleproduct ka data get kiya hai 
 console.log(response.data)

 const product = response.data
  
  return (
   <div className="bg-gray-50 min-h-screen py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-[80px]">

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white p-8 rounded-2xl shadow-lg">

      {/* LEFT SIDE - IMAGES */}
      <div>
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-[400px] object-cover rounded-xl shadow-md"
        />

        <div className="grid grid-cols-4 gap-4 mt-6">
          {product.images.slice(0, 4).map((img, index) => (
            <img
              key={index}
              src={img}
              alt={product.title}
              className="h-24 w-full object-cover rounded-lg cursor-pointer hover:scale-105 transition duration-300"
            />
          ))}
        </div>
      </div>

      {/* RIGHT SIDE - PRODUCT INFO */}
      <div className="flex flex-col justify-between">

        <div>
          <h1 className="text-4xl font-bold text-gray-900">
            {product.title}
          </h1>

          <p className="text-3xl text-indigo-600 font-semibold mt-4">
            ${product.price}
          </p>

          {/* Rating */}
          <div className="flex items-center mt-4">
            {[0, 1, 2, 3, 4].map((rating) => (
              <StarIcon
                key={rating}
                className={classNames(
                  product.rating > rating
                    ? "text-yellow-400"
                    : "text-gray-300",
                  "h-6 w-6"
                )}
              />
            ))}
            <span className="ml-3 text-sm text-gray-600">
              ({product.rating} Rating)
            </span>
          </div>

          {/* Stock */}
          <p className="mt-3 text-sm text-green-600 font-medium">
            {product.stock} items available
          </p>

          {/* Description */}
          <p className="mt-6 text-gray-600 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* BUTTONS */}
        <div className="mt-10 space-y-4">
          <button className="w-full bg-indigo-600 text-white py-3 rounded-xl text-lg font-semibold hover:bg-indigo-700 transition duration-300 shadow-md">
            Add to Cart
          </button>

          <button className="w-full border border-gray-300 py-3 rounded-xl text-lg font-semibold hover:bg-gray-100 transition duration-300">
            Buy Now
          </button>
        </div>

      </div>
    </div>

  </div>
</div>

  )
}
