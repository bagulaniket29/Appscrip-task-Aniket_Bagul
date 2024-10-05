// components/Header.js

import React from 'react';

export default function Header() {
  return (
    <header className="header">
      <div className="logo">Your Logo</div>
      <nav>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <div className="cart-icon">🛒</div>

      <style jsx>{`
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 40px;
          background-color: #ffffff;
          box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
        }

        .logo {
          font-size: 24px;
          font-weight: bold;
        }

        .nav-links {
          display: flex;
          list-style: none;
        }

        .nav-links li {
          margin-left: 20px;
        }

        .nav-links a {
          text-decoration: none;
          color: #333;
          font-size: 16px;
        }

        .cart-icon {
          font-size: 24px;
          cursor: pointer;
        }
      `}</style>
    </header>
  );
}
