import Hero from "@/app/_components/Hero";
import React from "react";
import Map from "../../../public/images/Rectangle 2.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Global_Icon } from "@/app/_components/global_Icon";

interface Props {
  params: {
    id: string;
  };
}

const EventDetailsPage = ({ params: { id } }: Props) => {
  return (
    <main className="relative">
      <Hero />

      <section className=" flex flex-row justify-between space-x-10 mx-20 p-6">
        <article className="flex flex-col items-center flex-1  ">
          <p className="max-w-[880px] ">
            Lorem ipsum dolor sit amet consectetur. Sollicitudin quisque diam
            purus urna fermentum magna massa aliquet tincidunt. Pulvinar
            pulvinar pellentesque ut tortor dui aliquam a. Cum cursus vestibulum
            ullamcorper felis eu nisl quis euismod elementum. Fermentum a
            tristique pellentesque porttitor interdum sit facilisis. Massa in
            varius nunc nisi est ac mi. Ut ut faucibus in faucibus posuere
            tristique ullamcorper. Pellentesque habitant est mauris pellentesque
            vulputate iaculis nisl. Elementum blandit turpis donec dignissim
            pulvinar tortor nisi proin. Mollis eleifend condimentum cras
            faucibus vulputate sed morbi ornare elit. Orci ac pulvinar dictum
            pellentesque id. Pharetra turpis aliquet dignissim pharetra. Sit
            convallis nibh aliquam lectus ullamcorper vitae vel nibh id. Id
            tincidunt at elementum massa nulla nisi tincidunt imperdiet.
            Imperdiet fringilla pellentesque sit in faucibus nec sit. Id nunc
            orci pharetra iaculis netus cursus vel aliquet dui. Vulputate nam
            nec fermentum enim vitae urna. Amet congue fermentum sed aliquet
            quisque urna magna. Enim tellus enim viverra magna quis. Sodales
            elementum sem convallis bibendum vitae amet nibh interdum. Volutpat
            accumsan eu a posuere tristique commodo. Sed nisl auctor praesent
            nulla non. Nunc hendrerit sem in augue placerat ullamcorper a urna
            iaculis. Aenean iaculis tincidunt vestibulum ornare ullamcorper.
            Massa id porttitor pharetra dictum orci. Nulla tempus neque dis at.
            Vulputate eget sit sed diam eget pharetra eget. Pharetra sagittis
            blandit purus magna. Lacus lorem semper mattis dignissim. Maecenas
            egestas elementum nunc praesent id tincidunt congue ut. Cum pretium
            diam eleifend aenean sed lacus. Sed vel feugiat porta quis id in.
          </p>
        </article>

        <div className="flex- mt-[-100px] ml-[-100px] z-10">
{/* Edit and delete event */}

          <div className="bg-white shadow-md  py-2 overflow-hidden flex flex-col gap-3 rounded-3xl px-2 w-[350px] border border-[#022543] ">
            <div className="flex flex-row justify-between px-3 items-center border-b py-2">
              <p>Digital</p>
              <p className="text-sm text-gray-600"> 4, Dec 24 | 8:30pm </p>

              <div className="w-fit flex gap-1">

              <Button title="Edit event details" className="shadow-sm " size={'sm'} variant={'outline'} ><Global_Icon iconName={"eva:edit-2-fill"} /> </Button>
              <Button title="Delete this event" size={'sm'} variant={'outline'}  className=" space-x-2 shadow-sm "> <Global_Icon iconName={"jam:trash-f"} />  </Button>
              </div>

            </div>

            <p className="text-3xl leading-normal font-bold ">
              FAVOUR ENTERTAINMENT CAMPUS TOUR
            </p>

            <Image src={Map} className="w-full h-48 object-cover" alt="map" />
            <p className="text-gray-700 text-sm">
              3 Lekki-Epe Expressway, Victoria Island, Lagos 1010, Lagos
            </p>
            <Button size={'sm'} className="mt-2  w-full   py-1 px-3 rounded-full">
              Book Ticket - ₦0
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EventDetailsPage;
