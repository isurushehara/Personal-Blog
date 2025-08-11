import React from "react";
import "./../styles/sidebar.css";

export default function SidebarRight() {
  const relatedPosts = [
    { id: 2, title: "React Context API" },
    { id: 3, title: "React Router Basics" },
  ];

  const popularPosts = [
    { id: 4, title: "Getting Started with JavaScript" },
    { id: 5, title: "CSS Flexbox Guide" },
  ];

  return (
    <aside className="sidebar right-sidebar">
      <section>
        <h3>Related Posts</h3>
        <ul>
          {relatedPosts.map(({ id, title }) => (
            <li key={id}>
              <a href={`/blog/${id}`}>{title}</a>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h3>Popular Posts</h3>
        <ul>
          {popularPosts.map(({ id, title }) => (
            <li key={id}>
              <a href={`/blog/${id}`}>{title}</a>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  );
}
