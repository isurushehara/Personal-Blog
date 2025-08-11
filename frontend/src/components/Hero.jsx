import React from "react";
import "./../styles/hero.css";

export default function Hero({ post }) {
  return (
    <section className="hero">
      {post.thumbnail && (
        <img src={post.thumbnail} alt={post.title} />
      )}
      <div className="hero-text">
        <h1>{post.title}</h1>
        <p>{post.description || post.excerpt || post.content.substring(0, 150) + "..."}</p>
      </div>
    </section>
  );
}
