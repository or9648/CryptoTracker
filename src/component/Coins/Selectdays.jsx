import { MenuItem, Select } from "@mui/material";
import React from "react";

function SelectDays({ days, handleDaysChange, noPTag }) {
  return (
    <div className={`flex items-center justify-start gap-2 mb-6 ${noPTag ? 'mb-0' : ''}`}>
      {!noPTag && <p className="text-white">Price change in </p>}
      <Select
        value={days} // Use the passed 'days' prop directly
        onChange={(e) => handleDaysChange(e.target.value)} // Get the value from the event
        sx={{
          height: "2.5rem",
          color: "var(--white)",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--white)",
          },
          "& .MuiSvgIcon-root": {
            color: "var(--white)",
          },
          "&:hover": {
            "&& fieldset": {
              borderColor: "#3a80e9",
            },
          },
        }}
      >
        <MenuItem value={7}>7 Days</MenuItem>
        <MenuItem value={30}>30 Days</MenuItem>
        <MenuItem value={60}>60 Days</MenuItem>
        <MenuItem value={90}>90 Days</MenuItem>
        <MenuItem value={120}>120 Days</MenuItem>
        <MenuItem value={365}>1 Year</MenuItem>
      </Select>
    </div>
  );
}

export default SelectDays;
