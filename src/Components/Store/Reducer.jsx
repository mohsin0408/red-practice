// Store/Reducer.js
import { TOGGLE_THEME, SET_SORT_OPTION } from "./Action";
import { courseData } from "../../Data/Data"; // Assuming the courseData is imported here

const initialState = {
  theme: "light",
  sortOption: "normal",
  sortedCourses: courseData.data, // Initial courses data
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return { ...state, theme: state.theme === "dark" ? "light" : "dark" };

    case SET_SORT_OPTION:
      const sortOption = action.payload;
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

    default:
      return state;
  }
};

export default rootReducer;
