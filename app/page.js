
// Home page ------------------------------------------------------------

import HeroSlider from "@/components/Hero-Slider"    // slider ko import kiya hai home page me 
import HomeBanner from "@/components/HomeBanner"  // 3 images gallery ko import kiya hai home page me 
import CategorySections from "@/components/Products"  // jo home page pe sab products with category hai unko import kiya hai 
export default function Example() {
 

  return (
    <div className="">
     <HeroSlider/>                  {/* slider ko call kiya hai home page me */}
      <HomeBanner/>                  {/* 3 images gallery ko call kiya hai home page me */}
      <CategorySections/>             {/* CategorySections jo home page pe hai sab products with Categories ko call kiya hai home page me */}

    </div>
  )
}
