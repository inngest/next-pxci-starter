import React from 'react'
import { SectionTitleBar } from './sectionTitleBar'

export const SectionContainer = ({title, content}:{title:string, content:React.ReactNode}) => {
  return (
    <div className='p-4 space-y-2'>
    <SectionTitleBar 
    title={title}/>
    <div>{content}</div>
    </div>
  )
}
