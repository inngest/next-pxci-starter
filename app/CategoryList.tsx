import { Input } from "@/components/ui/input";
import React from "react";

const categories = [
  "All Categories",
  "Music Concert",
  "Tech/Technology",
  "NGO",
];

const CategoryFilter = ({ category, setCategory, date, setDate }: any) => {
  return (
    <>
      <div className="flex flex-row gap-4 w-full ml-5">
        <div className="relative ">
          <input
            placeholder="Search"
            className="w-[532px] bg-[#F5F4F4] py-3 px-4 rounded-[99px] border "
          />
        </div>
        <div className="flex justify-between gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 mr-2 rounded-[99px] ${
                category === cat
                  ? "bg-[#022543] text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="relative mt-4 ]">
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="bg-[#F5F4F4] py-3 px-4 rounded-[99px] border w-[95%] ml-5"
        />
      </div>
    </>
  );
};

export default CategoryFilter;
