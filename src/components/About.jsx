import React from 'react'
import { ArrowDownToLine } from 'lucide-react';
const About = ({dark, setDark}) => {
  return (
    <section
      id="about"
      className=" text-black/70 py-19 px-4 sm:px-8 md:px-15 lg:px-20"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-5  items-center">

        {/* Left Side */}
        <div className='flex justify-center lg:justify-start ]'>
        <div className="relative flex justify-center w-full max-w-105 min-h-105px lg:min-h-138 ">
          <div className=" w-full max-w-105 h-92 sm:h-112 md:h-117 mt-16
  rounded-[40px]
  bg-white/20
  backdrop-blur-xl
  border border-cyan-200">

    <img
    src="/image.jpeg"
    alt=""
    className=" absolute bottom-0 z-10 h-110 w-auto   sm:h-137 md:h-145 object-cover drop-shadow-2xl "
  />
  </div>

  
        </div>
</div>
        {/* Right Side */}
        <div className='mt-15 md:mt-0 flex flex-col justify-center text-center lg:text-left w-full'>
          <h2 className={`text-black text-wrap text-3xl
sm:text-4xl
lg:text-5xl font-bold mb-2 gap-3 
            ${
              dark?'text-black':'text-white'
            }
            
            `}>
            About <span className='text-indigo-600'>Me</span>
          </h2>

            <h2 className={`text-xl sm:text-2xl font-bold mb-6
              ${
      dark ? '  text-gray-700 ': ' text-gray-300  '
    }
              `}>
            Frontend React Developer
          </h2>

          <p
           className={`  leading-8 mb-6 text-base sm:text-lg font-normal
           
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
              <h3 className="text-indigo-600  font-semibold">Name</h3>
              <p className={`${dark? 'text-black':'text-white'}`}>Umer Zaman</p>
            </div>

            <div>
              <h3 className="text-indigo-600  font-semibold">Email</h3>
              <p className={`${dark? 'text-black':'text-white'}`}>umer127300@gmail.com</p>
            </div>

            <div>
              <h3 className="text-indigo-600  font-semibold">Location</h3>
              <p className={`${dark? 'text-black':'text-white'}`}>Pakistan</p>
            </div>

            <div>
              <h3 className="text-indigo-600  font-semibold">Experience</h3>
              <p className={`${dark? 'text-black':'text-white'}`}>Frontend Developer</p>
            </div>
          </div>
         <div className='flex justify-center lg:justify-start px-8' >
          <a 
           href="/Umer cv.pdf"
      download="Umer cv.pdf"
          
          className={`text-black w-full lg:w-fit px-6 py-3 rounded-full font-bold  active:scale-95 transition-all duration-500 hover:scale-110 flex gap-2 justify-center  border border-solid border-black/15 
                ${
            dark? 'text-black bg-white hover:text-indigo-600  ':'text-white  bg-[#334155] hover:text-white '
           } 
            

            `}
              
            >
            Download CV
           <ArrowDownToLine />
          </a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About