import React from "react";
import "./../styles/categorybar.css";

export default function CategoryBar() {
  const categories = ["Programming", "Health", "Travel", "Food", "Business"];
  
  return (
    <div className="category-bar">
      {categories.map((cat) => (
        <span key={cat} className="category">{cat}</span>
      ))}
    </div>
  );
}
