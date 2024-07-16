import { Button } from '@/components/ui/button'
import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

export const SideBarButton = ({item}:any) => {
    const [active, setActive] = React.useState(false)
  return (
    <Button 
    onClick={()=>setActive(!active)}
    variant={active?'default':'outline'} className='flex gap-2 '>
<Icon icon={item.icon} className='h-6 w-6' />
{item.name}
</Button>
  )
}
