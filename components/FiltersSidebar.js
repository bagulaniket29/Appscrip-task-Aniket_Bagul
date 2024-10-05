// components/FiltersSidebar.js

import React from 'react';

export default function FiltersSidebar() {
  return (
    <aside className="filters-sidebar">
      <h3>Filters</h3>
      <div className="filter-group">
        <h4>Category</h4>
        <ul>
          <li><input type="checkbox" /> Electronics</li>
          <li><input type="checkbox" /> Clothing</li>
          <li><input type="checkbox" /> Accessories</li>
        </ul>
      </div>

      <style jsx>{`
        .filters-sidebar {
          width: 250px;
          padding: 20px;
          background-color: #f9f9f9;
          border-right: 1px solid #ddd;
        }

        .filters-sidebar h3 {
          font-size: 24px;
          margin-bottom: 20px;
        }

        .filter-group h4 {
          font-size: 18px;
          margin-bottom: 10px;
        }

        ul {
          list-style: none;
          padding-left: 0;
        }

        ul li {
          margin: 5px 0;
        }

        input[type="checkbox"] {
          margin-right: 8px;
        }
      `}</style>
    </aside>
  );
}
