import React from 'react'
import { FaLinkedinIn, FaEnvelope,FaWhatsapp,FaFacebookF, FaGithub, FaArrowRight  } from "react-icons/fa";
const Contact = ({dark, setDark}) => {
  const platform=[
  { Name:"LinkdIn",
    icon:<FaLinkedinIn className=' text-[#0A66C2] '/>,
   msg:"Let's connect",
   msg2:"CONNECT NOW",
   lightBg: "bg-[#EFF6FF]",
    darkBg: "bg-[#172554]",

    lightBorder: "border-[#BFDBFE]",
    darkBorder: "border-[#2563EB]",
    hoverBorder: "hover:border-[#3B82F6]",
    msg2Color: "text-[#0A66C2]",
    link:"https://www.linkedin.com/in/umer-zaman-219369326/"
  },
  { Name:"Email",
     icon:< FaEnvelope className=' text-[#FF3B3B] ' />,
    msg:"Send me a message",
    msg2:"SEND MESSAGE",
     lightBg: "bg-[#FEF2F2]",
    darkBg: "bg-[#2A1620]",

    lightBorder: "border-[#FECACA]",
    darkBorder: "border-[#DC2626]",
    hoverBorder: "hover:border-[#EF4444]",
    msg2Color: "text-[#FF3B3B]",
    link:"mailto:umer127300@gmail.com"
  },
  { Name:"WhatsApp",
     icon:<FaWhatsapp className=' text-[#25D366]' />,
msg:"Let's chat directly",
    msg2:"CHAT NOW",
    lightBg: "bg-[#F0FDF4]",
    darkBg: "bg-[#0F2A24]",

    lightBorder: "border-[#BBF7D0]",
    darkBorder: "border-[#16A34A]",
    msg2Color: "text-[#25D366]",
    link:"https://wa.me/923098916423"
  },
  { Name:"Facebook",
     icon:<FaFacebookF className=' text-[#1877F2]' />,
    msg:"See what i'm up to",
    msg2:"FOLLOW ME",
    lightBg: "bg-[#EFF6FF]",
    darkBg: "bg-[#172554]",

    lightBorder: "border-[#BFDBFE]",
    darkBorder: "border-[#2563EB]",
    hoverBorder: "hover:border-[#3B82F6]",
    msg2Color: "text-[#1877F2]",
    link:"https://www.facebook.com/profile.php?id=61577620126344/"
  },
  { Name:"GitHub",
     icon:< FaGithub className={ `
      ${dark?'text-[#24292F]':'text-white'}
      `}/>,
    msg:"Explore my code",
   msg2:"VIEW PROFILE",
    lightBg: "bg-[#F8FAFC]",
    darkBg: "bg-[#1F2937]",

    lightBorder: "border-[#E2E8F0]",
    darkBorder: "border-[#475569]",
    hoverBorder: "hover:border-[#94A3B8]",
    msg2Color: "text-[#24292F]",
    msg2DarkColor: "text-[#E5E7EB]",
    link:"https://github.com/Umer127300"
  }

  ]
  return (
    <section id="skills"
      className=" text-white py-20 px-8 md:px-20 text-center">
        <h2 className="text-[#1de849] text-sm tracking-[0.4rem] uppercase font-medium">
  LET'S TALK
</h2>
        <h2 className='text-5xl text-[#21CDE8] font-bold mt-3'>Get In Touch</h2>
    <h4 className={`mt-6
      ${dark?'text-black/70': 'text-white/70'}
      `}>Let's turn your ideas into modern, responsive, and user-friendly web experiences. I'm always open to freelance projects, collaborations, and full-time opportunities. Feel free to get in touch.</h4>
<div className='grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 justify-items-center gap-7 mt-15'>
  {platform.map((elem, index)=>{
    
    return <a href={elem.link}
    key={index}     
     className={`group min-h-60 w-full   rounded-3xl border border-solid hover:scale-105 transition-all duration-700 ${elem.hoverBorder} 
     ${
      dark? `${elem.lightBg}  ${elem.lightBorder} ` :`${elem.darkBorder} ${elem.darkBg} `
     }
     
     `}
    > 
      <div className=' flex justify-center items-center mt-6'>
        <div className={`rounded-full h-20 w-20  flex justify-center items-center text-5xl group-hover:scale-110 transition-all duration-300
           ${dark?'bg-white':'bg-black/80'}
          `}>{elem.icon}</div>
        </div>
       <h2 className={`text-2xl  mt-3 font-semibold
         ${dark?'text-black':'text-White'}
        
        `}>{elem.Name}</h2>
      <h4 className={`mt-2  text-sm
        ${dark?'text-black/70':'text-white/70'}
        `}>{elem.msg}</h4>
      <div className={`mt-8 } text-sm font-bold flex gap-2 group-hover:gap-4 transition-all duration-500 justify-center items-center ${elem.msg2Color}
     ${
 index === 4
    ? (dark ? elem.msg2Color : elem.msg2DarkColor)
    : ""}
      `}>
        <h3>
        {elem.msg2}
        </h3>
       
          <FaArrowRight />
        </div>
    </a>
  })}
</div>
    </section>
  )
}

export default Contact