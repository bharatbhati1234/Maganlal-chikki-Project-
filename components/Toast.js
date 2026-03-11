"use client";

import { useSelector } from "react-redux";

export default function Toast() {

    const toast = useSelector((state) => state.toast);

    return (

        <div
            className={`fixed top-20 right-5 z-50 transform transition-all duration-500
${toast.show ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
`}
        >

            <div
                className={`px-6 py-3 rounded-lg shadow-lg text-white flex items-center gap-2
${toast.type === "success" ? "bg-green-500" : "bg-red-500"}
`}
            >

                <span className="text-lg">
                    {toast.type === "success" ? "✔" : "✖"}
                </span>

                <span>{toast.message}</span>

            </div>

        </div>

    )

}