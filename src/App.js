import "./App.css";
import { Approute, Navbar } from "./frontend/components/componentExport";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Approute />
      <Toaster />
    </div>
  );
}

export default App;
