
import Home from "./Components/home"

import Aboutus from "./About/page"
import Services from "./Services/page"
import Portfolio from "./portfolio/page"
import Contact from "./Contact/page"


const Page = () => {
  return (
    <div className="bg-[gray] h-screen w-full    " >

<Home  />
<Aboutus  />
<Services/>
<Portfolio/>
<Contact/>
    </div>
  )
}

export default Page