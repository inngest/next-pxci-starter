import React, { useState } from "react";
import evtImg from "../public/images/Rectangle 1.svg";

import EventCard from "../app/_components/EventCard";
import CategoryFilter from "./CategoryList";

const events = [
  {
    id: 1,
    date: "2024-12-04",
    category: "Music Concert",
    title: "Music Fest",
    eventType: "Digital",
    organizer: "Favour Entertainment",
    location: "National Stadium, Lagos",
    image: evtImg,
    time: "2:00 PM - 6:00 PM",
  },

  {
    id: 2,
    date: "2024-12-04",
    category: "Music Concert",
    title: "Music Fest",
    eventType: "Digital",
    organizer: "Favour Entertainment",
    location: "National Stadium, Lagos",
    image: evtImg,
    time: "2:00 PM - 6:00 PM",
  },

  {
    id: 1,
    date: "2024-12-04",
    category: "Music Concert",
    title: "Music Fest",
    eventType: "Digital",
    organizer: "Favour Entertainment",
    location: "National Stadium, Lagos",
    image: evtImg,
    time: "2:00 PM - 6:00 PM",
  },
  // Add more events
];

const EventList = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedDate, setSelectedDate] = useState("");

  const filteredEvents = events.filter((event) => {
    const eventDate = new Date(event.date).toISOString().split("T")[0];
    const isDateMatch = selectedDate ? eventDate === selectedDate : true;
    const isCategoryMatch =
      selectedCategory === "All Categories" ||
      event.category === selectedCategory;

    return isDateMatch && isCategoryMatch;
  });

  return (
    <div>
       <div className="max-w-[1291px] mx-auto">
      <CategoryFilter
        category={selectedCategory}
        setCategory={setSelectedCategory}
        date={selectedDate}
        setDate={setSelectedDate}
      />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-4 md:mx-20">
        {filteredEvents.map((event) => (
          <div key={event.id}>
            <EventCard event={event} />
          </div>
        ))}
      </div>
    </div>
  );
  // const filteredEvents = category === 'All Categories' ? events : events.filter(event => event.category === category);

  // return (
  //   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:max-w-[1290px]">
  //     {filteredEvents.map(event => (
  //       <EventCard event={event} key={event.id} />
  //     ))}
  //   </div>
  // );
};

export default EventList;
