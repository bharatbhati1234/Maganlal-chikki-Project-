// Single Product Page ------------------------------------------------------------------------

import AddToCartButton from "@/components/AddToCartButton";
import AddToWishlistButton from "@/components/AddToWishlistButton";
import { getProductsbyCategory } from "@/libs/api";

export default async function ProductDetail({ params }) {

  const { categorySlug, productSlug } = await params;   // ⭐ Next.js 16 me await required

  if (!categorySlug || !productSlug) {
    return <div>Invalid URL</div>;
  }

  const categoryId = categorySlug.split("-").pop();
  const productId = productSlug.split("-").pop();

  const products = await getProductsbyCategory(categoryId);

  const singleProduct = products.find((item) => item.id == productId);

  if (!singleProduct) {
    return <div>Product Not Found</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-10 grid md:grid-cols-2 gap-10">

      {/* Image */}
      <div>
        <img
          src={singleProduct.images?.[0]}
          alt={singleProduct.title}
          className="w-full rounded-lg"
        />
      </div>

      {/* Details */}
      <div className="space-y-4">

        <h1 className="text-3xl font-bold">
          {singleProduct.title}
        </h1>

        <p className="text-gray-600">
          {singleProduct.small_description}
        </p>

        <p className="text-gray-600">
          {singleProduct.full_description}
        </p>

        <p className="text-red-600 text-2xl font-semibold">
          ₹ {singleProduct.price}
        </p>

        <AddToCartButton product={singleProduct} />

      </div>

    </div>
  );
}