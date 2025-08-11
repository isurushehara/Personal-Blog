import "./../styles/navbar.css";

export default function Navbar({ onToggleLeft, onToggleRight, showToggleButtons = false }) {
  return (
    <nav className="navbar">
      <div className="logo">MyBlog</div>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>

      {showToggleButtons && (
        <div className="sidebar-toggle-buttons">
          <button onClick={onToggleLeft} aria-label="Toggle Table of Contents">
            ☰ TOC
          </button>
          <button onClick={onToggleRight} aria-label="Toggle Related Posts">
            ☰ Related
          </button>
        </div>
      )}

      <ul className="menu">
        <li><a href="/">Home</a></li>
        <li>Categories</li>
        <li>About</li>
      </ul>
    </nav>
  );
}
