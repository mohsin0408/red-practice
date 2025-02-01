import React from "react";
import { IoToggleSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme, setSortOption } from "./Store/Action";

const Course = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);
  const sortedCourses = useSelector((state) => state.sortedCourses); // Get sorted courses from Redux
  const sortOption = useSelector((state) => state.sortOption);

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  const handleSortChange = (e) => {
    dispatch(setSortOption(e.target.value)); // Dispatch sort option to Redux store
  };

  return (
    <>
      <div
        className={`flex flex-col items-center justify-between ${
          theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
        }`}>
        <div className="flex items-center justify-center w-full gap-5">
          <h2 className="my-5 text-2xl sm:text-3xl">
            Courses Included with Purchase
          </h2>
          <IoToggleSharp className="text-3xl" onClick={handleThemeToggle} />
          <select value={sortOption} onChange={handleSortChange}>
            <option value="normal">Normal</option>
            <option value="low-to-high">Price: Low to High</option>
            <option value="high-to-low">Price: High to Low</option>
          </select>
        </div>
        <div className="grid items-center justify-center grid-cols-1 gap-5 p-4 md:grid-cols-2">
          {sortedCourses?.map((obj, index) => {
            return (
              <div
                key={index}
                className=" w-[300px] h-full flex flex-col bg-[#f7f7f7] shadow-[0px_1px_#d4baf3] 
          border border-[#d4baf3] rounded-[9px] overflow-hidden cursor-pointer lg:w-[380px] hover:border-[#9d5ee8] hover:border-2">
                <img src={obj?.img} className="object-cover " />
                <div className="flex flex-col justify-between h-full gap-10 px-4 py-5">
                  <div>
                    <span className=" text-[#5A00C7] text-lg font-bold ">
                      {obj?.title}
                    </span>
                    <p className="text-sm text-black bg-white line-clamp-2 ">
                      {obj?.desc}
                    </p>
                  </div>
                  <div className="flex items-center justify-between text-black bg-white ">
                    <p>{obj?.tutor}</p>
                    <p className="text-[#5a05c2] text-sm font-bold ">
                      {obj?.price}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Course;
