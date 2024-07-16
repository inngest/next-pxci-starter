'use client'
import { Button } from '@/components/ui/button'
import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'
import { SideBarButton } from './sideBarButton'

const menuItems = [
    {name:'Events', icon:"tabler:timeline-event", link:''},
    {name:'Feedback', icon:"fluent:person-feedback-24-regular", link:''},
    {name:'Profile', icon:"iconamoon:profile-circle-duotone", link:''},
    {name:'Sign Out', icon:"uil:signout", link:''},
]


export const SideBar = () => {

  return (
    <div className='space-y-1 p-4'>
{menuItems.map((item,i:number)=>(
<SideBarButton key={i} item={item} />
))}
    </div>
  )
}
