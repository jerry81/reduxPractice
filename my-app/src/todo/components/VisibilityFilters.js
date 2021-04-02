
import "./VisibilityFilters.css";
import React from "react";
function VisibilityFilters() {
    return (
      <div className="VFRoot">
          show:
          <select>
              <option>All</option>
              <option>Finished</option>
              <option>Unfinished</option>
          </select>
      </div>
    );
  }
  
  export default VisibilityFilters;