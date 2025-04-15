import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from "./SearchPage"; // Search page
import DriverDashboard from "./DriverDashboard";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/driver-dashboard" element={<DriverDashboard />} />
      <Route path="/profiles" element={<SearchPage />} />
      <Route path="/" element={<DriverDashboard />} /> {/* default route */}
    </Routes>
  </BrowserRouter>
);