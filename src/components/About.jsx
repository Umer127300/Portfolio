import React from 'react'
import { ArrowDownToLine } from 'lucide-react';
const About = ({dark, setDark}) => {
  return (
    <section
      id="about"
      className=" text-black/70 py-19 px-4 sm:px-8 md:px-15 lg:px-20"
    >
      <div className="max-w-7xl  grid lg:grid-cols-[40%_60%] gap-5  items-center">

        {/* Left Side */}
        <div className='flex justify-center lg:justify-start ]'>
        <div className="relative flex justify-center w-full max-w-87 min-h-105 lg:min-h-138 ">
          <div className={ `w-full max-w-87 h-92 sm:h-112 md:h-117 mt-16
  rounded-3xl
  backdrop-blur-xl
  border border-cyan-200
  ${
    dark? 'bg-[#E6FCFF]':'bg-[#0B1020]'
  }
  `}>

    <img
    src="/image.jpeg"
    alt=""
    className=" absolute bottom-0 z-10 h-110 max-w-87   sm:h-134 md:h-142 object-cover drop-shadow-2xl "
  />
  </div>

  
        </div>
</div>
        {/* Right Side */}
        <div className='mt-15 md:mt-0 flex flex-col justify-center text-center lg:text-left w-full'>
              <h2 className="text-[#1de849] text-sm tracking-[0.2rem] uppercase font-medium pl-6">
 who i am
</h2>
          <h2 className={`text-black text-wrap text-3xl mt-2
md:text-4xl font-bold mb-4 gap-3 
            ${
              dark?'text-black':'text-white'
            }
            
            `}>
            About <span className='text-[#21CDE8]'>Me</span>
          </h2>

          
          <p
           className={`  leading-8 mb-6 text-base sm:text-md font-normal
           
           ${
            dark? 'text-black/70':'text-white/70'
           }
           
           `}>
            Hi, I'm <span className={` font-semibold mx-1
                ${
            dark? 'text-black':'text-white '
           }
              
              `}>Umer Zaman</span>
            . I'm passionate about creating modern, responsive and
            user-friendly websites using React, Tailwind CSS and JavaScript.
            I love building beautiful interfaces and solving real-world
            problems through code.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div>
              <h3 className="text-[#44bccf]  font-semibold">Name</h3>
              <p className={`${dark? 'text-black':'text-white'}`}>Umer Zaman</p>
            </div>

            <div>
              <h3 className="text-[#44bccf]   font-semibold">Email</h3>
              <p className={`${dark? 'text-black':'text-white'}`}>umer127300@gmail.com</p>
            </div>

            <div>
              <h3 className="text-[#44bccf]   font-semibold">Location</h3>
              <p className={`${dark? 'text-black':'text-white'}`}>Pakistan</p>
            </div>

            <div>
              <h3 className="text-[#44bccf]   font-semibold">Experience</h3>
              <p className={`${dark? 'text-black':'text-white'}`}>Frontend Developer</p>
            </div>
          </div>
         <div className='flex justify-center lg:justify-start px-8' >
          <a 
           href="/Umer cv.pdf"
      download="Umer cv.pdf"
          
          className={`text-black w-full lg:w-fit px-6 py-3 rounded-full font-bold text-md  active:scale-95 transition-all duration-500 hover:scale-110 flex gap-2 justify-center  border border-solid border-black/15 
                ${
            dark? 'text-black bg-white hover:text-[#44bccf]  ':'text-white  bg-[#1A2236]/90 hover:text-white '
           } 
            

            `}
              
            >
            Download CV
           <ArrowDownToLine className='text-sm '/>
          </a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About