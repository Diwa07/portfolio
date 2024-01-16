"use client"
import { MdMarkEmailRead } from 'react-icons/md';
import axios from 'axios';
import { useState } from 'react';
import { FaLocationDot, FaLinkedin } from 'react-icons/fa6';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://portfolio-ea33c-default-rtdb.asia-southeast1.firebasedatabase.app/try.json', JSON.stringify(formData), {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      toast.success("Thank you for reaching out. we look forward to contacting you very soon ");
      // Handle success or other logic here
    } catch (error) {
    toast.error("something went wrong")
      // Handle error logic here
    }
  };


  
    
 return (
    <div className="w-full  p-4 border sm:p-[2rem] bg-[#f5f8fd]" id="Contact">
       <ToastContainer />
      <div className="text-xl sm:text-3xl md:text-4xl text-[#173b6c]">Contact</div>
      <div className="h-1 w-16 sm:w-[7rem] mt-2 mb-5 bg-[#149ddd]"></div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="text-[#f5f8fd] flex flex-col justify-between">
          <div className='' >
            <strong className="flex justify-center items-center text-2xl sm:text-3xl text-[#535379] mb-4 sm:mb-8">
              Get in touch
            </strong>
            <label className="flex items-center gap-2 mb-4 text-xl text-gray-600 sm:gap-5 sm:text-2xl">
              <MdMarkEmailRead />
              <strong>khatiwadadiwakar07@gmail.com</strong>
            </label>
            <label className="flex items-center gap-2 text-xl text-gray-600 sm:gap-5 sm:text-2xl">
              <FaLocationDot />
              <strong>pepsicola, kathmandu, Nepal</strong>
            </label>
          </div>
        </div>

        <div className="p-4 bg-white rounded-lg shadow-lg sm:p-6">
          <h2 className="mb-2 text-2xl font-semibold sm:text-3xl">Contact Us</h2>
          <p className="mb-4 text-base sm:text-lg">Ready to Work Together? Build a project with us!</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-600">Name</label>
              <input
                type="text"
                name='name'
                value={formData.name} onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600">Email</label>
              <input
                value={formData.email} onChange={handleChange}
                type="email"
           name="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-600">Message</label>
              <textarea
                  name="message"
                  value={formData.message} onChange={handleChange}
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
  );
};

export default Contact;