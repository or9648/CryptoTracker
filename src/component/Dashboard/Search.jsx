import React from "react";
import SearchIcon from "@mui/icons-material/Search";

function Search({ search, handleChange }) {
  return (
    <div className="flex   justify-center items-center bg-gray-800 p-2  text-white">
      <SearchIcon sx={{ color: "var(--grey)", fontSize: "1.2rem" }} />
      <input
        className="ml-2 bg-transparent text-white placeholder-gray-400 outline-none w-full"
        placeholder="Search"
        value={search}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
}

export default Search;
