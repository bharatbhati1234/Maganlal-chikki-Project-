"use client";

import { useDispatch } from "react-redux";
import { addToWishlist } from "@/store/slice/wishlist.slice";
import { showToast, hideToast } from "@/store/slice/toast.slice";

export default function AddToWishlistButton({ product }) {

    const dispatch = useDispatch();

    const handleWishlist = () => {

        dispatch(addToWishlist(product));

        dispatch(
            showToast({
                type: "success",
                message: `${product.title} added to wishlist`
            })
        );

        setTimeout(() => {
            dispatch(hideToast())
        }, 2000);

    };

    return (

        <button
            onClick={handleWishlist}
            className="border px-4 py-2 rounded hover:bg-gray-100"
        >

            ❤️ Wishlist

        </button>

    );

}