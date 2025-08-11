import React from "react";
import PostCard from "./PostCard";
import "./../styles/postlist.css";

export default function PostList({ posts }) {
  return (
    <div className="post-list">
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
