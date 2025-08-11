import React from "react";
import "./../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">MyBlog</div>
      <div className="footer-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms & Conditions</a>
        <a href="#">Contact</a>
      </div>
      <div className="footer-copy">
        © {new Date().getFullYear()} MyBlog. All rights reserved.
      </div>
    </footer>
  );
}
