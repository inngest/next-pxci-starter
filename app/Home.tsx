"use client";
import React from "react";
import EventList from "../app/EventList";
import CategoryFilter from "../app/CategoryList";

const App = () => {
  const [category, setCategory] = React.useState("All Categories");

  return (
    <div className="container md:mx-auto p-4 md:max-w-[90%]  w-full">
      {/* <CategoryFilter category={category} setCategory={setCategory} /> */}

      <EventList />
    </div>
  );
};

export default App;
