export const filterByCategory = (categoryName, filterDispatch) => {
  filterDispatch({
    type: "FILTER_BY_CATEGORY",
    payload: categoryName,
  });
};
