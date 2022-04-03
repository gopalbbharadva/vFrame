import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState,
} from "react";
import { actionTypes } from "../reducers/actionTypes";
import { dataStoreReducer } from "../reducers/dataReducer";
import { getCategoryService, getVideoService } from "../services/dataService";

const DataStoreContext = createContext();

const initialState = {
  videos: [],
  categories: [],
  error: "",
  isInWatchLater: false,
  isLiked: false,
  isInHistory: false,
};

const toastProps = {
  position: "top-center",
  duration: 2000,
  style: {
    fontSize: "1.2rem",
    background: "#333",
    color: "#fff",
  },
};

const DataStoreProvider = ({ children }) => {
  const [dataStoreState, dataStoreDispatch] = useReducer(
    dataStoreReducer,
    initialState
  );
  const [showLoader, setShowLoader] = useState(true);

  setTimeout(() => {
    setShowLoader(false);
  }, 2500);

  useEffect(() => {
    (async () => {
      try {
        const categoryResponse = await getCategoryService();
        categoryResponse.status === 200 &&
          dataStoreDispatch({
            type: actionTypes.INITIAL_CATEGORIES,
            payload: categoryResponse.data.categories,
          });
      } catch (error) {
        dataStoreDispatch({
          type: actionTypes.API_ERROR,
          payload: "API is not working",
        });
      }

      try {
        const videoResponse = await getVideoService();
        videoResponse.status === 200 &&
          dataStoreDispatch({
            type: actionTypes.INITIAL_VIDEOS,
            payload: videoResponse.data.videos,
          });
      } catch (error) {
        dataStoreDispatch({
          type: actionTypes.API_ERROR,
          payload: "API is not working",
        });
      }
    })();
  }, []);

  return (
    <DataStoreContext.Provider
      value={{
        toastProps,
        dataStoreState,
        dataStoreDispatch,
        showLoader,
        setShowLoader,
      }}
    >
      {children}
    </DataStoreContext.Provider>
  );
};

const useDataStore = () => useContext(DataStoreContext);

export { DataStoreProvider, useDataStore };
