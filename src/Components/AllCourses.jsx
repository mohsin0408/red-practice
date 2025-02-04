import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { categoryData, authorData } from "../Data/Data";
import { handleCategoryFilter, handleAuthorFilter } from "./Store/Action";
import { useDispatch, useSelector } from "react-redux";

const AllCourses = () => {
  const dispatch = useDispatch();
  const [categoryToggle, setCategoryToggle] = useState(false);
  const [authorToggle, setAuthorToggle] = useState(false);
  const [category, setCategory] = useState("All");
  const [author, setAuthor] = useState("All");
  const filteredCourses = useSelector((state) => state.filteredCourses);

  const handleCategoryToggle = () => {
    setCategoryToggle(!categoryToggle);
  };

  const handleAuthorToggle = () => {
    setAuthorToggle(!authorToggle);
  };

  const handleCategorySelection = (selectedCategory) => {
    dispatch(handleCategoryFilter(selectedCategory));
    setCategory(selectedCategory);
    setCategoryToggle(false);
  };

  const handleAuthorSelection = (selectedAuthor) => {
    dispatch(handleAuthorFilter(selectedAuthor));
    setAuthor(selectedAuthor);
    setAuthorToggle(false);
  };

  return (
    <div className="bg-[#f1f0f0] flex flex-col items-center">
      <div className="flex flex-col items-center justify-between w-full sm:w-[53%] gap-3 px-5 py-10 md:flex-row">
        <div className="flex flex-col gap-7 sm:flex-row self-baseline ">
          <div className="relative">
            <span className="flex gap-2 ">
              <p className="text-[#989898] text-xl">Category:</p>
              <p onClick={handleCategoryToggle}>{category}</p>
              {categoryToggle && (
                <div className="absolute z-10 bg-white shadow-lg">
                  {categoryData?.map((item, index) => (
                    <div
                      key={index}
                      onClick={() => handleCategorySelection(item)}
                      className="p-3 cursor-pointer hover:bg-gray-200">
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </span>
          </div>

          <div className="relative">
            <span className="flex gap-2">
              <p className="text-[#989898] text-xl">Author:</p>
              <p onClick={handleAuthorToggle}>{author}</p>
              {authorToggle && (
                <div className="absolute z-10 bg-white shadow-lg">
                  {authorData?.map((item, index) => (
                    <div
                      key={index}
                      onClick={() => handleAuthorSelection(item)}
                      className="p-3 cursor-pointer hover:bg-gray-200">
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </span>
          </div>
        </div>
        <div className="flex items-center ">
          <input
            placeholder="Find a Product"
            className="w-[300px] sm:w-[220px] px-4 py-1 border-2 h-11"
          />
          <span className="py-[10px] px-[16px] text-lg h-11 border-2 bg-white hover:bg-[#f1f0f0] cursor-pointer ">
            <IoSearch />
          </span>
        </div>
      </div>

      <div>
        <div className="grid items-center justify-center grid-cols-1 gap-5 p-4 md:grid-cols-2">
          {/* Render the courses based on the filtered courses */}
          {/* Assuming filteredCourses is being handled by Redux and not within this component */}
          {filteredCourses?.map((course, index) => (
            <div
              key={index}
              className="w-[300px] h-full flex flex-col bg-[#f7f7f7] shadow-[0px_1px_#d4baf3] 
              border border-[#d4baf3] rounded-[9px] overflow-hidden cursor-pointer lg:w-[380px] hover:border-[#9d5ee8] hover:border-2">
              <img src={course?.img} className="object-cover " />
              <div className="flex flex-col justify-between h-full gap-10 px-4 py-5">
                <div>
                  <span className="text-[#5A00C7] text-lg font-bold">
                    {course?.title}
                  </span>
                  <p className="text-sm text-black bg-white line-clamp-2 ">
                    {course?.desc}
                  </p>
                </div>
                <div className="flex items-center justify-between text-black bg-white ">
                  <p>{course?.tutor}</p>
                  <p className="text-[#5a05c2] text-sm font-bold ">
                    {course?.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllCourses;
