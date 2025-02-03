import { TOGGLE_THEME, SET_SORT_OPTION, SET_CAREGORY_TOGGLE } from "./Action";
import { courseData, categoryData, authorData } from "../../Data/Data";

const initialState = {
  theme: "light",
  sortOption: "normal",
  sortedCourses: courseData.data,
  categoryToggle: "false",
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

    case SET_CAREGORY_TOGGLE:

    default:
      return state;
  }
};

export default rootReducer;
