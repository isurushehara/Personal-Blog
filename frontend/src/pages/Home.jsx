import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CategoryBar from "../components/CategoryBar";
import PostList from "../components/PostList";
import Footer from "../components/Footer";

import matter from "gray-matter";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [featuredPost, setFeaturedPost] = useState(null);

  useEffect(() => {
    async function loadPosts() {
      // Updated to new Vite glob syntax:
      const allPosts = import.meta.glob("/src/posts/*.md", { query: "?raw", import: "default" });
      const postsData = [];

      for (const path in allPosts) {
        const raw = await allPosts[path]();
        const { data, content } = matter(raw);
        postsData.push({
          ...data,
          content,
          slug: path.split("/").pop().replace(".md", "")
        });
      }

      // Sort posts by date descending
      postsData.sort((a, b) => new Date(b.date) - new Date(a.date));

      setPosts(postsData);

      if (postsData.length > 0) setFeaturedPost(postsData[0]);
    }
    loadPosts();
  }, []);

  return (
    <>
      <Navbar showToggleButtons={false} />
      {featuredPost && <Hero post={featuredPost} />}
      <CategoryBar />
      <PostList posts={posts} />
      <Footer />
    </>
  );
}
