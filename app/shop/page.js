import Loader from "@/components/loading";
import CategorySections from "@/components/Products";
import { Suspense } from "react";

export default async function Shop() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <CategorySections />
      </Suspense>
    </>
  );
}
