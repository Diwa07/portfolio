'use client';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Image from "next/image"
const Portfolio = () => {

  return (
    <div className="w-full  p-[2rem] h-full  bg-white" id="portfolio" >

      <div className="text-3xl text-[#173b6c] h-full  " >Portfolio
      <div className="h-1 w-[7rem] mt-[0.50rem] mb-5 bg-[#149ddd]" >

</div>
<div className=' w-full h-[37rem]  '>
        <Swiper className='h-full'
      
      modules={[Navigation, Pagination,Autoplay, Scrollbar, A11y]}
      spaceBetween={5}
      slidesPerView={1}
      navigation
      autoplay={{ delay: 3000 }}
      loop={true}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><Image className="w-full h-full " src="/a.png" width = "500" height="500" alt="" /></SwiperSlide>
      <SwiperSlide><Image className="w-full h-full " src="/b.png" width = "500" height="500" alt="" /></SwiperSlide>
      <SwiperSlide><Image className="w-full h-full " src="/c.png" width = "500" height="500" alt="" /></SwiperSlide>
      <SwiperSlide><Image className="w-full h-full " src="/d.png" width = "500" height="500" alt="" /></SwiperSlide>
      <SwiperSlide><Image className="w-full h-full " src="/e.png" width = "500" height="500" alt="" /></SwiperSlide>
      <SwiperSlide><Image className="w-full h-full " src="/f.png" width = "500" height="500" alt="" /></SwiperSlide>
      <SwiperSlide><Image className="w-full h-full " src="/g.png" width = "500" height="500" alt="" /></SwiperSlide>
      ...
    </Swiper>

      </div>
      </div>
    


     





    </div>
  )
}

export default Portfolio