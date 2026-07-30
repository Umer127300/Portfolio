import React from 'react'
import { ArrowDownToLine } from 'lucide-react';
import { FaJs, FaReact,  FaGithub, FaLightbulb } from "react-icons/fa6";
import { SiTailwindcss, } from "react-icons/si";
import { IoMdColorPalette } from "react-icons/io";
const About = ({dark, setDark}) => {
   const tools = [
         {Name:"React Development", 
          icon: <FaReact className=" text-2xl sm:text-4xl text-white" />,
          bgColor:'bg-[#00d4ff]',
          color:'text-cyan-500'
        },
        {Name:"JavaScript (ES6+)",
         icon: <FaJs className=" text-2xl sm:text-4xl text-yellow-400" />,
         bgColor:'bg-[#5b5135]',
         color:'text-yellow-600'
        },
        
        {Name:"Tailwind CSS", 
            icon: <SiTailwindcss className=" text-2xl sm:text-4xl text-white" />,
            bgColor:'bg-[#06b6d4]',
            color:'text-[#06b6d4]',
        },
      {Name:"GitHub",
                 icon:<FaGithub className={` text-2xl sm:text-4xl 
                  ${dark? ' text-black': 'text-white'}
                  `} />,
                   bgColor:`${dark?'bg-black/10':'bg-white/5'}`,
                   color:` 
                  ${dark? ' text-black': 'text-white'}
                  `
             },
             {Name:"UI/UX Focused", 
          icon: <IoMdColorPalette className=" text-2xl sm:text-4xl text-white" />,
          bgColor:'bg-purple-600',
          color:'text-purple-600'
        
        },
        {Name:"Problem Solving", 
          icon: <FaLightbulb className=" text-2xl sm:text-4xl text-white" />,
          bgColor:'bg-green-600',
        color:'text-green-600'
        }
      ];

  return (
    <section
      id="about"
      className=" text-black/70 py-19 px-4 sm:px-8 md:px-15 lg:px-20  "
    >
      <div className="max-w-7xl  grid lg:grid-cols-[40%_60%] gap-5  items-center">

        {/* Left Side */}
        <div className='flex justify-center lg:justify-start ]'>
        <div className="relative flex justify-center w-full max-w-87 min-h-105 lg:min-h-138 ">
          <div className={ `w-full max-w-87  h-107 sm:h-112 md:h-117 mt-16
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
    className=" absolute bottom-0 z-10 h-128 w-full  max-w-87   sm:h-134 md:h-142 object-cover drop-shadow-2xl "
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
                       <div className='relative'>
                        
                       <div className='grid sm:grid-cols-2 gap-5'>

                      {tools.map((elem, index)=>{
                       return   <div
                          key={index} 
                          className={`relative w-max-80 h-15 rounded-xl flex gap-3 py-2 border hover:border-2 hover:border-[#76e3f4] hover:-translate-y-1
                     items-center px-3 transition-all duration-500
                           ${dark?'bg-white text-black border-black/15':'bg-[#334155] text-white border-white/15 '}
                            `}>
                               <div className={`h-12 w-12 rounded-lg flex justify-center items-center flex-shrink-0
                          ${elem.bgColor}
                          `}>{elem.icon}</div> 
                        <div className={`flex justify-between items-center w-full
                           
                          `}><h3 className={`text-md font-bold  
                          ${elem.color}
                          `}>{elem.Name}</h3>
                        <h3>0{index+1}</h3>
                        </div>
                         
                         </div>
                        
                      })}
                      

            </div>
             
            </div>
          
         <div className='flex justify-center  px-10 mt-8 ' >
          <a 
           href="/Umer-cv.pdf"
      download="/Umer-cv.pdf"
          
          className={`text-black w-full lg:w-fit px-6 py-3 rounded-full font-bold text-md  active:scale-95 transition-all duration-500 hover:scale-110 flex gap-2 justify-center  border border-solid border-black/15 hover:text-[#44bccf] 
                ${
            dark? 'text-black bg-white  ':'text-white bg-[#334155]'
           } 
            

            `}
              
            >
            Download Resume
           <ArrowDownToLine className='text-sm '/>
          </a>
          </div>
          </div>
        </div>


    </section>
  )
}

export default About