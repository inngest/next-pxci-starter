import React from "react";
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
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { CreateOrgAccount } from "./createOrgAccount";
import EventPage from "../create-event/EventPage";
import { ScrollArea } from "@/components/ui/scroll-area";

export const CreateEvent = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>Create a New Event</Button>
      </AlertDialogTrigger>

      <AlertDialogContent className="max-w-[800px]  p-0  bg-background">
        <AlertDialogHeader className="flex items-center flex-row justify-between w-full p-2 px-4 border-b">
          <h3 className="text-2xl font-bold">Create a Event</h3>
          <AlertDialogCancel className="w-fit ">X</AlertDialogCancel>
        </AlertDialogHeader>
        <AlertDialogDescription>
<ScrollArea className=" h-[70vh] p-4 ">

          <EventPage />
</ScrollArea>

        </AlertDialogDescription>

        <AlertDialogFooter></AlertDialogFooter>
      </AlertDialogContent>

    </AlertDialog>
  );
};
