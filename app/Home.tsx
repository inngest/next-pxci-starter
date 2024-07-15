"use client";
import React from "react";
import EventList from "./_components/EventList";
import CategoryFilter from "./_components/CategoryList";

const App = () => {
  const [category, setCategory] = React.useState("All Categories");

  return (
    <div className="w-full max-w-screen">
      {/* <CategoryFilter category={category} setCategory={setCategory} /> */}

      <EventList />
    </div>
  );
};

export default App;
