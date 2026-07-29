import React from 'react'

const Footer = ({dark, setDark}) => {
  return (
    <div className={`absolute bottom-0 left-0 right-0 flex justify-center items-center min-h-15  border-t border-t-solid 
    ${
     dark? 'bg-white/70 border-black/10 ':' border-white/15 '
    }
    
    `}>
      {/* bg-[#334155] */}
<p>© 2026 Umer. All rights reserved. Built with React & passion.</p>


        
    </div>
  )
}

export default Footer