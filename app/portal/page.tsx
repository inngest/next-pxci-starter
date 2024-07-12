import React from 'react'
import { SideBar } from './_comps/sideBar'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Icon } from '@iconify/react/dist/iconify.js'
import { CreateEvent } from '../_components/createEvent'


const Portal = () => {
  return (
    <div className='flex'>
        <SideBar/>
        <div className='flex justify-center w-full'>

        <div className=' h-full border w-[80%] rounded-md p-2'>
            <div className='flex justify-between'>
                <div className=' h-10 items-center px-2 flex relative'>
                <Input className='h-full bg-secondary border-none rounded-full border peer '/> 
                <Icon icon="jam:search"  className='h-8 w-8 bg-none absolute right-0 mr-4 peer-focus:text-primary text-muted-foreground' /> 
                </div>
                <CreateEvent/>
             </div>
        </div>
        </div>
    </div>
  )
}

export default Portal