import Loader from "@/components/loading";
import CategorySections from "@/components/Products";
import PageBanner from "@/components/PageBanner";
import { Suspense } from "react";


export default async function Shop() {

  return (
    <div className="min-h-screen">

      <Suspense fallback={<Loader />}>

        <PageBanner title="Shop"/>

        <CategorySections />

      </Suspense>

    </div>
  );
}