import React from "react";
import Image from "next/image";

export interface Ticket {
  image: string;
  title: string;
  description: string;
  price: number;
}

const TicketCard = (ticket: Ticket) => {
  return (
    <div className="flex flex-col bg-white p-7 gap-7 w-[500px] h-[600px] shadow-md rounded-sm overflow-hidden">
      <Image
        alt={ticket.title || ""}
        src={ticket.image || ""}
        className="md:w-full h-full  w-full rounded-lg"
      />

      <h3  className="font-semibold text-xl md:text-2xl text-primary">{ticket.title}</h3>
      <p className="font-normal text-base text primary ">{ticket.description}</p>
      <p className="text-sm font-bold ">$ {ticket.price}</p>
    </div>
  );
};

export default TicketCard;
