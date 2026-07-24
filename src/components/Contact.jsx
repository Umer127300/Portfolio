import React from 'react'
import { FaLinkedinIn, FaEnvelope,FaWhatsapp,FaFacebookF, FaGithub, FaArrowRight  } from "react-icons/fa";
const Contact = ({dark, setDark}) => {
  const platform=[
  { Name:"LinkdIn",
    icon:<FaLinkedinIn className=' text-[#0A66C2] '/>,
   msg:"Let's connect",
   msg2:"CONNECT NOW",
   bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    msg2Color: "text-[#0A66C2]",
    link:"https://www.linkedin.com/in/umer-zaman-219369326/"
  },
  { Name:"Email",
     icon:< FaEnvelope className=' text-[#FF3B3B] ' />,
    msg:"Send me a message",
    msg2:"SEND MESSAGE",
     bgColor: "bg-red-50",
    borderColor: "border-red-200",
    msg2Color: "text-[#FF3B3B]",
    link:"mailto:umer127300@gmail.com"
  },
  { Name:"WhatsApp",
     icon:<FaWhatsapp className=' text-[#25D366]' />,
msg:"Let's chat directly",
    msg2:"CHAT NOW",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    msg2Color: "text-[#25D366]",
    link:"https://wa.me/923098916423"
  },
  { Name:"Facebook",
     icon:<FaFacebookF className=' text-[#1877F2]' />,
    msg:"See what i'm up to",
    msg2:"FOLLOW ME",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    msg2Color: "text-[#1877F2]",
    link:"https://www.facebook.com/profile.php?id=61577620126344/"
  },
  { Name:"GitHub",
     icon:< FaGithub className={ `
      ${dark?'text-[#24292F]':'text-white'}
      `}/>,
    msg:"Explore my code",
   msg2:"VIEW PROFILE",
   bgColor: "bg-gray-50",
    borderColor: "border-gray-200",
    msg2Color: "text-[#24292F]",
    link:"https://github.com/Umer127300"
  }

  ]
  return (
    <section id="skills"
      className=" text-white py-20 px-8 md:px-20 text-center"><h2 className='text-5xl text-indigo-600 font-bold'>Get In Touch</h2>
    <h4 className={`mt-6
      ${dark?'text-black/70': 'text-white/70'}
      `}>Let's turn your ideas into modern, responsive, and user-friendly web experiences. I'm always open to freelance projects, collaborations, and full-time opportunities. Feel free to get in touch.</h4>
<div className='grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 justify-center items-center gap-7 mt-15'>
  {platform.map((elem, index)=>{
    
    return <a href={elem.link}
    key={index}     
     className={`group min-h-70 max-w-80 ${elem.bgColor} rounded-3xl border border-solid hover:scale-105 transition-all duration-700 ${elem.borderColor}`}
    > 
      <div className=' flex justify-center items-center mt-6'>
        <div className={`rounded-full h-20 w-20  flex justify-center items-center text-5xl group-hover:scale-110 transition-all duration-300
           ${dark?'bg-white':'bg-black/80'}
          `}>{elem.icon}</div>
        </div>
       <h2 className='text-2xl text-black mt-3 font-semibold'>{elem.Name}</h2>
      <h4 className='mt-2 text-black/70 text-sm'>{elem.msg}</h4>
      <div className={`mt-8 ${elem.msg2Color} text-sm font-bold flex gap-2 group-hover:gap-4 transition-all duration-500 justify-center items-center`}>
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