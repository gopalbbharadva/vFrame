import { createContext, useContext, useReducer, useEffect } from "react";
import { dataStoreReducer } from "../reducers/dataReducer";
import { getCategoryService, getVideoService } from "../services/dataService";

const DataStoreContext = createContext();

const initialState = {
  videos: [],
  categories: [],
  errors: [],
};

const DataStoreProvider = ({ children }) => {
  const [dataStoreState, dataStoreDispatch] = useReducer(
    dataStoreReducer,
    initialState
  );

  useEffect(() => {
    (async () => {
      try {
        const categoryResponse = await getCategoryService();
        categoryResponse.status === 200 &&
          dataStoreDispatch({
            type: "INITIAL_CATEGORIES",
            payload: categoryResponse.data.categories,
          });
      } catch (error) {
        dataStoreDispatch({
          type: "CATEGORY_ERROR",
          payload: "API for categories missing at server",
        });
      }

      try {
        const videoResponse = await getVideoService();
        videoResponse.status === 200 &&
          dataStoreDispatch({
            type: "INITIAL_VIDEOS",
            payload: videoResponse.data.videos,
          });
      } catch (error) {
        dataStoreDispatch({
          type: "VIDEO_ERROR",
          payload: "API for videos missing at server",
        });
      }
    })();
  }, []);

  return (
    <DataStoreContext.Provider value={{ dataStoreState, dataStoreDispatch }}>
      {children}
    </DataStoreContext.Provider>
  );
};

const useDataStore = () => useContext(DataStoreContext);

export { DataStoreProvider, useDataStore };
