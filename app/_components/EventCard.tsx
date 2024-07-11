"use client";
import React from "react";
import Image from "next/image";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";

const EventCard = ({ event }: any) => {
  return (
    <div className="bg-white shadow-md w-full  overflow-hidden flex flex-col gap-1 rounded-[30px]  p-4 sm:p-6 ">
      <Image
        alt={event.title}
        src={event.image}
        className="md:w-[417px] h-[360px]  w-full"
      />
      <div className="p-4 bg-white sm:mt-[-40px] rounded-[30px] flex flex-col gap-2 border-[#022543] border mb-1">
        <div className="flex flex-row justify-between px-3 items-center border-b py-2">
          <p className="text-sm sm:text-base">{event.eventType}</p>
          <p className="text-sm text-gray-600">{event.time}</p>
        </div>
        {/* <h3 className="text-lg font-bold">{event.title}</h3> */}
        <p className=" text-[#022543] text-xl sm:text-2xl md:text-3xlfont-bold ">{event.organizer}</p>
        <p className="text-[17px] text-[#022543] font-normal">
          {event.location}
        </p>
        <Link href={`/event-details/${event.id}`}>
          <button className="mt-2 bg-white text-[#022543] text-2xl border-2 border-[#022543] w-full   py-1 px-3 rounded-[30px]">
            View Ticket Options
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
