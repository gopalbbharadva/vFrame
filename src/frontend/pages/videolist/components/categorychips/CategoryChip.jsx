import React from "react";
import { useFilter } from "../../../../contexts/contextExport";
import { filterByCategory } from "../../../../helperfunctions/filterByCategory";
import "./categorychip.css";

export const CategoryChip = ({ videoCategory }) => {
  const { categoryName } = videoCategory;
  const { filterState, filterDispatch } = useFilter();
  const { category } = filterState;

  return (
    <>
      <div
        onClick={() => filterByCategory(categoryName, filterDispatch)}
        className={`chip-item ${
          categoryName === category && "filled-chip"
        } flex-center pointer mg-hztl-sm`}
      >
        <p>{categoryName}</p>
      </div>
    </>
  );
};
