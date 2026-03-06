"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";

export default function ProductDetails() {

  const { id } = useParams();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    if (!id) return;

    axios
      .get(
        `https://appy.trycatchtech.com/v3/maganlalchikki/product_list?category_id=1=${id}`
      )
      .then((res) => {

        console.log(res.data);
        console.log(res.data);

        // ✅ correct data
        setProducts(res.data || []);

        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });

  }, [id]);

  if (loading) {
    return (
      <h1 className="text-center text-2xl p-10">
        Loading products...
      </h1>
    );
  }

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 p-6">

      {products.map((item) => (

        <div key={item.id} className="border p-4 rounded shadow">

          <img
            src={item.image}
            alt={item.name}
            className="w-full h-48 object-cover"
          />

          <h2 className="text-lg font-bold mt-3">
            {item.name}
          </h2>

          <p className="text-orange-600 font-bold">
            ₹{item.price}
          </p>

        </div>

      ))}

    </div>
  );
}