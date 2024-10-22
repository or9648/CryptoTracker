import React from "react";
import Pagination from "@mui/material/Pagination";

export default function PaginationControlled({ page, handlePageChange }) {
  return (
    <div className="pagination-div flex  p-4  bg-black  text-white items-center justify-center  ">
      <Pagination
        sx={{
          "& .MuiPaginationItem-root": {
            border: "1px solid grey",
            color: "#fff",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.1)", // Change background on hover
            },
          },
          "& .Mui-selected": {
            backgroundColor: "blue",
            borderColor: "blue",
          },
          "& .MuiPaginationItem-ellipsis": {
            border: "none",
          },
        }}
        count={10}
        page={page}
        onChange={handlePageChange}
      />
    </div>
  );
}
