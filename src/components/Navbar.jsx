import React, { useState } from 'react'
import "@fortawesome/fontawesome-free/css/all.min.css";
import MobileMenu from '../pages/MobileMenu';
 const sound = new Audio("/click.mp3");
const Navbar = ({dark,setDark}) => {
const [menuOpen, setMenuOpen] = useState(false);

const [theme, setTheme] = useState(<i className="fa-solid fa-moon"></i>)
const themeChange=()=>{
sound.currentTime=0;
sound.play();
setDark(!dark)
document.body.classList.toggle('dark')

 if (!dark) {
       setTheme(<i className="fa-solid fa-moon"></i>);  
    } else {
        setTheme (<i className="fa-solid fa-sun"></i>); 
    }


}


  return (
       <>
       <nav className={`fixed text-black flex justify-between items-center h-19 rounded-2xl border border-solid  top-3 z-50
    left-3
    right-3 shadow-[0_4px_15px_rgba(0,0,0,0.05)]
       
        ${
      dark ? ' bg-[#FAFAFA] border-gray-200   ': ' bg-[#1E293B] border-[#334155]   '
    }
      ` }>

         {/* name and logo div */}
      <div className="group flex justify-center items-center pl-5">
        <p className=" relative h-11 w-11 rounded-full flex justify-center items-center bg-[#55c6d7] text-sm text-white font-extrabold pb-1 transition-transform duration-500 ">
           {/* &lt;/&gt;  */}
           <img src="umer-logo.png" 
          className='absolute h-full w-full'
           />
        </p>
        <h2 className="ml-3 text-2xl font-bold text-[#21CDE8]">Umer</h2>
      </div>


        {/* navlinkis div */}
  <div  
  className={`hidden lg:flex h-13.5 items-center rounded-2xl gap-2 text-sm font-extrabold border border-solid  pl-3 pr-3  
    ${
      dark ? ' bg-slate-200 border-slate-200    text-black/60  ': ' bg-[#1E293B] border-[#334155]  text-white/70  '
    }
  `}>
    <a href="#home"
    className={`group font-semibold px-4 py-2 rounded-xl inline-flex gap-2 items-center transition-all duration-500 
${
      dark ? ' bg-white text-[#21CDE8]  ': ' bg-[#334155]  text-white   '
    }

   ` }
    >
        <i className=" transition-transform duration-500 group-hover:scale-110 text-   fa-regular fa-house icon"></i>Home</a>
    <a href="#about"
     className={`group font-semibold px-4 py-2 rounded-xl inline-flex gap-2 items-center  text-black-70   transition-all duration-500
      
      ${
      dark ? ' hover:bg-white  hover:text-[#21CDE8] ': ' hover:bg-[#334155] hover:text-white/95  '
    }
      
      
      `}
    >
        <i className="  transition-transform duration-500 group-hover:scale-110  fa-regular fa-user icon"></i>About</a>
    <a href="#skill"
      className={`group font-semibold px-4 py-2 rounded-xl inline-flex gap-2 items-center  text-black-70 transition-all duration-500
        ${
      dark ? ' hover:bg-white  hover:text-[#21CDE8] ': ' hover:bg-[#334155] hover:text-white/95  '
    }
     
        `}
    >
        <i className=" transition-transform duration-500 group-hover:scale-110   fa-solid fa-microchip icon"></i>Skills</a>
    <a href="#project"
      className={`group font-semibold px-4 py-2 rounded-xl inline-flex gap-2 items-center  text-black-70  transition-all duration-500
        ${
      dark ? ' hover:bg-white  hover:text-[#21CDE8]': ' hover:bg-[#334155] hover:text-white/95  '
    }
    
        `}
    >
        <i className=" transition-transform duration-500 group-hover:scale-110    fa-solid fa-code icon"></i>Projects</a>
    <a href="#Contact"
      className={`group font-semibold px-4 py-2 rounded-xl inline-flex gap-2 items-center  text-black-70  transition-all duration-500
         ${
      dark ? ' hover:bg-white  hover:text-[#21CDE8] ': ' hover:bg-[#334155] hover:text-white/95  '
    }
     
        `}
    >
         <i className=" transition-transform duration-500 group-hover:scale-110    fa-regular fa-envelope icon"></i>Contact</a>
</div>

{/* Theme button div */}
      <div className="flex items-center gap-1 mr-3">
        <div>
        <button
        onClick={themeChange}
        className={`h-11 w-11 rounded-full border-2 border-solid border-[#79c3ce] mr-2 
             ${
      dark ? 'bg-white  text-black': ' bg-black/50 text-amber-500   '
    }

  `}>
          {theme}
         
        </button>
        <audio src="click.mp3"></audio>
            </div>

            {/* three tab button */}
            <div className={` h-9 lg:hidden flex justify-center rounded-xl items-center mr-3  w-9
            ${
      dark ? ' bg-slate-200 text-black/50 ': ' bg-black/50 text-white/50  '
    }
            
            `}>
<button
onClick={() => setMenuOpen(!menuOpen)}
className="lg:hidden text-2xl "
>
<i className={`fa-solid text-xl ${menuOpen ? "fa-xmark" : "fa-bars"}`}></i>
</button>
</div>
       </div>



     
    </nav>
<MobileMenu menuOpen={menuOpen}  setMenuOpen={setMenuOpen} dark={dark}/>

       </>
  )
}

export default Navbar