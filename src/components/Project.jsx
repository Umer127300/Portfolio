import { useRef } from 'react'
import {FaGithub,FaGlobe, FaChevronLeft,
  FaChevronRight,  } from "react-icons/fa6";
const Project = ({dark, setDark}) => {
    const scrollRef= useRef(null)
 const scrollLeft=()=>{
       scrollRef.current.scrollBy({
        left:-750,
        behavior:'smooth',
       })
  }
 const scrollRight=()=>{
    scrollRef.current.scrollBy({
      left: 750,
      behavior:'smooth'
    })
     

  }
  const project=[
   {Name:'Currency Converter',
    Discription:'Worldwide Currency Converter with Real-Time Exchange Rates',
    DsptColor:'text-yellow-500',
    borderColor:'border-yellow-500',
    shadowColor:'shadow-yellow-300',
    image:'logo imge.jpeg',
 websiteLink:'https://currency-converter-nine-liard-44.vercel.app',
    getHubLink:'https://github.com/Umer127300/currency-converter',
   },
   {Name:'Guess Number Game',
     Discription:'Guess Number Game Made For Fun',
      DsptColor:'text-cyan-500',
      borderColor:'border-cyan-500',
     shadowColor:'shadow-cyan-300',
     image:'user.png',
       websiteLink:'https://currency-converter-nine-liard-44.vercel.app',
    getHubLink:'https://github.com/Umer127300/currency-converter',
   
   },
     {Name:'Ecomerce Project',
     Discription:'E-Commerce Store Built for Seamless Shopping',
      DsptColor:'text-green-500',
      borderColor:'border-green-600',
     shadowColor:'shadow-green-500',
      image:'image.jpeg',
       websiteLink:'https://currency-converter-nine-liard-44.vercel.app',
    getHubLink:'https://github.com/Umer127300/currency-converter',
   },
     {Name:'Amazon Clone ',
     Discription:'Amazon Clone Created for a Real Shopping Experience',
      DsptColor:'text-blue-500',
      borderColor:'border-blue-600',
     shadowColor:'shadow-blue-500',
       image:'logo imge.jpeg',
      websiteLink:'https://currency-converter-nine-liard-44.vercel.app',
    getHubLink:'https://github.com/Umer127300/currency-converter',
   },
     {Name:'Notes Project',
     Discription:'Notes App Designed for Quick Note-Taking',
      DsptColor:'text-purple-500',
      borderColor:'border-purple-600',
    shadowColor:'shadow-purple-500',
      image:'logo imge.jpeg',
     websiteLink:'https://currency-converter-nine-liard-44.vercel.app',
    getHubLink:'https://github.com/Umer127300/currency-converter',
   },
    
  ]

 
  return (
     <section id="Project"
         className=" text-white py-20 px-8 md:px-20 text-center">
        <h2 className={`text-center text-4xl  font-bold mb-8
           ${dark?'text-black ':'text-white '}
          `} >Featured <span className='text-[#21CDE8]'>Projects</span></h2>
          <p className={`mb-10 text-center px:5 md:px-20
        ${dark? 'text-black/70': 'text-white/70'}
        
        `}>Explore a selection of frontend projects that demonstrate my expertise in React, Tailwind CSS, and JavaScript. Each project is crafted with responsive layouts, clean architecture, intuitive user interfaces, and a focus on performance and usability.

</p>
            <div className='relative'>
            <button
           onClick={scrollLeft}
           className={`invisible md:visible  absolute -left-16 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full  shadow-lg hover:bg-[#21CDE8] hover:text-white duration-300
             ${dark?'text-black bg-white ':'text-white bg-gray-700'}
            ` }
          >
          <FaChevronLeft className="mx-auto" />
        </button>

              <div
               ref={scrollRef}
              className='flex gap-12 px-10 overflow-x-auto scroll-smooth scrollbar-hide '>
                   {project.map((elem, index)=>{
           return  <div
                 key={index}
           className={ ` group flex-shrink-0 text-black border-2 border-solid ${elem.borderColor} w-65 min-h-120 rounded-2xl text-left hover:shadow-[0_12px_15px] ${elem.shadowColor}     transition-all duration-300 
            ${dark?'bg-white ':'bg-black/2 '}
            `}>
            <div className='overflow-hidden rounded-t-xl'><img src={elem.image} className=' w-full h-40 object-cover rounded-t-xl group-hover:scale-105 transition-all duration-500 '/></div>
            <div className='flex flex-col '>
              <h2 className={`px-4  text-lg font-bold  mt-2
                ${dark?'text-black':'text-white'}
                `}>{elem.Name}</h2>
              <p className={`mx-4 mb-3 text-sm font-bold ${elem.DsptColor}`}>{elem.Discription}</p>
            <div className='flex items-center flex-wrap gap-2 px-4'>
              <h4 className={`border  rounded-full px-3 text-sm 
                 ${dark?'border-black/15 text-black/60':'border-white/15 text-white/50'}
                `}>#Html</h4>
                <h4 className={`border  rounded-full px-3 text-sm 
                 ${dark?'border-black/15 text-black/60':'border-white/15 text-white/50'}
                `}>#JavaScript</h4>
              <h4 className={`border  rounded-full px-3 text-sm 
                 ${dark?'border-black/15 text-black/60':'border-white/15 text-white/50'}
                `}>#React</h4>
              <h4 className={`border  rounded-full px-3 text-sm 
                 ${dark?'border-black/15 text-black/60':'border-white/15 text-white/50'}
                `}>#Tailwindcss</h4>
            
            </div>
            <a 
             href={elem.websiteLink}
            className='group bg-[#06d6f6] max-w-full  h-17 rounded-lg mx-4 mt-4 p-2 transition-all duration-500 hover:scale-105   flex justify-center items-center' > <FaGlobe className={`  text-xl  mr-2 group-hover:scale-110 transition-all duration-500 m-3
                        ${dark? ' text-black': 'text-white'}
                        `} /><h3 className='text-sm font-bold px-7'>Explore Flow on Website</h3></a>
            <a 
              href={elem.getHubLink}
            className={`group max-w-full /30 mx-4 mt-4 p-2 rounded-lg transition-all duration-500 hover:-translate-y-1 border   flex justify-center items-center
            ${dark? ' bg-white border-black/20  hover:border-black/60 ': 'bg-gray-800 border-white/20 hover:border-white/60 '}
            `}> <FaGithub className={`  text-md  mr-2 group-hover:scale-110 transition-all duration-500
                        ${dark? ' text-black': 'text-white'}
                        `} /><h3 className={`
                        text-sm font-semibold
                          ${dark? ' text-black': 'text-white'}
                        `}>View Source code</h3></a>
            </div>
            </div>
   
          })}
            </div>
   {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className={`invisible md:visible absolute -right-16 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full   shadow-lg hover:bg-[#21CDE8] hover:text-white duration-300
            ${dark?'text-black bg-white ':'text-white bg-gray-700'}
            `}
        >
          <FaChevronRight className="mx-auto" />
        </button>
            </div>
          
       </section>
  )
}

export default Project