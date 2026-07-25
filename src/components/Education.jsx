import React from 'react'
import { FaUserGraduate, FaUniversity } from "react-icons/fa";
const Education = ({dark, setDark}) => {
  return (
    <section
      id="Education"
      className=" text-white py-20 px-8 md:px-20 " 
    >
<h2 className={`text-4xl font-bold text-center mb-4
        ${
          dark? 'text-black':'text-white'
        }
        `}>
        My <span className="text-[#21CDE8]">Education</span>
      </h2>
      <p className={` text-center
         ${dark? 'text-black/70': 'text-white/70'}
        
        `}>A combination of academic education and practical experience that has shaped my technical foundation.</p>
        <div className={`  relative min-h-auto  rounded-2xl border-2 border-transparent hover:border-2 hover:border-solid hover:border-[#76e3f4] hover:shadow-[0_10px_30px_rgba(99,102,241,0.35)] transition-all duration-500 p-6 pt-12 flex flex-col mt-15 
             ${
            dark? 'bg-white text-black  ':'bg-gray-800  text-white/60 '
          }
            
            `}>
                <div className=' bg-[#55c6d7] h-13 w-13 group-hover:scale-110 transtion-all duration-500 rounded-xl flex justify-center items-center '>
           <FaUserGraduate className='text-2xl text-white'/>
                </div>
                <div className='pt-7 border-b-2 border-solid border-[#76e3f4] '>
                    <h2 className='text-[#05cfee] text-3xl font-bold'>Education</h2>
                </div>
        <div className="relative pl-10">
               <div
                 className={`absolute left-2 top-7 bottom-3 w-0.5
                   ${dark ? "bg-gray-300" : "bg-gray-600"}
                      `}
                          ></div>
               <div className='relative pt-7'>
               <h2 className={`text-lg text-black font-semibold
                 ${dark? 'text-black': 'text-white'}
                `}>BS Information Technology (IT)</h2>

                <div
                   className={`
                         absolute -left-10 top-9 w-4 h-4 rounded-full border-[3px] shadow-[0_0_15px_#e8711d]  bg-[#e8711d]
                          ${
                           dark? " border-white" : "border-black"
                         }
                            `}
                           ></div>    
               <h3 className='text-sm font-semibold text-[#46b8ca] flex'> <FaUniversity className="text-[#46b8ca] text-lg mr-2" /> Virtual University (2025 – Present)</h3>
               <h4 className='text-sm leading-7'>Focused on programming fundamentals, software engineering, and modern web development.</h4>
           </div>

          <div className='relative pt-7'>
               <h2 className={`text-lg text-black font-semibold
                 ${dark? 'text-black': 'text-white'}
                 
                `}>
                    Frontend Web Development</h2>
                    <div
                   className={`
                         absolute -left-10 top-9 w-4 h-4 rounded-full border-[3px] shadow-[0_0_15px_rgba(99,102,241,0.9)]  bg-violet-600
                          ${
                           dark? " border-white" : "border-black"
                         }
                            `}
                           ></div> 
               <h3 className='text-sm font-semibold text-[#46b8ca] '>Hands-on Development</h3>
               <h4 className='text-sm leading-7'>Built responsive web applications using React, Tailwind CSS, JavaScript, Git, and modern frontend development practices.</h4>
           </div>

            <div className='relative pt-7'>
               <h2 className={`text-lg text-black font-semibold
                 ${dark? 'text-black': 'text-white'}
                `}>Intermediate (ICs)</h2>
               <div
                   className={`
                         absolute -left-10 top-9 w-4 h-4 rounded-full border-[3px] shadow-[0_0_15px_#46b8ca]  bg-[#46b8ca]
                          ${
                           dark? " border-white" : "border-black"
                         }
                            `}
                           ></div> 
               <h3 className='text-sm font-semibold text-[#46b8ca]'>Computer Science</h3>
               <h4 className='text-sm leading-7'>Built a strong foundation in programming, mathematics, and computer science principles.</h4>
           </div>

           <div className='relative pt-7'>
               <h2 className={`text-lg text-black font-semibold
                 ${dark? 'text-black': 'text-white'}
                `}>Matriculation</h2>
                <div
                   className={`
                         absolute -left-10 top-9 w-4 h-4 rounded-full border-[3px] shadow-[0_0_15px_#1de849]  bg-[#1de849]
                          ${
                           dark? " border-white" : "border-black"
                         }
                            `}
                           ></div> 
               <h3 className='text-sm font-semibold text-[#46b8ca]'>Science Foundation</h3>
               <h4 className='text-sm leading-7'>Early technical and scientific fundamentals.</h4>
           </div>
          </div>

        </div>
           
    </section>
  )
}

export default Education