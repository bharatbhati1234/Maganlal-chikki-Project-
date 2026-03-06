"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function CategorySidebar({ setCategory }) {

    const [categories, setCategories] = useState([]);

    useEffect(() => {

        axios.get("https://appy.trycatchtech.com/v3/maganlalchikki/category_list")

            .then((res) => {
                setCategories(res.data.data)
            })

    }, [])

    return (

        <div>

            <h2 className="font-bold mb-4">Categories</h2>

            {categories.map((cat) => (

                <button
                    key={cat.id}
                    onClick={() => setCategory(cat.id)}
                    className="block w-full text-left py-2"
                >

                    {cat.category_name}

                </button>

            ))}

        </div>

    )

}