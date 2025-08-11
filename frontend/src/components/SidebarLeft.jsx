import React, { useEffect, useState } from "react";
import "./../styles/sidebar.css";

export default function SidebarLeft({ content }) {
  const [toc, setToc] = useState([]);

  useEffect(() => {
    // Simple regex to find headings (## or ###)
    const regex = /^(#{2,3})\s+(.*)$/gm;
    let match;
    const headings = [];
    while ((match = regex.exec(content)) !== null) {
      const level = match[1].length; // 2 or 3
      const text = match[2];
      headings.push({ level, text, id: text.toLowerCase().replace(/\s+/g, "-") });
    }
    setToc(headings);
  }, [content]);

  return (
    <aside className="sidebar left-sidebar">
      <h3>Table of Contents</h3>
      <ul>
        {toc.map(({ id, text, level }) => (
          <li key={id} className={`toc-level-${level}`}>
            <a href={`#${id}`}>{text}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
