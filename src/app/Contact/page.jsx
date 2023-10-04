import { MdMarkEmailRead } from 'react-icons/md'
import { FaLocationDot, FaLinkedin } from 'react-icons/fa6'
const Contact = () => {
  return (
    <div className="w-full  p-[2rem] bg-[#f5f8fd]" id="Contact" >


      <div className="text-3xl text-[#173b6c]  " >Contact
      </div>
      <div className="h-1 w-[7rem] mt-[0.50rem] mb-5 bg-[#149ddd]" >

      </div>
      <div className="grid h-full grid-cols-2 " >
        <div className='text-[#f5f8fd] flex flex-col justify-between ' > .
          <div  >
            <strong className="flex justify-center  item-center text-3xl text-[#535379] mb-[3rem]" > Get in touch</strong>
            <label className='flex items-center gap-5 text-red-600 mb-7 text-7xl ' >
              <MdMarkEmailRead /> <strong className='text-2xl text-gray-600 ' >khatiwadadiwakar07@gmail.com</strong>
            </label>
            <label className='flex gap-5 text-red-600 text-7xl ' >
              <FaLocationDot /> <strong className='text-2xl text-gray-600 ' >pepsicola, kathmandu ,Nepal</strong>
            </label></div>
<p>.</p>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-lg ">
          <h2 className="mb-1 text-2xl font-semibold">Contact Us</h2>
          <p className='mb-4 ' >Ready to Work Together? Build a project with us!</p>
          <form >
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-600">Name</label>
              <input
                type="text"
                id="name"
                name="name"


                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600">Email</label>
              <input
                type="email"
                id="email"
                name="email"


                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-600">Message</label>
              <textarea
                id="message"
                name="message"


                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                rows="4"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none"
              >
                Send Message
              </button>
            </div>
          </form>


        </div>
      </div>



    </div>
  )
}

export default Contact