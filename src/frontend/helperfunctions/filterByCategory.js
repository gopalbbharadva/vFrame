export const filterByCategory = (categoryName, filterDispatch) => {
  console.log("inside method", categoryName);
  filterDispatch({
    type: "FILTER_BY_CATEGORY",
    payload: categoryName,
  });
};
