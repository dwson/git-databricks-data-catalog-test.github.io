import React from "react";
import "../index.css";

const MercedesLogo = () => (
  <span className="mb-logo mb-logo-center" aria-label="Mercedes-Benz Logo">
    <svg width="48" height="48" viewBox="0 0 32 32" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="16" cy="16" r="15" />
      <path d="M16 16 L16 4" />
      <path d="M16 16 L27 24" />
      <path d="M16 16 L5 24" />
    </svg>
  </span>
);

const Header = () => (
  <header className="mb-header mb-header-center">
    <div className="mb-header-center-content">
      <MercedesLogo />
    </div>
  </header>
);

export default Header; 