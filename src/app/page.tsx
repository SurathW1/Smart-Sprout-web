import { SiteHeader } from "@/components/site-header"
import { SiteCarousel } from "@/components/SiteCarousel"
import  Scrolldownpage  from "@/components/Scrolldownpage"


export default function Home() {

  return (
    <div>
      <SiteHeader />
      <SiteCarousel/>
      <Scrolldownpage/>   
    </div>
  )
}
