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

            <div className="text-center py-20 text-xl text-gray-500">

                ❤️ Wishlist is empty

            </div>

        )
    }

    return (

        <div className="max-w-6xl mx-auto p-10 grid md:grid-cols-3 gap-6">

            {wishlistItems.map((item) => (
                <div key={item.id} className="border p-4 rounded-lg">

                    <img
                        src={item.images?.[0]}
                        className="w-full h-40 object-cover"
                    />

                    <h3 className="mt-3 font-semibold">
                        {item.title}
                    </h3>

                    <p className="text-red-500">
                        ₹ {item.price}
                    </p>

                    <div className="flex gap-3 mt-4">

                        <button
                            onClick={() => handleAddToCart(item)}
                            className="bg-green-500 text-white px-4 py-2 rounded"
                        >
                            Add to Cart
                        </button>

                        <button
                            onClick={() => handleRemove(item)}
                            className="bg-red-500 text-white px-4 py-2 rounded"
                        >
                            Remove
                        </button>

                    </div>

                </div>
            ))}

        </div>

    )

}