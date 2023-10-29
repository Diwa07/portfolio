
import Home from "./Components/home"

import Aboutus from "./About/page"
import Services from "./Services/page"
import Portfolio from "./portfolio/page"
import Contact from "./Contact/page"
import GoogleAnalytics from "@bradgarropy/next-google-analytics"

const Page = () => {
  return (
    <div className="bg-[gray] h-screen w-full    " >
 <GoogleAnalytics measurementId="G-G1WVM8WWY9"/>
<Home  />
<Aboutus  /> 
<Services/>
<Portfolio/>
<Contact/>
    </div>
  )
}

export default Page