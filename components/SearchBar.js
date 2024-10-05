// components/SearchBar.js

import React from 'react';

export default function SearchBar() {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search for products..." />
      <button>Search</button>

      <style jsx>{`
        .search-bar {
          display: flex;
          justify-content: center;
          margin: 20px 0;
        }

        input {
          width: 300px;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }

        button {
          padding: 10px 20px;
          margin-left: 10px;
          background-color: #007BFF;
          color: #fff;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
