// Store/Action.js
export const TOGGLE_THEME = "TOGGLE_THEME";
export const SET_SORT_OPTION = "SET_SORT_OPTION";

// Action to toggle theme
export const toggleTheme = () => ({
  type: TOGGLE_THEME,
});

// Action to set sort option
export const setSortOption = (option) => ({
  type: SET_SORT_OPTION,
  payload: option,
});
