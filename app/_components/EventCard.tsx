"use client";
import React from "react";
import Image from "next/image";
import { Card, CardContent } from "../../components/ui/card";
import { Button} from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";

const EventCard = ({ event }: {event:any}) => {
  return (
    <div className="bg-white shadow-sm w-fit overflow-hidden flex flex-col gap-1 rounded-2xl  h-fit sm:p-1 bg-primary     cursor-default  transition-all ease-out  hover:shadow-lg   group  flex-wrap  transform hover:z-20 hover:border hover:scale-105">
      <Image
        alt={event.title || ""}
        src={event.image || ""}
        className="md:w-[317px] w-full rounded-t-2xl"
      />
      <div className="p-2 bg-white sm:mt-[-50px] rounded-2xl flex flex-col gap-2  border w-[317px]  ">
        <div className="flex flex-row justify-between px-3 items-center border-b py-1">
          <p className="text-sm sm:text-base">{event.eventType || ""}</p>
          <p className="text-sm text-gray-600">{event.time || ""}</p>
        </div>
        {/* <h3 className="text-lg font-bold">{event.title}</h3> */}
        <p className=" text-lg sm:text-2xl md:text-2xl font-bold ">{event.organizer || ""}</p>
        <p className="text-sm text-[#022543] font-normal">
          {event.location || ""}
        </p>
        <Link href={`/event-details/${event.id || ""}`}>
          <Button size={'sm'}  className="mt-2  border-2 w-full py-1 px-3 rounded-full">
            View Ticket Options
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
