import React from "react";

const Header = () => {
  return (
    <>
      <div>
        <div className="header-container">
          <div className="logo">
            <h1>Logo</h1>
          </div>
          <div className="nav-links">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="contact-button">
            <button>Contact</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
