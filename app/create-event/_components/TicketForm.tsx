import React from "react";
import evtImg from "../../../public/images/Rectangle 1.svg";
import TicketCard from "./TicketCard";
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
import CreateTicketForm from "./CreateTicketForm";

const tickets = [
  {
    id: 1,
    description:
      "This event brings together all the top echelons of the tech industry",
    title: "Music Fest",
    price: 50,
    image: evtImg,
  },

  {
    id: 1,
    description:
      "This event brings together all the top echelons of the tech industry",
    title: "Music Fest",
    price: 50,
    image: evtImg,
  },
  {
    id: 1,
    description:
      "This event brings together all the top echelons of the tech industry",
    title: "Music Fest",
    price: 50,
    image: evtImg,
  },
];


interface TicketFormProps {
  setUploadedImages: React.Dispatch<React.SetStateAction<{ file: File; type: string }[]>>;
  uploadedImages: { file: File; type: string }[];
}

const TicketForm : React.FC<TicketFormProps> = ({
  setUploadedImages,
  uploadedImages = [],
}) => {
  return (
    <main className="flex flex-col items-top ">
      <div className="ml-6">
        {/* <CreateTicketForm/> */}
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button>Add New Ticket</Button>
          </AlertDialogTrigger>
          <AlertDialogContent className="  h-fit  w-full overflow-scroll">
            <AlertDialogHeader className="flex justify-end w-full">
              <AlertDialogCancel className="w-fit ">Cancel</AlertDialogCancel>
            </AlertDialogHeader>
            <AlertDialogDescription>
             
            </AlertDialogDescription>

            <AlertDialogFooter>
              <AlertDialogAction className="w-fit ">Cancel</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto">
        {tickets.map((ticket) => (
          <div key={ticket.id}>
            <TicketCard
              title={ticket.title}
              image={ticket.image}
              price={ticket.price}
              description={ticket.description}
            />
          </div>
        ))}
      </div>
    </main>
  );
};

export default TicketForm;
