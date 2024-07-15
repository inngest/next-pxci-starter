import React from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import { Button } from '@/components/ui/button'
import { CreateOrgAccount } from './createOrgAccount'
  




export const CreateEvent = () => {
  return (
    <AlertDialog>
        <AlertDialogTrigger asChild>
        <Button>Create a New Event</Button>
        </AlertDialogTrigger>
        <AlertDialogContent className='min-w-[90%] h-[75vh] overflow-y-scroll'>
            <AlertDialogHeader>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              </AlertDialogHeader>
            
              <CreateOrgAccount/>


             </AlertDialogContent>

    </AlertDialog>

  )
}
