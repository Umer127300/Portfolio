import React from 'react'
import "../App.css";
import { FaArrowRight  } from "react-icons/fa";
import {TypeAnimation} from "react-type-animation"
const Home = ({dark , setDark}) => {
  return (
    <div>
      
      <section
  id="home"
  className="min-h-screen flex flex-col justify-center items-center text-center px-5 py-24"
>
  <p className={`text-lg md:text-xl
     ${
      dark ? '  text-gray-500': ' text-gray-400  '
    }
    `}>
    Hello, I'm
  </p>

  <h1 className="text-6xl md:text-8xl font-black">
  <span className="text-[#07c5e3]">
    Umer
  </span>
</h1>

  <h2 className={`mt-4 text-2xl md:text-4xl font-bold  text-[#D4A017]
    `}> 
    Frontend Developer
  </h2>
<h1 className={`text-5xl font-bold 
      ${dark?'text-black':'text-white'}
  `}>
Turing Ideas Into High-Impact 
<br/>
<TypeAnimation
sequence={[
  'Accessible Data-Driven Products', 2000,
'Fast' , 2000,
'Reliable Beautiful Web Experience', 2000,
]}
wrapper='span'
speed={20}
style={{color:'#10B981'}}
repeat={Infinity}
className='pt-12'
/>
<span className='text-green-400'></span>
</h1>


  <p className={`mt-4 max-w-2xl  leading-8
    
     ${
      dark ? '  text-gray-600 ': ' text-gray-300  '
    }
    `}>
    I build modern, responsive and interactive web applications using
    React.js, JavaScript and Tailwind CSS with clean UI and smooth user
    experience.
  </p>

  <div className="mt-8 flex flex-col w-full  sm:flex sm:flex-row justify-center gap-4">
   <a
  href="#Project"
  className="px-8 py-4 rounded-full text-white font-semibold
             bg-[#21CDE8]  hover:bg-[#59d4e7]
             shadow-[0_10px_30px_rgba(99,102,241,0.35)]
             hover:scale-105
             hover:shadow-[0_15px_40px_rgba(99,102,241,0.45)]
             transition-all duration-500 flex justify-center items-center gap-2 hover:gap-3"
>
  View Projects
   <span><FaArrowRight /></span>
</a>

    <a
      href="#Contact"
      className={`px-8 py-4 rounded-full font-semibold
             border border-black/10 hover:text-[#21CDE8]
             transition-all duration-500 
                hover:scale-105 
                ${dark? 'text-black bg-white':'text-white  bg-[#334155]'}
                `}
    
    >
      Contact Me 
     
    </a>
  </div>
</section>
    </div>
  )
}

export default Home