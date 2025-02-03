export const TOGGLE_THEME = "TOGGLE_THEME";
export const SET_SORT_OPTION = "SET_SORT_OPTION";

export const toggleTheme = () => ({
  type: TOGGLE_THEME,
});

export const setSortOption = (option) => ({
  type: SET_SORT_OPTION,
  payload: option, // 'option' is passed here, and it will be available in action.payload
});
