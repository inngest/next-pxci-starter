import React from 'react'
import { CreateOrgAccount } from '../../_components/createOrgAccount'
import Image from 'next/image'

const CreateAccount = () => {
  return (
    <div className='flex gap-4 p-4'>

      <div className='w-[50%] bg-green-500 rounded-3xl'>
        <Image src={''} alt={''}/>
      </div>
<div className='bg-secondary  rounded-3xl p-4 space-y-4'>
<h2 className='font-bold text-lg border-b-2 p-2'>Create organization account.</h2>

        <CreateOrgAccount/>
</div>

    </div>
  )
}

export default CreateAccount