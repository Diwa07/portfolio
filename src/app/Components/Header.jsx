
import Image from "next/image"
import Link from "next/link"
import { FaSquareTwitter, FaInstagram, FaBook } from 'react-icons/fa6'
import { FaFacebookSquare, FaLinkedin, FaGithub } from 'react-icons/fa'
import { AiFillHome } from 'react-icons/ai'
import { IoMdContacts } from 'react-icons/io'
import { MdMiscellaneousServices, MdOutlinePeopleAlt } from 'react-icons/md'

const Header = () => {
   
    return (
        <nav className=" bg-[#273644] w-[23%] h-screen fixed  invisible xl:visible grid grid-rows-2 text-[white]" >

            <div className="flex flex-col items-center justify-center pt-5 ">
                <div className="h-[15rem] rounded-full overflow-hidden  w-[15rem] bg-red  border-[#dad8d8] border-[7px] ">
                    <Image src="/me.jpeg" className="w-full h-full " height={500} width={500} alt="" />

                </div> <strong className="mt-3 text-3xl">Diwakar khatiwada</strong> <div className="  flex text-3xl mt-3 gap-[1rem]">

                <Link href="https://www.linkedin.com/in/diwakarkhatiwada" > <FaLinkedin /> </Link>

                <Link href="https://github.com/Diwa07" >  <FaGithub /></Link>
                       
                 
                    
                    <button >
                        <FaSquareTwitter />
                    </button>

                </div>
            </div>
            <div >
                <div className="grid w-full h-full grid-rows-5 text-2xl ">
                    <Link href="/" >  <li className="flex items-center justify-center h-full gap-4 hover:bg-blue-600 "><AiFillHome /> Home</li></Link>
                    <Link href="#Aboutus" >    <li className="flex items-center justify-center h-full gap-4 hover:bg-blue-600 "> <MdOutlinePeopleAlt />About</li></Link>
                    <Link href="#Services" >   <li className="flex items-center justify-center h-full gap-4 hover:bg-blue-600 "><MdMiscellaneousServices />Services</li></Link>
                    <Link href="#portfolio" >  <li className="flex items-center justify-center h-full gap-4 hover:bg-blue-600 "><FaBook />portfolio</li></Link>
                    <Link href="#Contact" >  <li className="flex items-center justify-center h-full gap-4 hover:bg-blue-600"><IoMdContacts />Contact</li></Link>



                </div>

            </div>


        </nav>

    )
}

export default Header