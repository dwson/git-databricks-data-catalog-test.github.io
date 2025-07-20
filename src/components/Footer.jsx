import React from "react";
import "../index.css";

const MercedesLogo = () => (
  <span className="mb-logo mb-footer-logo" aria-label="Mercedes-Benz Logo">
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="16" cy="16" r="15" />
      <path d="M16 16 L16 4" />
      <path d="M16 16 L27 24" />
      <path d="M16 16 L5 24" />
    </svg>
  </span>
);

const Footer = () => (
  <footer className="mb-footer">
    <div className="mb-footer-content">
      <div className="mb-footer-brand">
        <MercedesLogo />
      </div>
      <div className="mb-footer-copy">&copy; {new Date().getFullYear()} Mercedes-Benz. All rights reserved.</div>
    </div>
  </footer>
);

export default Footer; 