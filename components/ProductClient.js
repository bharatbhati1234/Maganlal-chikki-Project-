"use client";

import Image from "next/image";
import Link from "next/link";
import { Eye, Heart, ShoppingBagIcon } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/store/slice/cart.slice";
import { createSlug } from "@/utils/slug";
import { addToWishlist } from "@/store/slice/wishlist.slice";
import { showToast, hideToast } from "@/store/slice/toast.slice";
import { useSearchParams } from "next/navigation";

export default function CategorySectionsClient({ data }) {

    const dispatch = useDispatch();

    const cartItems = useSelector((state) => state.cart.cartItems);

    // ⭐ search query redux
    const searchQuery = useSelector((state) => state.search.query);

    // ⭐ category from URL
    const searchParams = useSearchParams();
    const categoryParam = searchParams.get("category");

    const handleAddToCart = (item) => {
        dispatch(addToCart(item));

        dispatch(
            showToast({
                type: "success",
                message: `${item.title} added to cart`
            })
        )

        setTimeout(() => {
            dispatch(hideToast())
        }, 2000)
    };

    const handleAddToWishlist = (item) => {

        dispatch(addToWishlist(item));

        dispatch(
            showToast({
                type: "success",
                message: `${item.title} added to wishlist`
            })
        )

        setTimeout(() => {
            dispatch(hideToast())
        }, 2000)
    };

    return (
        <section className="max-w-7xl mx-auto px-4 md:px-10 py-12 space-y-16">

            {data.map((category) => {

                // ⭐ category filter
                if (categoryParam && category.cat_name.toLowerCase() !== categoryParam) {
                    return null;
                }

                // ⭐ product search filter
                const filteredProducts = category.products.filter((product) =>
                    product.title.toLowerCase().includes(searchQuery?.toLowerCase() || "")
                );

                if (searchQuery && filteredProducts.length === 0) {
                    return null;
                }

                return (

                    <div key={category.id} className="space-y-6">

                        {/* Top Navbar */}
                        <div className="flex flex-col md:flex-row md:justify-between md:items-center bg-white border-t-2 border-[#e9597e]">

                            <h2 className="text-md font-semibold uppercase text-white bg-[#e9597e] p-4">
                                {category.cat_name}
                            </h2>

                            <div className="flex flex-col sm:flex-row md:items-center gap-6 text-sm text-gray-600 p-4">
                                <span className="cursor-pointer text-red-600">
                                    Latest Products
                                </span>
                                <span className="cursor-pointer hover:text-red-600">
                                    Best Selling
                                </span>
                                <span className="cursor-pointer hover:text-red-600">
                                    Top Rating
                                </span>
                                <span className="cursor-pointer hover:text-red-600">
                                    Featured Products
                                </span>
                            </div>

                        </div>

                        {/* Layout */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

                            {/* Left Category Image */}
                            <div className="relative h-100 col-span-1">

                                <Image
                                    src={category.cat_image}
                                    alt={category.cat_name}
                                    fill
                                    unoptimized
                                    className="object-cover rounded-md"
                                />

                            </div>

                            {/* Products */}
                            <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                                {filteredProducts.slice(0, 8).map((item) => (

                                    <div
                                        key={item.id}
                                        className="rounded-lg bg-white hover:shadow-lg hover:-translate-y-2 transition-all duration-300 group overflow-hidden"
                                    >

                                        <div className="relative h-40 overflow-hidden">

                                            <Image
                                                src={item.images?.[0]}
                                                alt={item.title}
                                                fill
                                                unoptimized
                                                className="object-cover rounded group-hover:scale-110 transition duration-300"
                                            />

                                            <div className="absolute inset-0 bg-black/30 md:opacity-0 opacity-100 md:group-hover:opacity-100 transition flex items-center justify-end pr-3">

                                                <div className="flex flex-col gap-3">

                                                    <Link
                                                        href={`/shop/${createSlug(category.cat_name)}-${category.id}/${createSlug(item.title)}-${item.id}`}
                                                        className="bg-white p-2 rounded-full shadow cursor-pointer hover:bg-red-600 hover:text-white active:bg-red-600 active:text-white transition"
                                                    >
                                                        <Eye size={18} />
                                                    </Link>

                                                    <button
                                                        onClick={() => handleAddToWishlist(item)}
                                                        className="bg-white p-2 rounded-full shadow cursor-pointer hover:bg-red-600 hover:text-white active:bg-red-600 active:text-white transition"
                                                    >
                                                        <Heart size={18} />
                                                    </button>

                                                    <button
                                                        onClick={() => handleAddToCart(item)}
                                                        className="bg-white p-2 rounded-full shadow cursor-pointer hover:bg-red-600 hover:text-white active:bg-red-600 active:text-white transition"
                                                    >
                                                        <ShoppingBagIcon size={18} />
                                                    </button>

                                                </div>

                                            </div>

                                        </div>

                                        <div className="p-4">

                                            <h3 className="mt-3 text-sm font-medium line-clamp-2 pb-4 border-b border-gray-400">
                                                {item.title}
                                            </h3>

                                            <p className="text-red-600 font-bold mt-2">
                                                ₹ {item.price}
                                            </p>

                                        </div>

                                    </div>

                                ))}

                            </div>

                        </div>

                    </div>

                )

            })}

        </section>
    );
}