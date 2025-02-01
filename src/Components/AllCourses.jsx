import React from "react";
import Course from "./Course";
import { IoSearch } from "react-icons/io5";

const AllCourses = () => {
  return (
    <div className="bg-[#f1f0f0] flex flex-col items-center">
      <div className="flex flex-col items-center justify-between w-full sm:w-[53%] gap-3 px-5 py-10 md:flex-row">
        <div className="flex flex-col gap-7 sm:flex-row self-baseline ">
          <div className="relative">
            <span className="flex gap-2 ">
              <p className="text-[#989898] text-xl ">Category:</p>
              <p className="">ALL</p>
            </span>
          </div>

          <div className="relative">
            <span className="flex gap-2">
              <p className="text-[#989898] text-xl ">Author:</p>
              <p>All</p>
            </span>
          </div>
        </div>
        <div className="flex items-center ">
          <input
            placeholder="Find a Product"
            className=" w-[300px] sm:w-[220px]  px-4 py-1 border-2  h-11"
          />
          <span className="py-[10px] px-[16px] text-lg h-11 border-2 bg-white hover:bg-[#f1f0f0] cursor-pointer ">
            <IoSearch />
          </span>
        </div>
      </div>

      <div>
        <Course />
      </div>
    </div>
  );
};

export default AllCourses;
