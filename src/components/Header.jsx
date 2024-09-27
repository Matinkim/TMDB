import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1 className="logo">TMDB API</h1>

      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="" className="nav-link">
              영화
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="nav-link">
              TV 프로그램
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="nav-link">
              인물
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="nav-link">
              More
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
