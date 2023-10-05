import Image from "next/image";

const Aboutus = () => {
  return (
    <main className="w-screen p-0 bg-white xl:w-full md:p-8" id="Aboutus">
      <div className="p-2 md:p-4">
        <div>
          <div className="text-xl md:text-3xl text-[#173b6c]">
            About
            <div className="h-1 w-16 md:w-[7rem] mt-2 mb-2 bg-[#149ddd]"></div>
            <p className="text-md w-screen sm:w-full md:text-lg text-[#292828]">
              Looking forward to an opportunity in an atmosphere where I can make a difference, and not just be another payroll figure, with an ambitious pace and desire to scale the peaks of professional excellence. I am adaptable to any challenges and will be thrilled to work.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 mt-4 gap-7 xl:grid-cols-2">
          <div>
            <Image src="/about.jpeg" className="object-cover  lg:w-full flex  h-[33rem] rounded-md" height={400} width={800} alt="" />
          </div>
          <div>
            <strong className="text-[#173b6c] text-xl md:text-2xl">FullStack and UI/UX Developer</strong>
            <br />
            <p className="text-md md:text-lg font-medium text-[#3f5d6b]">
              "Hello, I'm Diwakar Khatiwada, an experienced Full Stack Developer with a strong flair for UI/UX design. Over the past few years, I've honed my skills and expertise in various technologies, including React, Next.js, MongoDB, Node.js, and Express. My passion lies in creating seamless user experiences and translating innovative ideas into functional web applications.
              <br />
              I've had the privilege of working on diverse projects, collaborating with teams to deliver high-quality software solutions. My proficiency extends beyond coding; I also have a creative side, allowing me to design stunning interfaces using tools like Figma and Photoshop.
              <br />
              Now, I'm excited to announce that I'm ready to take on freelance opportunities. Whether it's building robust web applications or designing captivating user interfaces, I'm eager to bring my skills to your project. Let's work together to turn your vision into reality."
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Aboutus;
