import { TOGGLE_THEME, SET_SORT_OPTION } from "./Action";
import { HANDLE_CATEGORY_FILTER, HANDLE_AUTHOR_FILTER } from "./Action";
import { courseData } from "../../Data/Data";

const initialState = {
  theme: "light",
  sortOption: "normal",
  sortedCourses: courseData.data,
  courses: courseData.data,
  filteredCourses: courseData.data, // Initialize with all courses
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return { ...state, theme: state.theme === "dark" ? "light" : "dark" };

    case SET_SORT_OPTION:
      const sortOption = action.payload; // action.payload contains the option (like "low-to-high" or "normal")
      let sortedCourses;
      switch (sortOption) {
        case "low-to-high":
          sortedCourses = [...courseData.data].sort(
            (a, b) => a.price - b.price
          );
          break;
        case "high-to-low":
          sortedCourses = [...courseData.data].sort(
            (b, a) => a.price - b.price
          );
          break;
        default:
          sortedCourses = courseData.data;
      }
      return { ...state, sortOption, sortedCourses };

    case HANDLE_CATEGORY_FILTER:
      const filteredByCategory = state.courses.filter(
        (course) =>
          action.payload === "All" || course.category === action.payload
      );
      return {
        ...state,
        filteredCourses: filteredByCategory,
      };

    case HANDLE_AUTHOR_FILTER:
      const filteredByAuthor = state.courses.filter(
        (course) => action.payload === "All" || course.tutor === action.payload
      );
      return {
        ...state,
        filteredCourses: filteredByAuthor,
      };

    default:
      return state;
  }
};

export default rootReducer;
