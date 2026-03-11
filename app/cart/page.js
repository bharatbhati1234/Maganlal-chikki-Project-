"use client";

import { useSelector, useDispatch } from "react-redux";
import {
    increaseQty,
    decreaseQty,
    removeFromCart
} from "@/store/slice/cart.slice";
import { showToast, hideToast } from "@/store/slice/toast.slice";


export default function CartPage() {

    const cartItems = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();

    const subtotal = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity, 0
    );

    const gst = Math.round(subtotal * 0.18);
    const platformFee = 15;
    const grandTotal = subtotal + gst + platformFee;

    return (

        <div className="max-w-7xl mx-auto p-10 grid md:grid-cols-3 gap-10">

            {/* LEFT CART ITEMS */}

            <div className="md:col-span-2 space-y-6">

                <h2 className="text-xl font-semibold">
                    Products : {cartItems.length}
                </h2>

                {cartItems.map((item) => (
                    <div
                        key={item.id}
                        className="flex gap-6 bg-white shadow rounded-lg p-5"
                    >

                        <img
                            src={item.images?.[0]}
                            className="w-24 h-24 rounded"
                        />

                        <div className="flex-1">

                            <h3 className="font-semibold">
                                {item.title}
                            </h3>

                            <p className="text-sm text-gray-500">
                                {item.small_description}
                            </p>

                            <p className="text-orange-600 mt-2">
                                Worth: ₹{item.price}
                            </p>

                            <div className="flex items-center gap-3 mt-3">

                                <button
                                    onClick={() => dispatch(decreaseQty(item.id))}
                                    className="px-3 py-1 bg-gray-200 rounded"
                                >
                                    -
                                </button>

                                <span>{item.quantity}</span>

                                <button
                                    onClick={() => dispatch(increaseQty(item.id))}
                                    className="px-3 py-1 bg-gray-200 rounded"
                                >
                                    +
                                </button>

                            </div>

                        </div>

                        <div className="flex flex-col justify-between">

                            <p className="font-semibold">
                                ₹{item.price * item.quantity}
                            </p>

                            <button
                                onClick={() => {
                                    dispatch(removeFromCart(item.id));

                                    dispatch(
                                        showToast({
                                            type: "remove",
                                            message: `${item.title} removed from cart`
                                        })
                                    );

                                    setTimeout(() => {
                                        dispatch(hideToast())
                                    }, 4000);

                                }}
                                className="bg-red-500 text-white px-3 py-1 rounded"
                            >
                                Remove
                            </button>

                        </div>

                    </div>
                ))}

            </div>

            {/* RIGHT SUMMARY */}

            <div className="bg-white shadow rounded-lg p-6 h-fit">

                <h2 className="font-semibold text-lg mb-4">
                    Payment Summary
                </h2>

                <div className="flex justify-between mb-2">
                    <span>Product ({cartItems.length} items)</span>
                    <span>₹{subtotal}</span>
                </div>

                <div className="flex justify-between mb-2">
                    <span>GST (18%)</span>
                    <span>₹{gst}</span>
                </div>

                <div className="flex justify-between mb-4">
                    <span>Platform Fee</span>
                    <span>₹{platformFee}</span>
                </div>

                <hr className="mb-4" />

                <div className="flex justify-between font-bold text-lg mb-4">
                    <span>Grand Total</span>
                    <span>₹{grandTotal}</span>
                </div>

                <button className="w-full bg-blue-500 text-white py-3 rounded-full">
                    Proceed to checkout
                </button>

            </div>

        </div>

    );
}