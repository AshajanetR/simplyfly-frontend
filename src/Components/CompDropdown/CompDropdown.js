import React from "react";
import FromDropdown from '../FromDropdown/FromDropdown';

import ToDropdown from "../ToDropdown/ToDropdown";
import "./CompDropdown.css"; 

const CompDropdown = () => {
  return (
    <div className="dropdown-container">
      <FromDropdown />
      <ToDropdown />
    </div>
  );
};

export default CompDropdown;
