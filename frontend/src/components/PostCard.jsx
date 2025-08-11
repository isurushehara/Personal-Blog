import React from "react";
import { Link } from "react-router-dom";

export default function PostCard({ post }) {
  return (
    <div className="post-card">
      {post.thumbnail && <img src={post.thumbnail} alt={post.title} />}
      <div className="post-info">
        <h2><Link to={`/blog/${post.slug}`}>{post.title}</Link></h2>
        <p>{post.date} | {post.category}</p>
        <p>{post.description || post.excerpt || post.content.substring(0, 100) + "..."}</p>
      </div>
    </div>
  );
}
