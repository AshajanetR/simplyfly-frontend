import React from "react";
import FromDropdown from "../FromDropdown/FromDropdown";
import ToDropdown from "../ToDropdown/ToDropdown";
import DateDropdown from "../DateDropdown/DateDropdown";
import AdultDropdown from "../AdultDropdown/AdultDropdown";
import "./CompDropdown.css";

const CompDropdown = () => {
  return (
    <div className="dropdown-wrapper">
      <div className="dropdown-container">
        <FromDropdown />
        <ToDropdown />
        <DateDropdown />
        <AdultDropdown />
      </div>

      <div className="search-btn-wrapper">
        <button className="search-button">Search</button>
      </div>
    </div>
  );
};

export default CompDropdown;
