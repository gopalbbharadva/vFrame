import "./App.css";
import { Approute, Navbar } from "./frontend/components/componentExport";
import { Loader } from "./frontend/components/loader/Loader";
import { useDataStore } from "./frontend/contexts/DataStoreContext";
import { Toaster } from "react-hot-toast";

function App() {
  const { showLoader } = useDataStore();

  return (
    <>
      {showLoader && <Loader />}
      <div className="App">
        <Navbar />
        <Approute />
        <Toaster />
      </div>
    </>
  );
}

export default App;
