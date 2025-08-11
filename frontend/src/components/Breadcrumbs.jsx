import React from "react";
import "./../styles/breadcrumbs.css";

export default function Breadcrumbs({ onBack, current }) {
  return (
    <nav className="breadcrumbs">
      <button className="back-button" onClick={onBack}>
        ← Back
      </button>
      <span className="current">{current}</span>
    </nav>
  );
}
