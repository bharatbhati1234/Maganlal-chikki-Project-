
// ProductCard.js page ----------------------------------------------------------------------


import Link from "next/link";

export default function ProductCard({ product }) {

    return (

        <div className="border p-4 rounded">

            <img
                src={product.image}
                className="w-full h-48 object-cover"
            />

            <h3 className="font-semibold mt-2">
                {product.product_name}
            </h3>

            <p className="text-orange-600">
                ₹ {product.price}
            </p>

            <Link
                href={`/products/${product.id}`}
                className="text-blue-500"
            >

                View Details

            </Link>

        </div>

    )

}