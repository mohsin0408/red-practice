export const TOGGLE_THEME = "TOGGLE_THEME";
export const SET_SORT_OPTION = "SET_SORT_OPTION";
export const HANDLE_CATEGORY_FILTER = "HANDLE_CATEGORY_FILTER";
export const HANDLE_AUTHOR_FILTER = "HANDLE_AUTHOR_FILTER";

export const toggleTheme = () => ({
  type: TOGGLE_THEME,
});

export const setSortOption = (option) => ({
  type: SET_SORT_OPTION,
  payload: option, // 'option' is passed here, and it will be available in action.payload
});

export const handleCategoryFilter = (selectedCategory) => ({
  type: HANDLE_CATEGORY_FILTER,
  payload: selectedCategory,
});

export const handleAuthorFilter = (selectedAuthor) => ({
  type: HANDLE_AUTHOR_FILTER,
  payload: selectedAuthor,
});
