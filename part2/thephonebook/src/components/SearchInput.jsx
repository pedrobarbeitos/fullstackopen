import React from "react";

export const SearchInput = ({ search, handleSearch }) => {
  return (
    <div>
      search: <input value={search} onChange={handleSearch} />
    </div>
  );
};
