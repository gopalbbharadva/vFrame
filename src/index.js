import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { DataStoreProvider } from "./frontend/contexts/DataStoreContext";
import { FilterProvider } from "./frontend/contexts/FilterContext";
import { AuthProvider } from "./frontend/contexts/AuthContext";
import { PlaylistProvider } from "./frontend/contexts/PlaylistContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <FilterProvider>
          <DataStoreProvider>
            <PlaylistProvider>
              <App />
            </PlaylistProvider>
          </DataStoreProvider>
        </FilterProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
