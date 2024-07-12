import React from 'react'

export const ContentContainer = ({title, content}:{title?:string, content:string}) => {
  return (
    <p className=' px-4 py-2 rounded bg-secondary w-fit '>
     <span className=' font-semibold'>{title} </span> {content}
    </p>
  )
}
