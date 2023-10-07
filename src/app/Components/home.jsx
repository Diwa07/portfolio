'use client';
import { useState } from 'react';
import { Typewriter, Cursor } from 'react-simple-typewriter';
import Image from 'next/image';

import { ImCross } from 'react-icons/im'
import { GiHamburgerMenu } from 'react-icons/gi'
import Link from "next/link"
import { FaSquareTwitter, FaInstagram, FaBook } from 'react-icons/fa6'
import { FaFacebookSquare, FaLinkedin, FaGithub } from 'react-icons/fa'
import { AiFillHome } from 'react-icons/ai'
import { IoMdContacts } from 'react-icons/io'
import { MdMiscellaneousServices, MdOutlinePeopleAlt } from 'react-icons/md'

const Home = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="relative w-full xl:h-full xl:w-full ">
      

<button className='absolute top-0 z-50 flex visible xl:invisible md:right-hidden' onClick={() => setActive(!active)}>


          {
            active ? (
              <div> 
                    
                  <nav className=" bg-[#273644] w-[100%] h-screen fixed   text-[white]" onClick={() => setActive(false)}  >
                <p className='text-4xl '> <ImCross className=' hover:bg-red-600' /></p>  
                <div className='grid h-full grid-rows-2   mt-[-4rem]'>
              <div className="flex flex-col items-center justify-center ">
              
                  <div className="md:h-[15rem] h-[7rem] w-[7rem] rounded-full overflow-hidden  mb-7 md:w-[15rem] bg-red  border-[#dad8d8] border-[7px] ">
                      <Image src="/me.jpeg" className="w-full h-full " height={500} width={500} alt="" />
  
                  </div> <strong className="mt-3 text-3xl">Diwakar khatiwada</strong> <div className="  flex text-3xl mt-3 gap-[1rem]">
  
                  <Link href="https://www.linkedin.com/in/diwakarkhatiwada" > <FaLinkedin /> </Link>
  
                  <Link href="https://github.com/Diwa07" >  <FaGithub /></Link>
                         
                   
                      
                      <button >
                          <FaSquareTwitter />
                      </button>
  
                  </div>
              </div>
     
                  <div className="grid w-full  mt-[-4rem] h-full grid-rows-5 text-2xl ">
                      <Link href="/" >  <li className="flex items-center justify-center h-full gap-4 hover:bg-blue-600 "><AiFillHome /> Home</li></Link>
                      <Link href="#Aboutus" >    <li className="flex items-center justify-center h-full gap-4 hover:bg-blue-600 "> <MdOutlinePeopleAlt />About</li></Link>
                      <Link href="#Services" >   <li className="flex items-center justify-center h-full gap-4 hover:bg-blue-600 "><MdMiscellaneousServices />Services</li></Link>
                      <Link href="#portfolio" >  <li className="flex items-center justify-center h-full gap-4 hover:bg-blue-600 "><FaBook />portfolio</li></Link>
                      <Link href="#Contact" >  <li className="flex items-center justify-center h-full gap-4 hover:bg-blue-600"><IoMdContacts />Contact</li></Link>
  
  
  
                  </div>
  
              
              </div>
  
  
          </nav></div>
         
              
             
              

              
            ) : (
              <p className='flex  text-4xl ml-1  text-[#2d4175] '><GiHamburgerMenu />  </p>
            )
          }


        </button>
      <title>My portfolio</title>
    

        


        <Image className="w-full h-full opacity-50 xl:h-screen sm:w-full xl:w-full" src="/bgs.jpg" width="500" height="500" alt="" />
     
      <div className=" absolute sm:top-[7rem] sm:left-10   xl:left-[10rem] xl:top-[27rem] md:left-[5rem] top-[6rem] left-[4rem] md:top-[3rem] lg:top-[15rem] text-[1rem] md:text-4xl lg:text-5xl">

        <strong className='text-[white]  text-[1.5rem] md:text-5xl lg:text-7xl ' >Diwakar Khatiwada</strong>

        <p className='text-[#132043] mt-1 md:mt-4 font-medium '> &nbsp; &nbsp; I'M  &nbsp;

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
