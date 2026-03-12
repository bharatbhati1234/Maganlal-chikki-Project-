"use client";

import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "@/store/slice/cart.slice";
import { removeFromWishlist } from "@/store/slice/wishlist.slice";
import { showToast, hideToast } from "@/store/slice/toast.slice";

export default function WishlistPage() {

    const wishlistItems = useSelector(
        (state) => state.wishlist.wishlistItems
    );

    const dispatch = useDispatch();

    const handleAddToCart = (item) => {

        dispatch(addToCart(item));

        dispatch(
            showToast({
                type: "success",
                message: `${item.title} added to cart`
            })
        );

        setTimeout(() => {
            dispatch(hideToast())
        }, 2000)

    };

    const handleRemove = (item) => {

        dispatch(removeFromWishlist(item.id));

        dispatch(
            showToast({
                type: "error",
                message: `${item.title} removed from wishlist`
            })
        );

        setTimeout(() => {
            dispatch(hideToast())
        }, 2000)

    };

    if (wishlistItems.length === 0) {
        return (

            <div className="text-center py-16 md:py-20 text-lg md:text-xl text-gray-500">

                ❤️ Wishlist is empty

            </div>

        )
    }

    return (

        <div className="max-w-6xl mx-auto p-4 md:p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {wishlistItems.map((item) => (
                <div key={item.id} className="border p-4 rounded-lg bg-white shadow-sm">

                    <img
                        src={item.images?.[0]}
                        className="w-full h-44 sm:h-40 object-cover rounded"
                    />

                    <h3 className="mt-3 font-semibold line-clamp-2">
                        {item.title}
                    </h3>

                    <p className="text-red-500 font-semibold">
                        ₹ {item.price}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 mt-4">

                        <button
                            onClick={() => handleAddToCart(item)}
                            className="bg-green-500 text-white px-4 py-2 rounded w-full"
                        >
                            Add to Cart
                        </button>

                        <button
                            onClick={() => handleRemove(item)}
                            className="bg-red-500 text-white px-4 py-2 rounded w-full"
                        >
                            Remove
                        </button>

                    </div>

                </div>
            ))}

        </div>

    )

}