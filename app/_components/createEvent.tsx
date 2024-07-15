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

export const CreateEvent = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>Create a New Event</Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="  h-full min-w-[90%] overflow-scroll">
        <AlertDialogHeader className="flex justify-end w-full">
          <AlertDialogCancel className="w-fit ">Cancel</AlertDialogCancel>
        </AlertDialogHeader>
        <AlertDialogDescription>
          <EventPage />
        </AlertDialogDescription>

        <AlertDialogFooter></AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
