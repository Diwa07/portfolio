import Image from "next/image"
const Aboutus = () => {
  return (
    <main className="w-full h-auto  bg-white p-[1rem]" id="Aboutus">
      <div className="h-full p-2 " >
      
        <div classname="p-[1rem]" >
          <div className="text-3xl  text-[#173b6c]  " >About
            <div className="h-1 w-[7rem] mt-[0.50rem] mb-2 bg-[#149ddd]" >
            </div>
            <p className=" text-xl text-[#292828]  ">Looking forward to an opportunity in an atmosphere where I can make a difference, and not
            just be another payroll the figure, with an ambitious pace and desire to scale the peaks of
            professional excellence. I am adaptable to any challenges and will be thrilled to work .
          </p>
          </div>
        </div>
<div>
<div className="grid h-auto grid-cols-2 mt-4 ">
  <div>

  <Image src="/about.jpeg" className="object-cover h-[33rem] rounded-md " height={200} width={500} alt="" />    
  </div>
          
      <div> <strong className="flex justify-center text-[#173b6c]  text-2xl">FullStack and UI/UX Developer </strong>
      <br/>
      <p className="mb-2 text-lg font-medium  text-[#3f5d6b] ">"Hello, I'm Diwakar Khatiwada, an experienced Full Stack Developer with a strong flair for UI/UX design. Over the past few years, I've honed my skills and expertise in various technologies, including React, Next.js, MongoDB, Node.js, and Express. My passion lies in creating seamless user experiences and translating innovative ideas into functional web applications.
<br/>
I've had the privilege of working on diverse projects, collaborating with teams to deliver high-quality software solutions. My proficiency extends beyond coding; I also have a creative side, allowing me to design stunning interfaces using tools like Figma and Photoshop.
<br/>
Now, I'm excited to announce that I'm ready to take on freelance opportunities. Whether it's building robust web applications or designing captivating user interfaces, I'm eager to bring my skills to your project. Let's work together to turn your vision into reality."
          </p>
        </div>    
        

         
        </div>
</div>
        
       


      </div>


    </main>

  )
}

export default Aboutus
