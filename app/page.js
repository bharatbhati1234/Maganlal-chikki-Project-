
// Home page ------------------------------------------------------------

import HeroSlider from "@/components/Hero-Slider"    // slider ko import kiya hai home page me 
import BannerSection from "@/components/Banner-Section"  // 3 images gallery ko import kiya hai home page me 
import Products from "./products/page"            // products ko import kiya hai home page pe 

export default function Example() {
 

  return (
    <div className="">
     <HeroSlider/>                  {/* slider ko call kiya hai home page me */}
      <BannerSection/>                  {/* 3 images gallery ko call kiya hai home page me */}
      <Products/>                        {/* products ko call kiya hai home page me */}

      <h1>hero section</h1>
    </div>
  )
}
