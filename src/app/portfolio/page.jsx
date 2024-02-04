'use client';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Image from "next/image";

const Portfolio = () => {
  return (
    <div className="w-full p-[2rem] bg-white" id="portfolio">
      <div className="text-xl sm:text-3xl md:text-4xl text-[#173b6c]">Portfolio</div>
      <div className="h-1 w-16 sm:w-[7rem] mt-2 mb-5 bg-[#149ddd]"></div>
      <div className="w-full h-[auto] sm:h-[37rem]">
        <Swiper
          className="h-full"
          modules={[Navigation, Pagination, Autoplay, Scrollbar, A11y]}
          spaceBetween={5}
          slidesPerView={1}
       
          autoplay={{ delay: 3000 }}
          loop={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
              <SwiperSlide>
              <SwiperSlide>
            <Image className="w-full h-full" src="/a1.png" width={500} height={500} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <Image className="w-full h-full" src="/b1.png" width={500} height={500} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <Image className="w-full h-full" src="/c1.png" width={500} height={500} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <Image className="w-full h-full" src="/d1.png" width={500} height={500} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <Image className="w-full h-full" src="/e1.png" width={500} height={500} alt="" />
          </SwiperSlide>
            <Image className="w-full h-full" src="/login.PNG" width={500} height={500} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <Image className="w-full h-full" src="/register.PNG" width={500} height={500} alt="" />
          </SwiperSlide>
  
          <SwiperSlide>
            <Image className="w-full h-full" src="/message.PNG" width={500} height={500} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <Image className="w-full h-full" src="/logout.PNG" width={500} height={500} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <Image className="w-full h-full" src="/eg2.PNG" width={500} height={500} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <Image className="w-full h-full" src="/eg4.png" width={500} height={500} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <Image className="w-full h-full" src="/b.png" width={500} height={500} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <Image className="w-full h-full" src="/c.png" width={500} height={500} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <Image className="w-full h-full" src="/d.png" width={500} height={500} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <Image className="w-full h-full" src="/e.png" width={500} height={500} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <Image className="w-full h-full" src="/f.png" width={500} height={500} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <Image className="w-full h-full" src="/g.png" width={500} height={500} alt="" />
          </SwiperSlide>
          {/* Add more slides as needed */}
        </Swiper>
      </div>
    </div>
  );
};

export default Portfolio;
