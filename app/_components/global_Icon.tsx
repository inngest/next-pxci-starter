'use client'

import { Icon } from '@iconify/react/dist/iconify.js'

export const Global_Icon = ({iconName, className}:{iconName:string, className?:string}) => {
  console.log(iconName)
    return (
   <Icon icon={iconName}  className={` text-black ${className}`}/>
  )
}
