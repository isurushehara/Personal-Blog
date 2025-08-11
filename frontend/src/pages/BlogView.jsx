import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { marked } from "marked";
import matter from "gray-matter";

import Navbar from "../components/Navbar";
import Breadcrumbs from "../components/Breadcrumbs";
import SidebarLeft from "../components/SidebarLeft";
import SidebarRight from "../components/SidebarRight";

import "./../styles/blogview.css";

export default function BlogView() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState(null);
  const [showLeftSidebar, setShowLeftSidebar] = useState(true);
  const [showRightSidebar, setShowRightSidebar] = useState(true);

  useEffect(() => {
    async function loadPost() {
      const allPosts = import.meta.glob("/src/posts/*.md", { as: "raw" });

      for (const path in allPosts) {
        if (path.includes(`${id}.md`)) {
          const raw = await allPosts[path]();
          const { data, content } = matter(raw);
          setPost({ meta: data, content });
          break;
        }
      }
    }
    loadPost();
  }, [id]);

  if (!post) return <div>Loading post...</div>;

  return (
    <>
      <Navbar
        onToggleLeft={() => setShowLeftSidebar(!showLeftSidebar)}
        onToggleRight={() => setShowRightSidebar(!showRightSidebar)}
        showToggleButtons={true}
      />

      <div className="breadcrumbs-container">
        <Breadcrumbs onBack={() => navigate(-1)} current={post.meta.title} />
      </div>

      <div className="blogview-container">
        {showLeftSidebar && <SidebarLeft content={post.content} />}

        <main className="blog-content">
          <h1>{post.meta.title}</h1>
          <div className="post-meta">
            <span>By {post.meta.author}</span>
            <span>{new Date(post.meta.date).toLocaleDateString()}</span>
            {post.meta.readingTime && <span>{post.meta.readingTime}</span>}
          </div>

          {post.meta.thumbnail && (
            <img src={post.meta.thumbnail} alt={post.meta.title} className="featured-image" />
          )}

          <article
            className="post-body"
            dangerouslySetInnerHTML={{ __html: marked(post.content) }}
          />

          {/* TODO: Social share buttons, like, comments */}
        </main>

        {showRightSidebar && <SidebarRight />}
      </div>
    </>
  );
}
