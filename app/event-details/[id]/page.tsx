import Hero from "@/app/_components/Hero";
import React from "react";
import Map from "../../../public/images/Rectangle 2.svg";
import Image from "next/image";

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

        <div className="flex-1 mt-[-100px] z-10">
          <div className="bg-white shadow-md  py-2 overflow-hidden flex flex-col gap-3 rounded-[30px] px-4 max-w-[400px] border border-[#022543] ">
            <div className="flex flex-row justify-between px-3 items-center border-b py-2">
              <p>Digital</p>
              <p className="text-sm text-gray-600">2:00 am</p>
            </div>
            <p className=" text-[#022543] text-3xl leading-normal font-bold ">
              FAVOUR ENTERTAINMENT CAMPUS TOUR
            </p>

            <Image src={Map} className="w-full h-48 object-cover" alt="map" />
            <p className="text-gray-700">
              3 Lekki-Epe Expressway, Victoria Island, Lagos 1010, Lagos
            </p>
            <button className="mt-2 bg-white text-[#022543] text-2xl border-2 border-[#022543] w-full   py-1 px-3 rounded-[30px]">
              Book Ticket - ₦0
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EventDetailsPage;
