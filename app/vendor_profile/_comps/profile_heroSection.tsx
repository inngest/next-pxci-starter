import Image from 'next/image'
import React from 'react'
import coverImage  from '../../../public/images/coverImage.png'
import logo  from '../../../public/images/musicfestLogo.png'
import { Icon } from '@iconify/react';



export const HeroSection = () => {
  return (
    <div>
    <Image 
    className='w-full h-80 object-cover'
    src={coverImage} alt={'Cover image'} height={1000} width={1000} />


    <div className='px-16 h-24  border flex items-end p-4 justify-between '>
   
<div className='flex gap-2 items-end '>

    <Image 
   className='w-52 h-52 object-cover rounded-lg'
    src={logo} alt={'Vendor Logo'}/>
    <div>
<h2 className='text-3xl font-bold'>FAVOUR ENTERTAINMENT</h2>
<div className='flex gap-2 items-center  font-medium  '>
<Icon icon="fluent:star-20-filled"  className='h-8 w-8 text-[#DA9352]' />
<p className='font-bold'>3.4</p>
<p className='text-18 opacity-75'>Event Planner | Decorator | Chairs Rental</p>
</div>
    </div>
    </div>   

    <div className='flex gap-4'>
    <Icon icon="dashicons:facebook"  className='h-8 w-8 ' />
    <Icon icon="ri:twitter-x-fill"  className='h-8 w-8 ' />
    <Icon icon="mingcute:youtube-fill" className='h-8 w-8 ' />
    <Icon icon="line-md:instagram" className='h-8 w-8 ' />
    </div>
    </div>
</div>
  )
}
