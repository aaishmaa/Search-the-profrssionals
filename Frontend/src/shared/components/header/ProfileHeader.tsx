import React, { useState } from "react";
import "./ProfileHeader.css";

const ProfileHeader = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <header className="main-header">
      <div className="header-container">
        <div className="logo-container">
          <svg width="34" height="34" viewBox="0 0 34 34" className="logo-icon">
            <path
              d="M34,34 L28,34 L28,17 C28,12 24,8 19,8 C14,8 10,12 10,17 L10,34 L4,34 L4,17 C4,7 12,0 19,0 C26,0 34,7 34,17 L34,34 Z"
              fill="#0a66c2"
            />
            <path d="M0,34 L6,34 L6,11 L0,11 L0,34 Z" fill="#0a66c2" />
          </svg>
          <h1 className="logo-text">Search the Professional</h1>
        </div>

        <nav className="nav-container">
          <ul className="nav-list">
            <li className={`nav-item ${activeLink === "home" ? "active" : ""}`}>
              <a href="/home" onClick={() => handleLinkClick("home")}>
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path
                    d="M12 2L2 9.5V22h7v-7h6v7h7V9.5z"
                    fill={activeLink === "home" ? "#0a66c2" : "rgba(0,0,0,0.6)"}
                  />
                </svg>
                <span>Home</span>
              </a>
            </li>

            <li
              className={`nav-item ${activeLink === "profile" ? "active" : ""}`}
            >
              <a href="/profile" onClick={() => handleLinkClick("profile")}>
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"
                    fill={
                      activeLink === "profile" ? "#0a66c2" : "rgba(0,0,0,0.6)"
                    }
                  />
                </svg>
                <span>Profile</span>
              </a>
            </li>
          </ul>
        </nav>

        <div className="user-section">
          <div
            className="user-menu"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjNmY2ZjZmIj48cGF0aCBkPSJNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptMCAzYzEuNjYgMCAzIDEuMzQgMyAzcy0xLjM0IDMtMyAzLTMtMS4zNC0zLTMgMS4zNC0zIDMtM3ptMCAxNC41Yy0yLjUgMC00LjcxLTEuMjgtNi0zLjIyLjAzLTEuOTkgNC0zLjA4IDYtMy4wOCAxLjk5IDAgNS45NyAxLjA5IDYgMy4wOC0xLjI5IDEuOTQtMy41IDMuMjItNiAzLjIyeiIvPjwvc3ZnPg=="
              alt="User"
              className="user-avatar"
            />
            <span className="user-name">Me</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              className="dropdown-arrow"
            >
              <path d="M8 11L3 6l1-1 4 4 4-4 1 1-5 5z" fill="#666" />
            </svg>

            {showDropdown && (
              <div className="dropdown-menu">
                <div className="dropdown-item">
                  <svg width="16" height="16" viewBox="0 0 16 16">
                    <path
                      d="M8 2C4.69 2 2 4.69 2 8s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 11c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm.5-8.5h-1v4l3.15 1.85.7-1.1L8.5 8.6V4.5z"
                      fill="#666"
                    />
                  </svg>
                  <span>Account</span>
                </div>
                <div className="dropdown-item">
                  <svg width="16" height="16" viewBox="0 0 16 16">
                    <path
                      d="M8 1a7 7 0 100 14A7 7 0 008 1zm0 13c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm.5-9.5h-1v4l3.15 1.85.7-1.1L8.5 8.6V4.5z"
                      fill="#666"
                    />
                  </svg>
                  <span>Settings</span>
                </div>
                <div className="dropdown-divider"></div>
                <div className="dropdown-item">
                  <svg width="16" height="16" viewBox="0 0 16 16">
                    <path
                      d="M14 4v-2h-12v2h-2v10h2v2h12v-2h2v-10h-2zm-12-1h10v-1h-10v1zm12 11h-10v-9h10v9zm-6-6h-2v4h2v-4z"
                      fill="#666"
                    />
                  </svg>
                  <span>Sign Out</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default ProfileHeader;
