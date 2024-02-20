import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <header className="header-content">
        <a href="/"><img src="/photos/logo.png" alt="logo" className="logo" /></a>
        <nav className="nav">
          <a href="/" className="nav-link">
            Home
          </a>
          <a href="/project" className="nav-link">
            Projects
          </a>
          <a href="/" className="nav-link">
            Hackathons
          </a>
          <Link to="/about" className="nav-link">
            About
          </Link>
        </nav>
        <nav className="nav1">
        <a href="/login" className="nav-btn">
            Login
          </a>
          <a href="/signup" className="nav-btn">
            SignUp
          </a>
        </nav>
      </header>
    </div>
  );
};

export default Header;