'use client'

import { Icon } from '@iconify/react/dist/iconify.js'

export const Global_Icon = ({iconName}:{iconName:string}) => {
  console.log(iconName)
    return (
   <Icon icon={iconName} color='black'  className=' text-black '/>
  )
}
