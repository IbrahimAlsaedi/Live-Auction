import React, { useState } from "react";

const ProductSearch = ({ onSearch, onReset }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchClick = () => {
    // Call the onSearch function with the search query
    onSearch(searchQuery);
  };

  const handleResetClick = () => {
    // Set an empty string as the search query
    setSearchQuery("");
    // Call the onSearch function with an empty string to show all items
    onSearch("");
  };

  return (
    <div className="text-center text-black p-4">
      <input
        type="text"
        placeholder="Search by product title..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-96 p-2 rounded-md bg-white"
      />
      <button
        onClick={handleSearchClick}
        className="bg-blue-500 hover.bg-blue-700 text-white font-bold py-2 px-3 ml-2 rounded-md"
      >
        Search
      </button>
      <button
        onClick={handleResetClick}
        className="bg-gray-300 hover.bg-gray-500 text-gray-700 font-bold py-2 px-3 ml-2 rounded-md"
      >
        Reset
      </button>
    </div>
  );
};

export default ProductSearch;
