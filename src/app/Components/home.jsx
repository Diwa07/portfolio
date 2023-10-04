'use client';
import { Typewriter, Cursor } from 'react-simple-typewriter';
import Image from 'next/image';

const Home = () => {
  

  return (
    <div className="overflow-hidden">
      <title>My portfolio</title>
      <div className="relative">
        <Image className="w-full h-full opacity-50" src="/bgs.jpg" width="500" height="500" alt="" />
      </div>
      <div className="p-[9rem] absolute top-[15rem] text-5xl">
<strong className='text-[white] o text-7xl ' >Diwakar Khatiwada</strong>

<p className='text-[#132043] mt-4 font-medium '> &nbsp; &nbsp; I'M  &nbsp; 
   
       <span className='text-[#132043] underline font-bold ' >
          <Typewriter  
          words = {['Web Developer','Web Desiginer','Freelancer']}
          loop 
          cursor
          cursorStyle =''
          typeSpeed={70}
          deleteSpeed={400}
          delaySpeed={1000}
          />
        </span>
         <Cursor/> 
         </p>
      </div>
      <div></div>
    </div>
  );
};

export default Home;
