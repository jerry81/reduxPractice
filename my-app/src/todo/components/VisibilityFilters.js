import "./VisibilityFilters.css";
import React, { useState } from "react";
import { connect } from "react-redux"; // connect api
import { setFilter } from "../redux/actions";

function VisibilityFilters({ setFilter }) {
  const [selectedFilter, setSelectedFilter] = useState("All");
  return (
    <div className="VFRoot">
      show:
      <select
        value={selectedFilter}
        onChange={(e) => {
          console.log('e.targetValue', e.target.value)
          setSelectedFilter(e.target.value);
          setFilter(e.target.value);
        }}
      >
        <option>All</option>
        <option>Finished</option>
        <option>Unfinished</option>
      </select>
    </div>
  );
}

export default connect(null, { setFilter })(VisibilityFilters);
