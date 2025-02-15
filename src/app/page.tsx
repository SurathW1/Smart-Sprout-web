import { SiteHeader } from "@/components/site-header"
import { SiteCarousel } from "@/components/SiteCarousel"
import AboutUs from "@/components/AboutUs"

export default function Home() {

  return (
    <div>
      <SiteHeader />
      <SiteCarousel/>
      <AboutUs/>
    </div>
  )
}

