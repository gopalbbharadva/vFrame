import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { DataStoreProvider } from "./frontend/contexts/DataStoreContext";
import { FilterProvider } from "./frontend/contexts/FilterContext";
import { AuthProvider } from "./frontend/contexts/AuthContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <FilterProvider>
          <DataStoreProvider>
            <App />
          </DataStoreProvider>
        </FilterProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
