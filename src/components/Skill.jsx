import React from 'react'
import { FaHtml5, FaBootstrap,FaCss3Alt, FaJs, FaReact,  FaGithub, FaGitAlt  } from "react-icons/fa6";
import { SiTailwindcss,SiVite,SiNetlify, SiVercel  } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
const Skill = ({dark, setDark }) => {
   const skills = [
    {language:"HTML",
       icon: <FaHtml5 className=" text-2xl sm:text-4xl text-orange-500" />
    },
     { language:"CSS",
       icon: <FaCss3Alt className=" text-2xl sm:text-4xl text-blue-500" />
     },
      {language:"JavaScript",
       icon: <FaJs className=" text-2xl sm:text-4xl text-yellow-400" />
      },
      {language:"React", 
        icon: <FaReact className=" text-2xl sm:text-4xl text-cyan-400" />
      },
      {language:"Tailwind CSS", 
          icon: <SiTailwindcss className=" text-2xl sm:text-4xl text-cyan-400" />
      },
      {language:"Bootstrap",
         icon: <FaBootstrap className=" text-2xl sm:text-4xl text-purple-600" />
      },
      {language:"Vite",
         icon: <SiVite className=" text-2xl sm:text-4xl text-purple-600" />
      },
     
    ];

       const Tools=[
          {language:"Git",
           icon:<FaGithub className={` text-2xl sm:text-4xl 
            ${dark? ' text-black': 'text-white'}
            `} />
       },
           {language:"GitHub",
            icon:<FaGitAlt className=" text-2xl sm:text-4xl text-orange-600" />
      },
       {language:"VS Code",
           icon:< VscVscode className=" text-2xl sm:text-4xl text-blue-400" />
       },
       {language:"Netlify",
           icon:< SiNetlify  className=" text-2xl sm:text-4xl text-teal-500" />
       },
        {language:"Vercel",
           icon:< SiVercel  className=" text-2xl sm:text-4xl text-teal-500" />
       },
  
]

    
  return (
       <section
      id="skills"
      className=" text-white py-20 px-8 md:px-20"
      
    >
      <h2 className={`text-4xl font-bold text-center mb-6
        ${
          dark? 'text-black':'text-white'
        }
        `}>
        My <span className="text-indigo-600">Skills</span>
      </h2>
      <p className={`mb-10 text-center px:5 md:px-20
        ${dark? 'text-black/70': 'text-white/70'}
        
        `}>Focused on Frontend Development, I specialize in building responsive and modern web applications using React, Tailwind CSS, and JavaScript. I create clean, interactive, and user-friendly interfaces with a strong focus on performance, accessibility, and seamless user experiences.
</p>
<div  className=' grid md:grid-cols-2 items-center justify-center gap-12'>
      <div className={`flex flex-col justify-center items-center gap-6 w-full max-w-150 h-auto mx-auto  border border-solid border-black/2 rounded-2xl p-5 hover:border-indigo-300  hover:shadow-[0_10px_30px_rgba(99,102,241,0.35)] transition-all duration-500 hover:-translate-y-2 cursor-pointer  
          ${
            dark? 'bg-white text-black  ':'bg-gray-800  text-white/60 '
          }
        `}>
      <h3 className={ `text-xl md:text-2xl font-bold
          ${
            dark? ' text-black  ':'  text-white '
          }
          `}>Frontend</h3>
        <div className='grid grid-cols-3 md:grid-cols-4 gap-6 '>
        {skills.map(function(elem,index){
         return <div
          key={index}
         className='hover:scale-110 transition-all duration-500 '
          >
           <div className="flex justify-center mb-4">
        {elem.icon}
      </div>
            <h3 className="text-sm sm:text-md md:text-lg font-medium flex justify-center items-center">
              {elem.language}
            </h3>
          
          </div>
          })}
          </div>
      </div>



         <div className={`flex flex-col justify-between items-center gap-6 w-full max-w-150 h-auto mx-auto  border border-solid border-black/2 rounded-2xl p-5 hover:border-indigo-300  hover:shadow-[0_10px_30px_rgba(99,102,241,0.35)] transition-all duration-500 hover:-translate-y-2 cursor-pointer  
          ${
            dark? 'bg-white text-black  ':'bg-gray-800  text-white/60 '
          }
        `}>
         <h3 className={ `text-xl md:text-2xl font-bold
          ${
            dark? ' text-black  ':'  text-white '
          }
          `}>Tools & Workflow</h3>
         <div className='grid grid-cols-3 md:grid-cols-4 gap-6 md:gap-8'>
         {Tools.map((elem, index)=>{

        return <div
        key={index}
        className='hover:scale-110 transition-all duration-500'>
           
                <div className="flex justify-center mb-4">
        {elem.icon}
      </div>
              <h3 className="text-sm sm:text-md md:text-lg font-medium flex justify-center items-center">
              {elem.language}
            </h3>
            </div>
            
                })}
                </div>
         </div> 
</div>
 



    </section>
  )
}

export default Skill