"use client";

import { useDispatch } from "react-redux";
import { addToCart } from "@/store/slice/cart.slice";
import { showToast, hideToast } from "@/store/slice/toast.slice";
import { useRouter } from "next/navigation";

export default function AddToCartButton({ product }) {

    const router = useRouter();
    const dispatch = useDispatch();

    const handleAddToCart = () => {

        dispatch(addToCart(product));

        dispatch(
            showToast({
                message: `${product.title} added to cart`
            })
        );

        setTimeout(() => {
            dispatch(hideToast())
        }, 2000);

        router.push("/cart");

    };

    return (

        <button
            onClick={handleAddToCart}
            className="bg-red-600 text-white px-6 py-3 rounded-lg"
        >
            Add To Cart
        </button>

    );
}