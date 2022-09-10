import React, { useState } from "react";
import "./Search.css";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css  file
import { DateRangePicker } from "react-date-range";
import { Avatar, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

//Date Picker Components
function Search() {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    Key: "selection",
  };

  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  return (
    <div className="search">
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      <h2>Number of guests</h2>
      <Avatar className="Avatar" />
      <input min={0} defaultValue={2} type="number" />
      <Button onClick={() => navigate("/search")}>Search Airbnb</Button>
    </div>
  );
}

export default Search;
