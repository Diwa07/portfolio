'use client';
import { useState } from 'react';
import { Typewriter, Cursor } from 'react-simple-typewriter';
import Image from 'next/image';

import { ImCross } from 'react-icons/im'
import { GiHamburgerMenu } from 'react-icons/gi'


const Home = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="w-full xl:h-full xl:w-full ">


      <title>My portfolio</title>
      <div className="relative ">

        <button className='h-[2rem] z-50 absolute right-0 md:right-hidden  w-[2rem] justify-center items-center flex bg-white' onClick={() => setActive(!active)}>


          {
            active ? (
              <p className='text-2xl' >
                <ImCross />


              </p>
            ) : (
              <p><GiHamburgerMenu />  </p>
            )
          }


        </button>


        <Image className="w-full h-full opacity-50 xl:h-screen sm:w-full xl:w-full" src="/bgs.jpg" width="500" height="500" alt="" />
      </div>
      <div className=" absolute  xl:left-[34rem] xl:top-[34rem] md:left-[5rem] top-0  md:top-[3rem] lg:top-[15rem] text-[1rem] md:text-4xl lg:text-5xl">

        <strong className='text-[white]  text-[1.5rem] md:text-5xl lg:text-7xl ' >Diwakar Khatiwada</strong>

        <p className='text-[#132043] mt-4 font-medium '> &nbsp; &nbsp; I'M  &nbsp;

          <span className='text-[#132043] underline font-bold ' >
            <Typewriter
              words={['Web Developer', 'Web Desiginer', 'Freelancer']}
              loop
              cursor
              cursorStyle=''
              typeSpeed={70}
              deleteSpeed={400}
              delaySpeed={1000}
            />
          </span>
          <Cursor />
        </p>
      </div>

    </div>
  );
};

export default Home;
