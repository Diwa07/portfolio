import Image from "next/image"
const Services = () => {
  return (
    <div className="w-full h-auto p-[0.2rem] md:p-[2rem] bg-[#f5f8fd]" id="Services" >

      <div className="text-3xl text-[#173b6c]  " >Services
      </div>
      <div className="h-1 w-[7rem] mt-[0.50rem] mb-5 bg-[#149ddd]" >

      </div>

      <div className="grid grid-cols-1 text-black md:grid-cols-2 xl:grid-cols-3 " >
        <div className="flex flex-col items-center justify-center h-auto p-3 mb-3 ">
          <div className=" mb-2 h-[18rem] w-[20rem] overflow-hidden   rounded-md bg-white ">
            <Image src="/web.gif" className="h-full " height={500} width={500} alt="" />
          </div>
          <strong className="flex justify-center text-lg " >Web Development</strong>
          <p>Revolutionize your business ideas using web development services for innovative and next-gen web apps.</p>
        </div>

        <div className="flex flex-col items-center justify-center h-auto p-3 mb-3 ">
          <div className=" mb-4 h-[18rem] w-[20rem] overflow-hidden   rounded-md bg-white ">
            <Image src="/androidapp.gif" className="h-full " height={500} width={500} alt="" />
          </div>
          <strong className="flex justify-center text-lg" >App Development</strong>
          <p>Develop scalable, engaging, and feature-rich mobile applications to achieve digital transformation.</p>
        </div>


        <div className="flex flex-col items-center justify-center h-auto p-3 mb-3 ">
          <div className=" mb-4 h-[18rem] w-[20rem] overflow-hidden   rounded-md bg-white ">
            <Image src="/webdesign.gif" className="h-full " height={500} width={500} alt="" />
          </div>
          <strong className="flex justify-center text-lg" >UI/UX Designing</strong>
          <p>We create catchy and charming design with the latest tools of designing to make it a best user-friendly experience.</p>
        </div>

        <div className="flex flex-col items-center justify-center h-auto p-3 mb-3 ">
          <div className=" mb-4 h-[18rem] w-[20rem] overflow-hidden   rounded-md bg-white ">
            <Image src="/seo.gif" className="h-full " height={500} width={500} alt="" />
          </div>
          <strong className="flex justify-center text-lg" >SEO</strong>
          <p>We determine Websites Health, Removal of 404 Pages, Removal of Zombie Pages, Better Visitor’s Stay Time, Content Marketing Attract.</p>
        </div>

        <div className="flex flex-col items-center justify-center h-auto p-3 mb-3 ">
          <div className=" mb-4 h-[18rem] w-[20rem] overflow-hidden   rounded-md bg-white ">
            <Image src="/uiux.gif" className="h-full " height={500} width={500} alt="" />
          </div>
          <strong className="flex justify-center text-lg" >Digital Marketing </strong>
          <p>Our goal is to make sense of your data with our Data Analysis, so you can steer your business in the right direction</p>
        </div>


        <div className="flex flex-col items-center justify-center h-auto p-3 mb-3 ">
          <div className=" mb-4 h-[18rem] w-[20rem] overflow-hidden   rounded-md bg-white ">
            <Image src="/graphics.gif" className="h-full " height={500} width={500} alt="" />
          </div>
          <strong className="flex justify-center text-lg" >Graphics Design</strong>
          <p>We'll design world-class graphics for events, content, social media, flayers, business cards, and company profiles.</p>
        </div>



      </div>
      <div className="mb-4 rounded-xl bg-slate-500">
       
        <div className=" relative h-[15rem] overflow-hidden rounded-xl w-full" >  <Image src="/light.jpg" className="h-[25rem]    w-full rounded-xl opacity-70 hover:scale-150 hover:opacity-100 " height={500} width={500} alt="" />
      
      <div  className="absolute  text-[#FFFFED] flex  bottom-2 p-[1rem]">  
    
      <strong >We are committed to delivering a wide range of professional services tailored to your specific needs. Whether you require web development, graphic design, content writing, or any other freelance services, our team of experts is here to assist you. With years of experience and a dedication to quality, we take pride in our ability to meet and exceed your expectations. Feel free to connect with us for all your freelancing needs, and let us help you achieve your goals with professionalism and expertise.</strong>
        </div> 
        </div>

      </div>

    </div>

  )
}

export default Services