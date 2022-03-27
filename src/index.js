import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { DataStoreProvider } from "./frontend/contexts/DataStoreContext";
import { FilterProvider } from "./frontend/contexts/FilterContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <FilterProvider>
        <DataStoreProvider>
          <App />
        </DataStoreProvider>
      </FilterProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
