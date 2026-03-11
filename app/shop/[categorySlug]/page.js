import { getProductsbyCategory } from "@/libs/api";
import { createSlug, getIdFromSlug } from "@/utils/slug";
import { Eye, Heart, ShoppingBagIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function CategoryPage({ params }) {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
  const { categorySlug } = await params;

  const categoryId = getIdFromSlug(categorySlug);

  const products = await getProductsbyCategory(categoryId);
  console.log(products);

  return (
    <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {products.slice(0, 8).map((item) => (
        <Link
          key={item.id}
          href={`/shop/${categorySlug}/${createSlug(item?.title)}-${item?.id}`}
        >
          <div className="rounded-lg bg-white hover:shadow-lg hover:-translate-y-2 transition-all duration-300 group overflow-hidden">
            {/* Image */}
            <div className="relative h-40 overflow-hidden">
              <Image
                src={item.images?.[0]}
                alt={item.title}
                fill
                unoptimized
                className="object-cover rounded group-hover:scale-110 transition duration-300"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-end pr-3">
                <div className="flex flex-col gap-3">
                  {/* View */}
                  <div className="bg-white p-2 rounded-full shadow cursor-pointer hover:bg-red-600 hover:text-white transition">
                    <Eye size={18} />
                  </div>

                  {/* Wishlist */}
                  <div className="bg-white p-2 rounded-full shadow cursor-pointer hover:bg-red-600 hover:text-white transition">
                    <Heart size={18} />
                  </div>

                  {/* Share */}
                  <div className="bg-white p-2 rounded-full shadow cursor-pointer hover:bg-red-600 hover:text-white transition">
                    <ShoppingBagIcon size={18} />
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="mt-3 text-sm font-medium line-clamp-2 pb-4 border-b border-gray-400">
                {item.title}
              </h3>

              <p className="text-red-600 font-bold mt-2">₹ {item.price}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
