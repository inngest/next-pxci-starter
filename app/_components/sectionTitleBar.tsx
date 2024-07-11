import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

export const SectionTitleBar = ({title}:{title:string}) => {
  return (
    <div className='flex bg-muted rounded-full p-2 w-full items-center  font-bold justify-between pl-4'>
      <h3>{title}</h3>
      <Icon icon="codicon:settings" className='h-8 w-8 bg-card border p-1 rounded-full' />
    </div>
  )
}
