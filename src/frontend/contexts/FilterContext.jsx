import { useContext, createContext, useReducer } from "react";
import { filterReducer } from "../reducers/filterReducer";

const FilterContext = createContext();

const initialState = {
  category: "All",
};

const FilterProvider = ({ children }) => {
  const [filterState, filterDispatch] = useReducer(filterReducer, initialState);

  console.log(filterState);

  return (
    <FilterContext.Provider value={{ filterState, filterDispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);

export { useFilter, FilterProvider };
