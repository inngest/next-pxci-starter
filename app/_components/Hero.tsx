import React from 'react'
import Image from 'next/image'
import hero from "../../public/images/image 10.svg"

const Hero = () => {
  return (
    <div className="w-full  relative flex items-center ">
        <Image
          src={hero}
          alt="group picture"
          className="w-full h-[400px] md:h-[60vh]  object-cover"
        />
    
      </div>
  )
}

export default Hero